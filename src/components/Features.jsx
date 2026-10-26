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
        background: 'radial-gradient(ellipse 90% 60% at 50% 10%, rgba(27, 107, 79, 0.45), transparent 70%), linear-gradient(180deg, #061710 0%, #0A3626 50%, #061710 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glows */}
      <Box sx={{ position: 'absolute', top: -100, right: -100, width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: -120, left: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(27,107,79,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{
            display: 'inline-flex',
            alignItems: 'center',
            bgcolor: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            borderRadius: 999,
            px: 2,
            py: 0.6,
            mb: 2,
          }}>
            <Typography variant="overline" sx={{ color: '#FBBF24', fontWeight: 800, letterSpacing: '0.15em', fontSize: '0.72rem', lineHeight: 1 }}>
              WHY CHOOSE US
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ color: 'white', mb: 2, fontSize: { xs: '2rem', md: '2.8rem' }, fontWeight: 800, letterSpacing: '-0.025em' }}>
            Why Choose EduGlobe Lanka?
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.72)', maxWidth: 600, mx: 'auto', lineHeight: 1.8, fontSize: '0.98rem' }}>
            We are committed to making your dream of studying abroad a reality — with trusted expertise and personalised guidance every step of the way.
          </Typography>
        </Box>

        {/* Feature Cards */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3,1fr)' }, gap: 3.2 }}>
          {features.map((feat, i) => (
            <Box
              key={i}
              sx={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 4,
                p: { xs: 3.5, md: 4.2 },
                backdropFilter: 'blur(12px)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default',
                '&:hover': {
                  background: 'rgba(255,255,255,0.08)',
                  borderColor: 'rgba(245, 158, 11, 0.35)',
                  transform: 'translateY(-6px)',
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)',
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
