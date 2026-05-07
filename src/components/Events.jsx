import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button, Chip, Avatar, useTheme } from '@mui/material';
import { Calendar, ArrowRight, Star, Quote } from 'lucide-react';

const events = [
  {
    date: 'May 10, 2026',
    title: 'Canada University Fair – Colombo',
    desc: 'Meet representatives from 30+ top Canadian universities. Free registration for all students.',
    tag: 'Upcoming',
    tagBg: '#125A41',
    accentColor: '#125A41',
  },
  {
    date: 'May 18, 2026',
    title: 'Australia Study Abroad Seminar',
    desc: 'In-depth seminar covering IELTS requirements, scholarship opportunities, and PR pathways.',
    tag: 'Free Entry',
    tagBg: '#c48013',
    accentColor: '#c48013',
  },
  {
    date: 'Jun 5, 2026',
    title: 'UK & Europe Education Expo 2026',
    desc: 'Explore world-class universities and talk directly with official admissions officers.',
    tag: 'Limited Seats',
    tagBg: '#1565c0',
    accentColor: '#1565c0',
  },
];

const testimonials = [
  {
    name: 'Nimesha Perera',
    role: 'University of Toronto, Canada',
    text: 'EduGlobe Lanka made my dream of studying in Canada a reality. The visa process was incredibly smooth and the team was supportive at every single step.',
    avatar: 'N',
    avatarBg: '#125A41',
  },
  {
    name: 'Kasun Jayawardena',
    role: 'University of Melbourne, Australia',
    text: "I was overwhelmed about which university to choose. EduGlobe Lanka's counsellors helped me find the perfect program. Genuinely couldn't have done it without them!",
    avatar: 'K',
    avatarBg: '#1565c0',
  },
  {
    name: 'Shalini Fernando',
    role: 'University of Manchester, UK',
    text: "The scholarship guidance I received was invaluable. I secured a partial scholarship and I'm beyond thrilled. EduGlobe Lanka is absolutely the best consultancy in Sri Lanka!",
    avatar: 'S',
    avatarBg: '#c48013',
  },
];

const Events = () => {
  const theme = useTheme();

  return (
    <>
      {/* ─── Events Section ─── */}
      <Box id="events" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              mb: 6,
            }}
          >
            <Box>
              <Typography variant="overline" sx={{ color: theme.palette.secondary.main, fontWeight: 700, letterSpacing: 3, fontSize: '0.78rem' }}>
                LATEST EVENTS
              </Typography>
              <Typography variant="h2" sx={{ color: theme.palette.primary.main, mt: 0.5, fontSize: { xs: '1.9rem', md: '2.6rem' } }}>
                Upcoming Events
              </Typography>
            </Box>
            <Button
              variant="outlined"
              color="primary"
              endIcon={<ArrowRight size={16} />}
              sx={{ borderRadius: 30, px: 3, py: 1.2, fontWeight: 700, flexShrink: 0 }}
            >
              See All Events
            </Button>
          </Box>

          {/* Use flexbox row for reliable 3-column layout */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {events.map((ev, i) => (
              <Box key={i} sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(33.33% - 16px)' }, minWidth: 0 }}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    border: `1px solid rgba(0,0,0,0.07)`,
                    borderTop: `4px solid ${ev.accentColor}`,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 16px 40px rgba(0,0,0,0.10)' },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5, flexWrap: 'wrap', gap: 1 }}>
                      <Chip
                        label={ev.tag}
                        size="small"
                        sx={{ bgcolor: ev.tagBg, color: 'white', fontWeight: 700, borderRadius: 1, height: 24, fontSize: '0.7rem' }}
                      />
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: theme.palette.text.secondary }}>
                        <Calendar size={14} color={theme.palette.secondary.main} />
                        <Typography variant="caption" sx={{ fontWeight: 600 }}>{ev.date}</Typography>
                      </Box>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: theme.palette.primary.main, lineHeight: 1.4, fontSize: '1.05rem' }}>
                      {ev.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.8 }}>
                      {ev.desc}
                    </Typography>
                    <Button
                      variant="text"
                      color="primary"
                      endIcon={<ArrowRight size={15} />}
                      sx={{ mt: 3, fontWeight: 700, p: 0, '&:hover': { bgcolor: 'transparent' } }}
                    >
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ─── Testimonials ─── */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(150deg, #edf7f2 0%, #f5faf7 50%, #edf4f9 100%)' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography variant="overline" sx={{ color: theme.palette.secondary.main, fontWeight: 700, letterSpacing: 3, fontSize: '0.78rem' }}>
              STUDENT TESTIMONIALS
            </Typography>
            <Typography variant="h2" sx={{ color: theme.palette.primary.main, mt: 1, mb: 2, fontSize: { xs: '1.9rem', md: '2.6rem' } }}>
              What Our Students Say
            </Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary, maxWidth: 520, mx: 'auto', lineHeight: 1.8 }}>
              Thousands of students have shaped their future with EduGlobe Lanka. Here is what some of them have to say.
            </Typography>
          </Box>

          {/* 3-column flex row */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {testimonials.map((t, i) => (
              <Box key={i} sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(33.33% - 16px)' }, minWidth: 0 }}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    boxShadow: '0 4px 24px rgba(18,90,65,0.07)',
                    border: '1px solid rgba(18,90,65,0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 20px 48px rgba(18,90,65,0.13)' },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {/* Quote icon */}
                    <Box sx={{ color: theme.palette.secondary.main, opacity: 0.3, mb: 2, lineHeight: 0 }}>
                      <Quote size={44} />
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary, lineHeight: 1.9, mb: 3, fontStyle: 'italic', fontSize: '0.95rem' }}
                    >
                      "{t.text}"
                    </Typography>

                    {/* Divider */}
                    <Box sx={{ height: '1px', bgcolor: 'rgba(18,90,65,0.1)', mb: 3 }} />

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: t.avatarBg,
                          width: 50,
                          height: 50,
                          fontWeight: 800,
                          fontSize: '1.1rem',
                          flexShrink: 0,
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        }}
                      >
                        {t.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                          {t.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 0.5, fontSize: '0.78rem' }}>
                          {t.role}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 0.3 }}>
                          {[...Array(5)].map((_, si) => (
                            <Star key={si} size={12} fill={theme.palette.secondary.main} color={theme.palette.secondary.main} />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Events;
