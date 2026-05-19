import React from 'react';
import { Box, Container, Typography, useTheme, Button } from '@mui/material';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  return (
    <Box id="gallery" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ color: theme.palette.secondary.main, fontWeight: 700, letterSpacing: 3, fontSize: '0.8rem' }}>
            OUR MOMENTS
          </Typography>
          <Typography variant="h2" sx={{ color: theme.palette.primary.main, mt: 1, mb: 2, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Success Stories & Gallery
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

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            endIcon={<ArrowRight size={18} />}
            onClick={() => navigate('/success-stories')}
            sx={{ borderRadius: 30, px: 4, py: 1.4, fontWeight: 700 }}
          >
            View Full Success Stories
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery;
