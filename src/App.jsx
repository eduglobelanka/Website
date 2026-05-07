import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Fab, Zoom, useScrollTrigger } from '@mui/material';
import { ChevronUp } from 'lucide-react';
import theme from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import WhoWeAre from './components/WhoWeAre';
import Destinations from './components/Destinations';
import Events from './components/Events';
import News from './components/News';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
          bottom: 24,
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
        <Partners />
        <Features />
        <WhoWeAre />
        <Destinations />
        <Events />
        <News />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
