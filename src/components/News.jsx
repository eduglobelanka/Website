import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { Calendar, User, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    title: "Canada's New Study Permit Rules: What You Need to Know",
    date: "April 15, 2026",
    author: "Admin",
    image: "/assets/images/news_canada_rules.webp",
    excerpt: "Important updates regarding study permits and work rights in Canada for international students...",
  },
  {
    title: "How to Write a Winning Statement of Purpose (SOP)",
    date: "April 10, 2026",
    author: "Counsellor",
    image: "/assets/images/news_sop_writing.webp",
    excerpt: "A step-by-step guide to crafting a compelling SOP that increases your admission chances...",
  },
  {
    title: "Top 10 Scholarships for Sri Lankan Students in 2026",
    date: "April 05, 2026",
    author: "Scholarship Team",
    image: "/assets/images/country_uk.webp", 
    excerpt: "Explore the most generous scholarship opportunities available for students from Sri Lanka...",
  }
];

const News = () => {
  const theme = useTheme();

  return (
    <Box id="news" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fcfcfc' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 6 }}>
          <Box>
            <Typography variant="overline" sx={{ color: theme.palette.secondary.main, fontWeight: 700, letterSpacing: 3, fontSize: '0.8rem' }}>
              LATEST NEWS & BLOGS
            </Typography>
            <Typography variant="h2" sx={{ color: theme.palette.primary.main, mt: 0.5, fontSize: { xs: '1.9rem', md: '2.6rem' } }}>
              Stay Updated with EduGlobe
            </Typography>
          </Box>
          <Button
            variant="outlined"
            color="primary"
            endIcon={<ArrowRight size={16} />}
            sx={{ borderRadius: 30, px: 3, py: 1.2, fontWeight: 700 }}
          >
            Read All News
          </Button>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {newsItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                bgcolor: 'white',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.10)',
                },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
              />
              <Box sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', gap: 3, mb: 2, color: theme.palette.text.secondary }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Calendar size={14} color={theme.palette.secondary.main} />
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>{item.date}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <User size={14} color={theme.palette.secondary.main} />
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>{item.author}</Typography>
                  </Box>
                </Box>
                <Typography variant="h6" sx={{
                  fontWeight: 700, mb: 1.5, color: theme.palette.primary.main,
                  lineHeight: 1.4, overflow: 'hidden',
                  display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{
                  color: theme.palette.text.secondary, mb: 3, lineHeight: 1.7,
                  overflow: 'hidden', flex: 1,
                }}>
                  {item.excerpt}
                </Typography>
                <Button
                  variant="text"
                  color="primary"
                  endIcon={<ArrowRight size={16} />}
                  sx={{ p: 0, fontWeight: 700, alignSelf: 'flex-start', '&:hover': { bgcolor: 'transparent' } }}
                >
                  Read More
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default News;
