import React from 'react';
import {
  Box, Container, Typography,
  Divider, useTheme, IconButton,
} from '@mui/material';
import { GraduationCap, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

/* ── Inline SVG social icons (no external dependency) ── */
const FB = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);
const TW = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const YT = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.57a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const quickLinks = [
  { label: 'Home',               href: '/', hash: 'home'         },
  { label: 'About Us',           href: '/', hash: 'about'        },
  { label: 'Services',           href: '/', hash: 'services'     },
  { label: 'Study Destinations', href: '/', hash: 'destinations' },
  { label: 'Events & Seminars',  href: '/', hash: 'events'       },
  { label: 'Gallery',            href: '/', hash: 'gallery'      },
  { label: 'Contact Us',         href: '/', hash: 'contact'      },
];
const destLinks = [
  { label: 'Study in UK',          href: '/', hash: 'destinations' },
  { label: 'Study in Canada',      href: '/', hash: 'destinations' },
  { label: 'Study in Australia',   href: '/', hash: 'destinations' },
  { label: 'Study in USA',         href: '/', hash: 'destinations' },
  { label: 'Study in New Zealand', href: '/', hash: 'destinations' },
  { label: 'Scholarships',         href: '/', hash: 'contact'      },
];
const serviceLinks = [
  { label: 'University Selection',  href: '/', hash: 'services' },
  { label: 'Visa Assistance',       href: '/', hash: 'services' },
  { label: 'IELTS Coaching',        href: '/', hash: 'services' },
  { label: 'SOP & LOR Writing',     href: '/', hash: 'services' },
  { label: 'Scholarship Guidance',  href: '/', hash: 'services' },
  { label: 'Pre-Departure Briefing',href: '/', hash: 'services' },
];

const FooterLinks = ({ items }) => {
  const handleClick = (e, hash) => {
    e.preventDefault();
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
      {items.map(({ label, href, hash }) => (
        <Box key={label} component="li" sx={{ mb: 1.4 }}>
          <Box
            component="a"
            href={href}
            onClick={(e) => handleClick(e, hash)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'rgba(255,255,255,0.58)',
              fontSize: '0.87rem',
              textDecoration: 'none',
              transition: 'color 0.2s ease, gap 0.2s ease',
              '&:hover': { color: '#F4A522', gap: 1.5 },
            }}
          >
            <ArrowRight size={11} style={{ flexShrink: 0 }} />
            {label}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const Footer = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* ── Main Footer ── */}
      <Box sx={{ bgcolor: '#0a2418', pt: 10, pb: 4 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '3.5fr 2fr 2fr 2fr 2.5fr' }, gap: { xs: 5, md: 4 } }}>

            {/* Brand */}
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                <img src="/eduglobelogo.png" alt="EduGlobeLanka Logo" style={{ height: 60, objectFit: 'contain' }} />
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: '1.3rem', color: 'white', lineHeight: 1, fontFamily: '"Outfit",sans-serif' }}>EduGlobe</Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.6rem', color: theme.palette.secondary.main, letterSpacing: '0.32em' }}>LANKA</Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, mb: 3.5, maxWidth: 270 }}>
                The best student visa consultancy in Sri Lanka and Jaffna — turning your global study dream into a world-class reality since 2014.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {[
                  { Icon: FB, label: 'Facebook', href: '#' },
                  { Icon: IG, label: 'Instagram', href: 'https://www.instagram.com/eduglobelankaconsultancy/' },
                  { Icon: TW, label: 'Twitter', href: '#' },
                  { Icon: YT, label: 'YouTube', href: '#' }
                ].map(({ Icon, label, href }, i) => (
                  <IconButton key={i} component="a" href={href} target={href !== '#' ? '_blank' : undefined} rel={href !== '#' ? 'noopener noreferrer' : undefined} aria-label={label} size="small" sx={{ color: 'rgba(255,255,255,0.6)', bgcolor: 'rgba(255,255,255,0.07)', width: 36, height: 36, transition: 'all 0.25s ease', '&:hover': { bgcolor: theme.palette.secondary.main, color: theme.palette.primary.dark, transform: 'translateY(-3px)' } }}>
                    <Icon />
                  </IconButton>
                ))}
              </Box>
            </Box>

            {/* Quick Links */}
            <Box>
              <Typography variant="overline" sx={{ color: theme.palette.secondary.main, fontWeight: 700, letterSpacing: 1.5, fontSize: '0.7rem', mb: 2.5, display: 'block' }}>Quick Links</Typography>
              <FooterLinks items={quickLinks} />
            </Box>

            {/* Destinations */}
            <Box>
              <Typography variant="overline" sx={{ color: theme.palette.secondary.main, fontWeight: 700, letterSpacing: 1.5, fontSize: '0.7rem', mb: 2.5, display: 'block' }}>Destinations</Typography>
              <FooterLinks items={destLinks} />
            </Box>

            {/* Services */}
            <Box>
              <Typography variant="overline" sx={{ color: theme.palette.secondary.main, fontWeight: 700, letterSpacing: 1.5, fontSize: '0.7rem', mb: 2.5, display: 'block' }}>Our Services</Typography>
              <FooterLinks items={serviceLinks} />
            </Box>

            {/* Contact */}
            <Box>
              <Typography variant="overline" sx={{ color: theme.palette.secondary.main, fontWeight: 700, letterSpacing: 1.5, fontSize: '0.7rem', mb: 2.5, display: 'block' }}>Contact Us</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {[
                  { Icon: MapPin, text: 'No. 45, Duplication Road,\nColombo 03, Sri Lanka' },
                  { Icon: Phone, text: '+44 7401 148372' },
                  { Icon: Mail, text: 'Eduglobelankaconsultancy@gmail.com' },
                ].map(({ Icon, text }, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Icon size={16} color={theme.palette.secondary.main} style={{ flexShrink: 0, marginTop: 2 }} />
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

          </Box>

          <Divider sx={{ my: 6, borderColor: 'rgba(255,255,255,0.07)' }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.35)' }}>
              © {new Date().getFullYear()} EduGlobeLanka Consultancy. All Rights Reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              {['Privacy Policy', 'Terms & Conditions', 'Sitemap'].map((t) => (
                <Typography
                  key={t}
                  variant="caption"
                  sx={{ color: 'rgba(255,255,255,0.35)', cursor: 'pointer', '&:hover': { color: theme.palette.secondary.main }, transition: 'color 0.2s' }}
                >
                  {t}
                </Typography>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
