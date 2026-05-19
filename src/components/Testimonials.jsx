import React, { useState, useEffect, useCallback } from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Avatar, useTheme, IconButton } from '@mui/material';
import { ArrowRight, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
  {
    name: 'Arunthavarajah Priya',
    role: 'University of Hertfordshire, UK',
    text: 'As a student from Jaffna, I was unsure how to navigate the UK visa process. EduGlobe Lanka guided me every step of the way — from my application to landing in the UK. Truly the best!',
    avatar: 'A',
    avatarBg: '#7b1fa2',
  },
  {
    name: 'Tharmalingam Suriya',
    role: 'Coventry University, UK',
    text: 'EduGlobe Lanka team is extremely professional and knowledgeable. They made my dream of studying in the UK a reality. I highly recommend them to every student in Jaffna!',
    avatar: 'T',
    avatarBg: '#125A41',
  },
  {
    name: 'Kanagasabai Nithya',
    role: 'University of Canberra, Australia',
    text: 'The counsellors at EduGlobe Lanka understood my situation perfectly and found the right university and course for me. The entire process was seamless. Thank you so much!',
    avatar: 'K',
    avatarBg: '#c62828',
  },
];

function TestimonialCarousel({ theme }) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const total = testimonials.length;

  const go = useCallback((newIdx, direction) => {
    setDir(direction);
    setIdx(newIdx);
  }, []);

  const next = useCallback(() => go((idx + 1) % total, 1), [idx, total, go]);
  const prev = useCallback(() => go((idx - 1 + total) % total, -1), [idx, total, go]);

  useEffect(() => {
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next]);

  const slideVariants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 120 : -120 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -120 : 120, transition: { duration: 0.32 } }),
  };

  const doubled = [...testimonials, ...testimonials];

  return (
    <Box>
      <Box sx={{ display: { xs: 'none', md: 'block' }, overflow: 'hidden' }}>
        <style>{`
          @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .testimonial-track {
            display: flex;
            gap: 24px;
            width: max-content;
            animation: marquee-scroll 36s linear infinite;
          }
          .testimonial-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <Box className="testimonial-track">
          {doubled.map((t, i) => (
            <Box key={i} sx={{ width: 420, flexShrink: 0 }}>
              <Card
                sx={{
                  height: '100%', borderRadius: 3,
                  boxShadow: '0 4px 24px rgba(18,90,65,0.07)',
                  border: '1px solid rgba(18,90,65,0.08)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 20px 48px rgba(18,90,65,0.13)' },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: theme.palette.secondary.main, opacity: 0.3, mb: 2, lineHeight: 0 }}>
                    <Quote size={40} />
                  </Box>
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.9, mb: 3, fontStyle: 'italic', fontSize: '0.93rem' }}>
                    "{t.text}"
                  </Typography>
                  <Box sx={{ height: '1px', bgcolor: 'rgba(18,90,65,0.1)', mb: 3 }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: t.avatarBg, width: 46, height: 46, fontWeight: 800, fontSize: '1rem', flexShrink: 0, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                      {t.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>{t.name}</Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 0.5, fontSize: '0.76rem' }}>{t.role}</Typography>
                      <Box sx={{ display: 'flex', gap: 0.3 }}>
                        {[...Array(5)].map((_, si) => <Star key={si} size={11} fill={theme.palette.secondary.main} color={theme.palette.secondary.main} />)}
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ overflow: 'hidden', minHeight: 300 }}>
          <AnimatePresence custom={dir} mode="wait">
            <motion.div key={idx} custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit">
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 4px 24px rgba(18,90,65,0.07)',
                  border: '1px solid rgba(18,90,65,0.08)',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ color: theme.palette.secondary.main, opacity: 0.3, mb: 2, lineHeight: 0 }}>
                    <Quote size={40} />
                  </Box>
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.9, mb: 3, fontStyle: 'italic', fontSize: '0.93rem' }}>
                    "{testimonials[idx].text}"
                  </Typography>
                  <Box sx={{ height: '1px', bgcolor: 'rgba(18,90,65,0.1)', mb: 3 }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: testimonials[idx].avatarBg, width: 46, height: 46, fontWeight: 800, fontSize: '1rem', flexShrink: 0, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                      {testimonials[idx].avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>{testimonials[idx].name}</Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 0.5, fontSize: '0.76rem' }}>{testimonials[idx].role}</Typography>
                      <Box sx={{ display: 'flex', gap: 0.3 }}>
                        {[...Array(5)].map((_, si) => <Star key={si} size={11} fill={theme.palette.secondary.main} color={theme.palette.secondary.main} />)}
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mt: 3 }}>
          <IconButton onClick={prev} sx={{ border: '1px solid rgba(18,90,65,0.2)', color: '#125A41', '&:hover': { bgcolor: '#125A41', color: 'white' }, transition: 'all 0.25s' }}>
            <ChevronLeft size={20} />
          </IconButton>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {testimonials.map((_, i) => (
              <Box key={i} onClick={() => go(i, i > idx ? 1 : -1)} sx={{ width: i === idx ? 22 : 8, height: 8, borderRadius: 4, bgcolor: i === idx ? '#125A41' : 'rgba(18,90,65,0.25)', cursor: 'pointer', transition: 'all 0.35s ease' }} />
            ))}
          </Box>
          <IconButton onClick={next} sx={{ border: '1px solid rgba(18,90,65,0.2)', color: '#125A41', '&:hover': { bgcolor: '#125A41', color: 'white' }, transition: 'all 0.25s' }}>
            <ChevronRight size={20} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

const Testimonials = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
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

        <TestimonialCarousel theme={theme} />
        
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

export default Testimonials;
