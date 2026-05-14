import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { CheckCircle } from 'lucide-react';

const checkPoints = [
  'Free initial consultation with certified counselors',
  'Partnerships with 200+ globally ranked universities',
  'Industry-leading 98% student visa success rate',
  'End-to-end support from application to post-arrival',
  'Dedicated IELTS & English proficiency test guidance',
  'Scholarship identification and application assistance',
];

const WhoWeAre = () => {
  const theme = useTheme();

  return (
    <Box id="about" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff', overflow: 'hidden' }}>
      <Container maxWidth="xl">
        {/* Two-column layout */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' },
          gap: { xs: 8, md: 10 },
          alignItems: 'center',
        }}>

          {/* ── Left: Image collage ── */}
          <Box sx={{
            position: 'relative',
            height: { xs: 340, sm: 460, md: 540 },
          }}>
            {/* Dot pattern */}
            <Box sx={{
              position: 'absolute', top: -10, left: -10,
              width: 140, height: 140,
              backgroundImage: `radial-gradient(${theme.palette.primary.main} 1.8px, transparent 1.8px)`,
              backgroundSize: '20px 20px',
              opacity: 0.15, zIndex: 0, pointerEvents: 'none', borderRadius: 2,
            }}/>

            {/* Main image */}
            <Box sx={{
              position: 'absolute', top: 0, right: 0,
              width: '75%', height: '83%',
              borderRadius: '24px 6px 24px 6px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0,0,0,0.16)',
              zIndex: 2,
              bgcolor: theme.palette.primary.light,
            }}>
              <img
                src="/assets/images/student_1.webp"
                alt="EduGlobeLanka Consultancy Student Success"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
            </Box>

            {/* Secondary image */}
            <Box sx={{
              position: 'absolute', bottom: 0, left: 0,
              width: '55%', height: '50%',
              borderRadius: '6px 24px 6px 24px',
              overflow: 'hidden',
              border: '8px solid white',
              boxShadow: '0 16px 40px rgba(0,0,0,0.14)',
              zIndex: 3,
              bgcolor: theme.palette.secondary.light,
            }}>
              <img
                src="/assets/images/student_2.webp"
                alt="EduGlobeLanka Overseas Education Counselor"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
            </Box>

            {/* Experience badge */}
            <Box sx={{
              position: 'absolute',
              right: { xs: 0, md: '-10px' },
              top: '46%',
              bgcolor: theme.palette.secondary.main,
              borderRadius: 3,
              py: 1.5, px: 2,
              zIndex: 4,
              textAlign: 'center',
              boxShadow: '0 8px 28px rgba(244,165,34,0.45)',
              minWidth: 90,
            }}>
              <Typography sx={{ fontWeight: 900, color: theme.palette.primary.dark, lineHeight: 1, fontSize: '2rem', fontFamily: '"Outfit",sans-serif' }}>
                5+
              </Typography>
              <Typography sx={{ fontWeight: 700, color: theme.palette.primary.dark, fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: 0.5, lineHeight: 1.4, mt: 0.3 }}>
                Years of<br/>Experience
              </Typography>
            </Box>
          </Box>

          {/* ── Right: Content ── */}
          <Box>
            <Typography variant="overline" sx={{ color: theme.palette.secondary.main, fontWeight: 700, letterSpacing: 3, fontSize: '0.78rem' }}>
              ABOUT US
            </Typography>
            <Typography variant="h2" sx={{ color: theme.palette.primary.main, mt: 1, mb: 1.5, fontSize: { xs: '1.9rem', md: '2.6rem' }, lineHeight: 1.22 }}>
              A Global Leader in<br/>Overseas Education
            </Typography>

            {/* Underline */}
            <Box sx={{
              width: 64, height: 4,
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: 2, mb: 3,
            }}/>

            <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 2.5, lineHeight: 1.85, fontSize: '0.97rem' }}>
              EduGlobe Lanka is recognized as the best student visa consultancy in Sri Lanka and Jaffna with over 5 years of hands-on experience. We have successfully guided 200+ students into top universities across the UK, Canada, Australia, USA, and New Zealand.
            </Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 4, lineHeight: 1.85, fontSize: '0.97rem' }}>
              Our certified counselors deliver fully personalised guidance — from university selection and application writing to visa processing and post-arrival support — ensuring a seamless journey from start to finish.
            </Typography>

            {/* Checklist — CSS grid 2 columns */}
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 1.5,
              mb: 4.5,
            }}>
              {checkPoints.map((point) => (
                <Box key={point} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <CheckCircle size={17} color={theme.palette.primary.main} style={{ flexShrink: 0, marginTop: 3 }}/>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}>
                    {point}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.5, borderRadius: 30, fontWeight: 700 }}>
              Read More About Us
            </Button>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
