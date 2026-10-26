import React, { useState } from 'react';
import {
  Box, Container, Grid, Typography, Button, Card, CardMedia, Chip, useTheme,
} from '@mui/material';
import { MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const destinations = [
  {
    id: 'uk',
    name: 'United Kingdom',
    image: '/assets/images/country_uk.webp',
    badge: 'Heritage & Quality',
    programs: 'Top Universities',
    highlight: 'University of Hertfordshire, Cardiff Met, Coventry University',
    badgeBg: '#1565c0',
    span: { xs: 12, sm: 6, md: 4 },
  },
  {
    id: 'australia',
    name: 'Australia',
    image: '/assets/images/country_aus.webp',
    badge: 'Top Rated',
    programs: 'Top Universities',
    highlight: 'Victoria University, University of Canberra',
    badgeBg: '#125A41',
    span: { xs: 12, sm: 6, md: 4 },
  },
  {
    name: 'Germany',
    image: '/assets/images/country_germany.webp',
    badge: 'Engineering & Tech',
    programs: 'Top Universities',
    highlight: 'Constructor University',
    badgeBg: '#d32f2f',
    span: { xs: 12, sm: 6, md: 4 },
  },
  {
    name: 'France',
    image: '/assets/images/country_france.webp',
    badge: 'Business & Arts',
    programs: 'Top Universities',
    highlight: 'Burgundy School of Business',
    badgeBg: '#00796b',
    span: { xs: 12, sm: 6, md: 4 },
  },
  {
    id: 'canada',
    name: 'Canada',
    image: '/assets/images/country_canada.webp',
    badge: 'Most Popular',
    programs: 'Top Universities',
    highlight: 'PR-Friendly & High Visa Success',
    badgeBg: '#d32f2f',
    span: { xs: 12, sm: 6, md: 4 },
  },
];

const DestCard = ({ dest, hovered, onEnter, onLeave, onClick }) => {
  const theme = useTheme();
  return (
    <Card
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      sx={{
        position: 'relative',
        height: { xs: 280, sm: 320, md: 360 },
        borderRadius: 4,
        overflow: 'hidden',
        cursor: 'pointer',
        border: '1px solid rgba(226, 232, 240, 0.8)',
        boxShadow: hovered
          ? '0 28px 60px -12px rgba(15, 23, 42, 0.28)'
          : '0 4px 20px -2px rgba(15, 23, 42, 0.08)',
        transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'translateY(-10px)' : 'none',
      }}
    >
      <CardMedia
        component="img"
        image={dest.image}
        alt={dest.name}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }}
      />
      {/* Dynamic Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: hovered
            ? 'linear-gradient(to top, rgba(8,46,33,0.95) 0%, rgba(15,23,42,0.5) 50%, rgba(0,0,0,0.1) 100%)'
            : 'linear-gradient(to top, rgba(8,46,33,0.85) 0%, rgba(15,23,42,0.2) 60%, transparent 100%)',
          transition: 'background 0.4s ease',
        }}
      />
      {/* Modern Badge */}
      <Chip
        label={dest.badge}
        size="small"
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          bgcolor: dest.badgeBg,
          color: 'white',
          fontWeight: 700,
          fontSize: '0.72rem',
          height: 26,
          borderRadius: 999,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
      />
      {/* Text Content */}
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: { xs: 2.5, md: 3.2 }, color: 'white' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, mb: 0.6 }}>
          <MapPin size={13} color={theme.palette.secondary.light} />
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: '0.75rem' }}>
            {dest.programs}
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, mb: 0.5, fontSize: { xs: '1.3rem', md: '1.5rem' }, letterSpacing: '-0.02em' }}>
          {dest.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.86rem', mb: hovered ? 1.5 : 0, transition: 'all 0.3s ease' }}>
          {dest.highlight}
        </Typography>
        <Button
          size="small"
          endIcon={<ArrowRight size={14} />}
          sx={{
            color: '#FBBF24',
            fontWeight: 700,
            p: 0,
            minWidth: 0,
            fontSize: '0.85rem',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(6px)',
            transition: 'all 0.3s ease',
            '&:hover': { bgcolor: 'transparent', letterSpacing: 0.5 },
          }}
        >
          Explore Programs
        </Button>
      </Box>
    </Card>
  );
};

const Destinations = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  const handleCardClick = (id) => {
    if (id) {
      navigate(`/study-in/${id}`);
    }
  };

  return (
    <Box id="destinations" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f5f7f6' }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Typography variant="overline" sx={{ color: theme.palette.secondary.main, fontWeight: 700, letterSpacing: 3, fontSize: '0.8rem' }}>
            STUDY DESTINATIONS
          </Typography>
          <Typography variant="h2" sx={{ color: theme.palette.primary.main, mt: 1, mb: 2, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Where Would You Like to Study?
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary, maxWidth: 560, mx: 'auto', lineHeight: 1.8 }}>
            Choose from the world's most sought-after study destinations. We guide you every step of the way.
          </Typography>
        </Box>

        {/* Cards Grid */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
          {destinations.map((dest, i) => (
            <Box key={dest.name} sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' } }}>
              <DestCard
                dest={dest}
                hovered={hovered === i}
                onEnter={() => setHovered(i)}
                onLeave={() => setHovered(null)}
                onClick={() => handleCardClick(dest.id)}
              />
            </Box>
          ))}
        </Box>

        {/* View All CTA */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            endIcon={<ArrowRight size={18} />}
            sx={{ borderRadius: 30, px: 4, py: 1.4, fontWeight: 700 }}
          >
            View All Destinations
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Destinations;
