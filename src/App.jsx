import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Fab, Zoom, useScrollTrigger } from '@mui/material';
import { ChevronUp } from 'lucide-react';
import theme from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
const Partners = React.lazy(() => import('./components/Partners'));
const Features = React.lazy(() => import('./components/Features'));
const WhoWeAre = React.lazy(() => import('./components/WhoWeAre'));
const Destinations = React.lazy(() => import('./components/Destinations'));
const Events = React.lazy(() => import('./components/Events'));
const News = React.lazy(() => import('./components/News'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
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

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden' }}>
      <Header />
      <main>
        <Hero />
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
        <React.Suspense fallback={<div style={{ minHeight: '600px' }} />}>
          <Events />
        </React.Suspense>
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
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
