import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';

const galleryImages = [
  "/assets/images/gallery_1.webp",
  "/assets/images/gallery_2.webp",
  "/assets/images/student_1.webp",
  "/assets/images/student_2.webp",
  "/assets/images/country_canada.webp",
  "/assets/images/country_aus.webp"
];

const Gallery = () => {
  const theme = useTheme();

  return (
    <Box id="gallery" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ color: theme.palette.secondary.main, fontWeight: 700, letterSpacing: 3, fontSize: '0.8rem' }}>
            OUR MOMENTS
          </Typography>
          <Typography variant="h2" sx={{ color: theme.palette.primary.main, mt: 1, mb: 2, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            EduGlobe Gallery
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary, maxWidth: 600, mx: 'auto', lineHeight: 1.8 }}>
            A glimpse into the lives of our students and the milestones we have achieved together.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3,1fr)' }, gap: 2 }}>
          {galleryImages.map((img, index) => (
            <Box
              key={index}
              sx={{
                height: { xs: 240, md: 320 },
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                '&:hover img': { transform: 'scale(1.1)' },
              }}
            >
              <img
                src={img}
                alt={`EduGlobeLanka Consultancy Gallery Moment ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery;
