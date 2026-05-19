import React, { useState } from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { Shield, Book, PenTool, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 'visa-consultation',
    number: '01',
    title: 'Visa Consultation',
    desc: 'Expert, end-to-end guidance through the student visa process. We maintain a 98% approval rate through meticulous documentation and preparation.',
    icon: Shield,
    accent: '#125A41',
    tag: '98% Success Rate',
  },
  {
    id: 'ielts-coaching',
    number: '02',
    title: 'IELTS Coaching',
    desc: 'Targeted coaching for all four IELTS modules with mock exams, personalized feedback, and proven strategies to hit your target band score.',
    icon: Book,
    accent: '#c48013',
    tag: 'Band 7.0+ Guaranteed',
  },
  {
    id: 'sop-writing',
    number: '03',
    title: 'SOP & LOR Writing',
    desc: 'Bespoke statements of purpose and letters of recommendation crafted by professional editors to make your application stand out globally.',
    icon: PenTool,
    accent: '#1565c0',
    tag: '100% Unique Drafts',
  },
];

const ServicesSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  return (
    <Box
      id="services-main"
      sx={{
        py: { xs: 5, md: 8 },
        background: 'linear-gradient(160deg, #071810 0%, #0f3322 50%, #071810 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background circles */}
      <Box sx={{ position: 'absolute', top: -120, right: -120, width: 480, height: 480, borderRadius: '50%', border: '60px solid rgba(255,255,255,0.03)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, borderRadius: '50%', border: '50px solid rgba(244,165,34,0.06)', pointerEvents: 'none' }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography variant="overline" sx={{ color: '#F4A522', fontWeight: 700, letterSpacing: 4, fontSize: '0.78rem' }}>
            WHAT WE DO
          </Typography>
          <Typography variant="h2" sx={{ color: 'white', mt: 1, mb: 1.5, fontSize: { xs: '1.7rem', md: '2.2rem' }, fontWeight: 900 }}>
            Our Core Services
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560, mx: 'auto', lineHeight: 1.7, fontSize: '0.92rem' }}>
            Comprehensive, personalised support crafted for your unique study abroad journey.
          </Typography>
        </Box>

        {/* Cards — forced 3 columns on md+ */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 2, md: 3 },
          }}
        >
          {services.map((srv, i) => {
            const Icon = srv.icon;
            const isHovered = hovered === i;
            return (
              <Box
                key={srv.id}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => navigate(`/services/${srv.id}`)}
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  p: { xs: 3, md: 3.5 },
                  cursor: 'pointer',
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: isHovered ? `${srv.accent}80` : 'rgba(255,255,255,0.08)',
                  background: isHovered
                    ? `linear-gradient(145deg, ${srv.accent}22 0%, rgba(255,255,255,0.04) 100%)`
                    : 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transform: isHovered ? 'translateY(-10px)' : 'none',
                  boxShadow: isHovered ? `0 24px 60px ${srv.accent}30` : '0 4px 20px rgba(0,0,0,0.2)',
                }}
              >
                {/* Large faded number */}
                <Typography sx={{
                  position: 'absolute',
                  top: -10,
                  right: 20,
                  fontSize: '5rem',
                  fontWeight: 900,
                  color: 'rgba(255,255,255,0.04)',
                  lineHeight: 1,
                  fontFamily: '"Outfit", sans-serif',
                  userSelect: 'none',
                  transition: 'color 0.4s ease',
                  ...(isHovered && { color: `${srv.accent}18` }),
                }}>
                  {srv.number}
                </Typography>

                {/* Icon */}
                <Box sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 3,
                  bgcolor: isHovered ? srv.accent : 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isHovered ? 'white' : 'rgba(255,255,255,0.7)',
                  mb: 2,
                  transition: 'all 0.4s ease',
                  boxShadow: isHovered ? `0 8px 24px ${srv.accent}60` : 'none',
                }}>
                  <Icon size={22} />
                </Box>

                {/* Tag */}
                <Box sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  bgcolor: `${srv.accent}25`,
                  border: `1px solid ${srv.accent}50`,
                  borderRadius: 10,
                  px: 1.5,
                  py: 0.4,
                  mb: 2,
                }}>
                  <Typography sx={{ color: srv.accent, fontWeight: 700, fontSize: '0.72rem', letterSpacing: 0.5 }}>
                    {srv.tag}
                  </Typography>
                </Box>

                {/* Title */}
                <Typography variant="h5" sx={{
                  fontWeight: 800,
                  color: 'white',
                  mb: 1.5,
                  fontSize: { xs: '1.1rem', md: '1.2rem' },
                }}>
                  {srv.title}
                </Typography>

                {/* Description */}
                <Typography sx={{
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.65,
                  fontSize: '0.85rem',
                  mb: 2.5,
                }}>
                  {srv.desc}
                </Typography>

                {/* CTA */}
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: isHovered ? srv.accent : 'rgba(255,255,255,0.45)',
                  transition: 'all 0.3s ease',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                }}>
                  Learn More
                  <ArrowRight size={16} style={{ transition: 'transform 0.3s ease', transform: isHovered ? 'translateX(6px)' : 'none' }} />
                </Box>

                {/* Bottom accent line */}
                <Box sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: 3,
                  width: isHovered ? '100%' : '0%',
                  bgcolor: srv.accent,
                  borderRadius: '0 0 16px 16px',
                  transition: 'width 0.4s ease',
                }} />
              </Box>
            );
          })}
        </Box>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/register')}
            sx={{
              color: 'white',
              borderColor: 'rgba(255,255,255,0.3)',
              borderRadius: 30,
              px: 4,
              py: 1.2,
              fontWeight: 700,
              fontSize: '0.9rem',
              '&:hover': {
                borderColor: '#F4A522',
                color: '#F4A522',
                bgcolor: 'rgba(244,165,34,0.08)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Get Free Consultation →
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
