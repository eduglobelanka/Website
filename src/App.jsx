import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Fab, Zoom, useScrollTrigger } from '@mui/material';
import { ChevronUp } from 'lucide-react';
import theme from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import ScholarshipBanner from './components/ScholarshipBanner';
const Partners     = React.lazy(() => import('./components/Partners'));
const Features     = React.lazy(() => import('./components/Features'));
const WhoWeAre     = React.lazy(() => import('./components/WhoWeAre'));
const Destinations = React.lazy(() => import('./components/Destinations'));
// const Events    = React.lazy(() => import('./components/Events')); // temporarily hidden
const News         = React.lazy(() => import('./components/News'));
const Gallery      = React.lazy(() => import('./components/Gallery'));
const Contact      = React.lazy(() => import('./components/Contact'));
const Footer       = React.lazy(() => import('./components/Footer'));
const Register     = React.lazy(() => import('./components/Register'));
import WhatsAppWidget from './components/WhatsAppWidget';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function ScrollToTopButton() {
  const trigger = useScrollTrigger({ threshold: 400, disableHysteresis: true });

  return (
    <Zoom in={trigger}>
      <Fab
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        size="small"
        aria-label="scroll back to top"
        sx={{
          position: 'fixed',
          bottom: 96,
          right: 24,
          bgcolor: theme.palette.primary.main,
          color: 'white',
          zIndex: 1200,
          width: 44,
          height: 44,
          '&:hover': { bgcolor: theme.palette.secondary.main, color: theme.palette.primary.dark },
          boxShadow: '0 4px 20px rgba(18,90,65,0.4)',
        }}
      >
        <ChevronUp size={20} />
      </Fab>
    </Zoom>
  );
}

/* ── Full home page ─────────────────────────────────────────── */
function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden' }}>
      <Header />
      <main>
        <Hero />
        <ScholarshipBanner />
        <React.Suspense fallback={<div style={{ minHeight: '120px' }} />}>
          <Partners />
        </React.Suspense>
        <React.Suspense fallback={<div style={{ minHeight: '500px' }} />}>
          <Features />
        </React.Suspense>
        <React.Suspense fallback={<div style={{ minHeight: '600px' }} />}>
          <WhoWeAre />
        </React.Suspense>
        <React.Suspense fallback={<div style={{ minHeight: '700px' }} />}>
          <Destinations />
        </React.Suspense>
        {/* Events section temporarily hidden */}
        <React.Suspense fallback={<div style={{ minHeight: '500px' }} />}>
          <News />
        </React.Suspense>
        <React.Suspense fallback={<div style={{ minHeight: '500px' }} />}>
          <Gallery />
        </React.Suspense>
        <React.Suspense fallback={<div style={{ minHeight: '600px' }} />}>
          <Contact />
        </React.Suspense>
      </main>
      <React.Suspense fallback={<div style={{ minHeight: '300px' }} />}>
        <Footer />
      </React.Suspense>
      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
  );
}

/* ── App with routing ───────────────────────────────────────── */
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <React.Suspense fallback={<div style={{ minHeight: '100vh', background: '#06120C' }} />}>
              <Register />
            </React.Suspense>
          }
        />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;

