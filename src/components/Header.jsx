import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton, Box, Container,
  Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Divider,
} from '@mui/material';
import { Menu as MenuIcon, Phone as PhoneIcon, Mail, GraduationCap, X } from 'lucide-react';

// Custom SVG social icons
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="0" />
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.57 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Events', href: '#events' },
  { label: 'News', href: '#news' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box sx={{ width: 300, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: theme.palette.primary.dark }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src="/eduglobelogo.png" alt="EduGlobeLanka Logo" style={{ height: 40, objectFit: 'contain' }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, color: 'white', lineHeight: 1 }}>EduGlobe</Typography>
            <Typography variant="caption" sx={{ color: theme.palette.secondary.main, fontWeight: 700, letterSpacing: 2 }}>LANKA CONSULTANCY</Typography>
          </Box>
        </Box>
        <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'white' }}>
          <X size={22} />
        </IconButton>
      </Box>
      <List sx={{ flex: 1, pt: 2 }}>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            sx={{
              cursor: 'pointer',
              py: 1.5,
              px: 3,
              borderLeft: '3px solid transparent',
              transition: 'all 0.2s',
              '&:hover': { borderLeftColor: theme.palette.primary.main, bgcolor: 'rgba(18,90,65,0.05)', color: theme.palette.primary.main },
            }}
          >
            <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 3 }}>
        <Button variant="contained" color="secondary" fullWidth onClick={() => scrollToSection('#contact')} sx={{ borderRadius: 30, py: 1.5, fontWeight: 700 }}>
          Free Consultation
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={scrolled ? 3 : 0}
      sx={{
        background: '#ffffff',
        color: theme.palette.text.primary,
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Top Strip */}
      {!isMobile && (
        <Box sx={{ bgcolor: theme.palette.primary.dark, py: 0.7 }}>
          <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255,255,255,0.85)' }}>
                <PhoneIcon size={14} color={theme.palette.secondary.main} />
                <Typography variant="caption" sx={{ fontWeight: 500 }}>+44 7401 148372</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255,255,255,0.85)' }}>
                <Mail size={14} color={theme.palette.secondary.main} />
                <Typography variant="caption" sx={{ fontWeight: 500 }}>Eduglobelankaconsultancy@gmail.com</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, color: 'rgba(255,255,255,0.8)' }}>
              <Box sx={{ cursor: 'pointer', '&:hover': { color: theme.palette.secondary.main }, transition: 'color 0.2s' }}><FacebookIcon /></Box>
              <Box sx={{ cursor: 'pointer', '&:hover': { color: theme.palette.secondary.main }, transition: 'color 0.2s' }}><InstagramIcon /></Box>
              <Box sx={{ cursor: 'pointer', '&:hover': { color: theme.palette.secondary.main }, transition: 'color 0.2s' }}><TwitterIcon /></Box>
              <Box sx={{ cursor: 'pointer', '&:hover': { color: theme.palette.secondary.main }, transition: 'color 0.2s' }}><YoutubeIcon /></Box>
            </Box>
          </Container>
        </Box>
      )}

      {/* Main Nav */}
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1.5, justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <img src="/eduglobelogo.png" alt="EduGlobeLanka Logo" style={{ height: 48, objectFit: 'contain' }} />
            <Box sx={{ lineHeight: 1 }}>
              <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, fontSize: '1.4rem', color: theme.palette.primary.main, lineHeight: 1 }}>
                EduGlobe
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: '0.65rem', color: theme.palette.secondary.main, letterSpacing: '0.25em', lineHeight: 1.2 }}>
                LANKA
              </Typography>
            </Box>
          </Box>

          {/* Desktop Nav */}
          {!isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    color: theme.palette.text.secondary,
                    fontWeight: 600,
                    px: 2,
                    fontSize: '0.9rem',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 6,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: '2px',
                      bgcolor: theme.palette.primary.main,
                      transition: 'width 0.3s ease',
                    },
                    '&:hover': {
                      color: theme.palette.primary.main,
                      bgcolor: 'transparent',
                      '&::after': { width: '60%' },
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="primary"
                onClick={() => scrollToSection('#contact')}
                sx={{ ml: 2, px: 3, py: 1, borderRadius: 30, fontWeight: 700, fontSize: '0.9rem' }}
              >
                Free Consultation
              </Button>
            </Box>
          ) : (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ color: theme.palette.primary.main }}>
              <MenuIcon size={26} />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: 300 } }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
