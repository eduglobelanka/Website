import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { Globe, Briefcase, Award, Clock, HeartHandshake, CheckCircle2 } from 'lucide-react';

const features = [
  { icon: <Globe size={30} />, title: 'Global University Network', desc: 'Access to 200+ partner universities across the UK, Canada, Australia, New Zealand & USA.' },
  { icon: <Briefcase size={30} />, title: 'End-to-End Support', desc: 'From university selection and application to visa interview preparation — we handle it all.' },
  { icon: <Award size={30} />, title: 'Scholarship Guidance', desc: 'We identify and help you apply for the right scholarships to minimize your financial burden.' },
  { icon: <Clock size={30} />, title: 'Fast & Easy Processing', desc: 'Streamlined processes ensure your applications are submitted correctly and on time.' },
  { icon: <HeartHandshake size={30} />, title: 'Post-Arrival Support', desc: 'Our support continues even after you land — accommodation, orientation, settling-in help.' },
  { icon: <CheckCircle2 size={30} />, title: 'High Visa Success Rate', desc: 'We maintain a 98% visa success rate with meticulous documentation and expert coaching.' },
];

const stats = [
  { num: '200+', label: 'Students Placed' },
  { num: '200+', label: 'Partner Universities' },
  { num: '10+', label: 'Countries Covered' },
  { num: '98%', label: 'Visa Success Rate' },
];

const Features = () => {
  const theme = useTheme();

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(160deg, ${theme.palette.primary.dark} 0%, #1d7a55 60%, ${theme.palette.primary.dark} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background circles */}
      <Box sx={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, borderRadius: '50%', border: '50px solid rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: -120, left: -80, width: 400, height: 400, borderRadius: '50%', border: '60px solid rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ color: theme.palette.secondary.main, fontWeight: 700, letterSpacing: 3, fontSize: '0.8rem' }}>
            WHY CHOOSE US
          </Typography>
          <Typography variant="h2" sx={{ color: 'white', mt: 1, mb: 2, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Why Choose EduGlobe Lanka?
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 580, mx: 'auto', lineHeight: 1.8 }}>
            We are committed to making your dream of studying abroad a reality — with trusted expertise and personalised guidance every step of the way.
          </Typography>
        </Box>

        {/* Feature Cards */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3,1fr)' }, gap: 3 }}>
          {features.map((feat, i) => (
            <Box
              key={i}
              sx={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 3,
                p: 4,
                transition: 'all 0.3s ease',
                cursor: 'default',
                '&:hover': {
                  background: 'rgba(255,255,255,0.11)',
                  transform: 'translateY(-6px)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
                },
              }}
            >
              <Box sx={{
                width: 60, height: 60, borderRadius: 2,
                bgcolor: theme.palette.secondary.main,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                mb: 3, color: theme.palette.primary.dark,
                boxShadow: '0 4px 16px rgba(244,165,34,0.4)',
              }}>
                {feat.icon}
              </Box>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 1.5, fontSize: '1.05rem' }}>
                {feat.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.8 }}>
                {feat.desc}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Stats */}
        <Box
          sx={{
            mt: 8,
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 4,
            p: { xs: 4, md: 6 },
          }}
        >
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4,1fr)' }, gap: 3 }}>
            {stats.map((s, i) => (
              <Box key={i} sx={{
                textAlign: 'center',
                borderRight: { md: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none' },
                px: 2,
              }}>
                <Typography variant="h2" sx={{ color: theme.palette.secondary.main, fontWeight: 900, fontSize: { xs: '2.2rem', md: '3rem' }, lineHeight: 1 }}>
                  {s.num}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 600, mt: 0.5, letterSpacing: 0.5 }}>
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
