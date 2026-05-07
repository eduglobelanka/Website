import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';

const partners = [
  "University of Toronto", "University of Melbourne", "King's College London", 
  "University of Auckland", "Seneca College", "RMIT University", 
  "University of British Columbia", "University of Sydney"
];

const Partners = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 6, bgcolor: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <Container maxWidth="xl">
        <Typography 
          variant="overline" 
          sx={{ 
            display: 'block', 
            textAlign: 'center', 
            color: 'rgba(0,0,0,0.4)', 
            fontWeight: 700, 
            letterSpacing: 2, 
            mb: 4 
          }}
        >
          TRUSTED BY TOP UNIVERSITIES WORLDWIDE
        </Typography>
        
        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: { xs: 4, md: 8 },
            opacity: 0.6
          }}
        >
          {partners.map((name, index) => (
            <Typography 
              key={index} 
              sx={{ 
                fontFamily: '"Outfit", sans-serif', 
                fontWeight: 700, 
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: theme.palette.primary.main,
                whiteSpace: 'nowrap'
              }}
            >
              {name}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Partners;
