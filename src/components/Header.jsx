import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton, Box, Container,
  Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Divider,
} from '@mui/material';
import { Menu as MenuIcon, Phone as PhoneIcon, Mail, GraduationCap, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/#services-main' },
  { label: 'Destinations', href: '/#destinations' },
  { label: 'News', href: '/#news' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'Contact', href: '/#contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setMobileOpen(false);
    
    // If we're not on the home page and trying to scroll to a hash, navigate home first
    if (href.startsWith('/#') && window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const id = href.replace('/#', '#');
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    if (href.startsWith('/#')) {
      const id = href.replace('/#', '#');
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (href.startsWith('/')) {
      navigate(href);
      return;
    }
    
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
      elevation={0}
      sx={{
        background: scrolled
          ? 'rgba(255, 255, 255, 0.88)'
          : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'rgba(226, 232, 240, 0.8)' : 'rgba(226, 232, 240, 0.4)',
        boxShadow: scrolled
          ? '0 10px 30px -10px rgba(15, 23, 42, 0.08)'
          : 'none',
        color: theme.palette.text.primary,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Top Strip */}
      {!isMobile && (
        <Box sx={{
          background: 'linear-gradient(90deg, #082E21 0%, #0F4D37 100%)',
          py: 0.65,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: 3.5 }}>
              <Box
                component="a"
                href="tel:+447401148372"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.9,
                  color: 'rgba(255,255,255,0.88)',
                  textDecoration: 'none',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  '&:hover': { color: theme.palette.secondary.main },
                }}
              >
                <PhoneIcon size={13} color={theme.palette.secondary.main} />
                <span>+44 7401 148372</span>
              </Box>
              <Box
                component="a"
                href="mailto:Eduglobelankaconsultancy@gmail.com"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.9,
                  color: 'rgba(255,255,255,0.88)',
                  textDecoration: 'none',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  '&:hover': { color: theme.palette.secondary.main },
                }}
              >
                <Mail size={13} color={theme.palette.secondary.main} />
                <span>Eduglobelankaconsultancy@gmail.com</span>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
              {[
                { icon: <FacebookIcon />, href: '#', label: 'Facebook' },
                { icon: <InstagramIcon />, href: 'https://www.instagram.com/eduglobelankaconsultancy/', label: 'Instagram' },
                { icon: <TwitterIcon />, href: '#', label: 'Twitter' },
                { icon: <YoutubeIcon />, href: '#', label: 'YouTube' },
              ].map((s, idx) => (
                <Box
                  key={idx}
                  component="a"
                  href={s.href}
                  target={s.href !== '#' ? '_blank' : undefined}
                  rel={s.href !== '#' ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  sx={{
                    color: 'rgba(255,255,255,0.75)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 26,
                    height: 26,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255,255,255,0.06)',
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: '#082E21',
                      bgcolor: theme.palette.secondary.main,
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  {s.icon}
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      )}

      {/* Main Nav */}
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: { xs: 1, md: 1.2 }, justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box
            onClick={() => scrollToSection('/#home')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              cursor: 'pointer',
              userSelect: 'none',
              transition: 'opacity 0.2s',
              '&:hover': { opacity: 0.9 },
            }}
          >
            <img src="/eduglobelogo.png" alt="EduGlobeLanka Logo" style={{ height: 46, objectFit: 'contain' }} />
            <Box sx={{ lineHeight: 1 }}>
              <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, fontSize: '1.35rem', color: theme.palette.primary.main, lineHeight: 1, letterSpacing: '-0.02em' }}>
                EduGlobe
              </Typography>
              <Typography sx={{ fontWeight: 800, fontSize: '0.62rem', color: theme.palette.secondary.main, letterSpacing: '0.28em', lineHeight: 1.2 }}>
                LANKA
              </Typography>
            </Box>
          </Box>

          {/* Desktop Nav */}
          {!isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    color: theme.palette.text.secondary,
                    fontWeight: 600,
                    px: 1.8,
                    py: 0.8,
                    borderRadius: 999,
                    fontSize: '0.88rem',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: theme.palette.primary.main,
                      bgcolor: 'rgba(15, 77, 55, 0.06)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="secondary"
                onClick={() => scrollToSection('#contact')}
                sx={{
                  ml: 1.5,
                  px: 2.8,
                  py: 1,
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: '0.88rem',
                }}
              >
                Free Consultation
              </Button>
            </Box>
          ) : (
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{
                color: theme.palette.primary.main,
                bgcolor: 'rgba(15, 77, 55, 0.05)',
                '&:hover': { bgcolor: 'rgba(15, 77, 55, 0.1)' },
              }}
            >
              <MenuIcon size={24} />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 320,
            bgcolor: '#ffffff',
            boxShadow: '-10px 0 40px rgba(0,0,0,0.15)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
