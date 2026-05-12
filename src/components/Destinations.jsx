import React, { useState } from 'react';
import {
  Box, Container, Grid, Typography, Button, Card, CardMedia, Chip, useTheme,
} from '@mui/material';
import { MapPin, ArrowRight } from 'lucide-react';

const destinations = [
  {
    name: 'United Kingdom',
    image: '/assets/images/country_uk.png',
    badge: 'Heritage & Quality',
    programs: 'Top Universities',
    highlight: 'University of Hertfordshire, Cardiff Met, Coventry University',
    badgeBg: '#1565c0',
    span: { xs: 12, sm: 6, md: 4 },
  },
  {
    name: 'Australia',
    image: '/assets/images/country_aus.png',
    badge: 'Top Rated',
    programs: 'Top Universities',
    highlight: 'Victoria University, University of Canberra',
    badgeBg: '#125A41',
    span: { xs: 12, sm: 6, md: 4 },
  },
  {
    name: 'Germany',
    image: '/assets/images/country_germany.png',
    badge: 'Engineering & Tech',
    programs: 'Top Universities',
    highlight: 'Constructor University',
    badgeBg: '#d32f2f',
    span: { xs: 12, sm: 6, md: 4 },
  },
  {
    name: 'France',
    image: '/assets/images/country_france.png',
    badge: 'Business & Arts',
    programs: 'Top Universities',
    highlight: 'Burgundy School of Business',
    badgeBg: '#00796b',
    span: { xs: 12, sm: 6, md: 4 },
  },
  {
    name: 'Canada',
    image: '/assets/images/country_canada.png',
    badge: 'Most Popular',
    programs: 'Top Universities',
    highlight: 'PR-Friendly & High Visa Success',
    badgeBg: '#d32f2f',
    span: { xs: 12, sm: 6, md: 4 },
  },
];

const DestCard = ({ dest, hovered, onEnter, onLeave }) => {
  const theme = useTheme();
  return (
    <Card
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      sx={{
        position: 'relative',
        height: { xs: 260, sm: 300, md: 340 },
        borderRadius: 3,
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: hovered
          ? '0 24px 56px rgba(0,0,0,0.28)'
          : '0 4px 24px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275)',
        transform: hovered ? 'translateY(-8px)' : 'none',
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
          transition: 'transform 0.6s ease',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }}
      />
      {/* Gradient */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: hovered
            ? 'linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)'
            : 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)',
          transition: 'background 0.4s ease',
        }}
      />
      {/* Badge */}
      <Chip
        label={dest.badge}
        size="small"
        sx={{
          position: 'absolute',
          top: 14,
          left: 14,
          bgcolor: dest.badgeBg,
          color: 'white',
          fontWeight: 700,
          fontSize: '0.7rem',
          height: 24,
          borderRadius: 1,
        }}
      />
      {/* Text */}
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 3, color: 'white' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, mb: 0.5 }}>
          <MapPin size={13} color={theme.palette.secondary.light} />
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
            {dest.programs}
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.4, fontSize: { xs: '1.2rem', md: '1.4rem' } }}>
          {dest.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.72)', mb: hovered ? 1.5 : 0, transition: 'margin 0.3s ease' }}>
          {dest.highlight}
        </Typography>
        <Button
          size="small"
          endIcon={<ArrowRight size={14} />}
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: 700,
            p: 0,
            minWidth: 0,
            fontSize: '0.82rem',
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
  const [hovered, setHovered] = useState(null);

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
        <Grid container spacing={3} justifyContent="center">
          {destinations.map((dest, i) => (
            <Grid item key={dest.name} xs={dest.span.xs} sm={dest.span.sm} md={dest.span.md}>
              <DestCard
                dest={dest}
                hovered={hovered === i}
                onEnter={() => setHovered(i)}
                onLeave={() => setHovered(null)}
              />
            </Grid>
          ))}
        </Grid>

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
