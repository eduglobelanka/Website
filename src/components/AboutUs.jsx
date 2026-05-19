import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Target, Shield, Users, Award, ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: d, ease: [0.25, 0.46, 0.45, 0.94] } }),
};

const stats = [
  { num: '200+', label: 'Students Placed' },
  { num: '5+', label: 'Years Experience' },
  { num: '98%', label: 'Visa Success Rate' },
  { num: '10+', label: 'Countries' },
];

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To provide transparent, reliable, and personalized overseas education guidance to every student in Sri Lanka.',
    color: '#125A41',
  },
  {
    icon: Shield,
    title: 'Integrity First',
    desc: 'We give 100% genuine advice. No false promises — just clear, honest pathways to your dream university.',
    color: '#1565c0',
  },
  {
    icon: Users,
    title: 'Student Centric',
    desc: 'Your success is our success. We stay with you from first consultation until you land safely abroad.',
    color: '#c48013',
  },
  {
    icon: Award,
    title: 'Proven Results',
    desc: 'With a 98% visa success rate, our track record speaks louder than any promise we could make.',
    color: '#7b1fa2',
  },
];

const checkPoints = [
  'Free initial consultation with certified counselors',
  'Access to 200+ globally ranked partner universities',
  'End-to-end support from application to post-arrival',
  'Dedicated IELTS & English proficiency coaching',
  'Scholarship identification & application assistance',
  'SOP, LOR, and document preparation by experts',
];

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#f5f7f6' }}>
      <Header />

      {/* ── Hero ─────────────────────────────────────────── */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#071810',
          py: { xs: 7, md: 10 },
          overflow: 'hidden',
        }}
      >
        <Box sx={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,165,34,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <Box sx={{ position: 'absolute', bottom: -60, left: -60, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(18,90,65,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Button startIcon={<ArrowLeft size={16} />} onClick={() => navigate('/')} sx={{ mb: 3, color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', '&:hover': { color: '#F4A522' } }}>
            Back to Home
          </Button>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Typography variant="overline" sx={{ color: '#F4A522', fontWeight: 700, letterSpacing: 4, fontSize: '0.72rem' }}>
              WHO WE ARE
            </Typography>
            <Typography variant="h1" sx={{ color: 'white', mt: 1, mb: 2, fontSize: { xs: '2rem', md: '3.2rem' }, fontWeight: 900, lineHeight: 1.2 }}>
              Turning Ambitions into<br />Global Achievements
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.65)', maxWidth: 600, fontSize: '1rem', lineHeight: 1.8 }}>
              EduGlobe Lanka is the premier student visa consultancy in Sri Lanka and Jaffna — guiding hundreds of students to world-class universities worldwide.
            </Typography>
          </motion.div>

          {/* Stats Row */}
          <motion.div custom={0.2} initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mt: 6, maxWidth: 700 }}>
              {stats.map((s, i) => (
                <Box key={i} sx={{ textAlign: 'center', p: 2, borderRadius: 3, bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <Typography sx={{ color: '#F4A522', fontWeight: 900, fontSize: { xs: '1.6rem', md: '2rem' }, lineHeight: 1, fontFamily: '"Outfit",sans-serif' }}>
                    {s.num}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', fontWeight: 600, mt: 0.5, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ── Our Story ──────────────────────────────────────── */}
      <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: 'white' }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">

            {/* Left: Small image with badge */}
            <Grid item xs={12} md={4}>
              <motion.div custom={0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Box sx={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                  {/* Image — capped height */}
                  <Box sx={{ borderRadius: 5, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.13)', height: { xs: 260, md: 340 } }}>
                    <img
                      src="/assets/images/student_1.webp"
                      alt="EduGlobe Lanka Team"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                    />
                  </Box>
                  {/* Experience badge */}
                  <Box sx={{
                    position: 'absolute', bottom: -18, right: -18,
                    bgcolor: '#F4A522', borderRadius: 3,
                    px: 2.5, py: 1.5, textAlign: 'center',
                    boxShadow: '0 8px 24px rgba(244,165,34,0.45)',
                  }}>
                    <Typography sx={{ fontWeight: 900, color: '#06120C', lineHeight: 1, fontSize: '1.8rem', fontFamily: '"Outfit",sans-serif' }}>5+</Typography>
                    <Typography sx={{ fontWeight: 700, color: '#06120C', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: 0.5 }}>Years<br />Experience</Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Right: Story text + checklist */}
            <Grid item xs={12} md={8}>
              <motion.div custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Typography variant="overline" sx={{ color: '#F4A522', fontWeight: 700, letterSpacing: 3, fontSize: '0.72rem' }}>
                  OUR STORY
                </Typography>
                <Typography variant="h3" sx={{ color: '#125A41', fontWeight: 800, mt: 1, mb: 2.5, fontSize: { xs: '1.6rem', md: '2rem' } }}>
                  Founded on a Promise to Students
                </Typography>
                <Typography sx={{ color: '#4A5D54', lineHeight: 1.8, mb: 2, fontSize: '0.97rem' }}>
                  EduGlobe Lanka began with a simple but powerful vision — to bridge the gap between Sri Lankan talent and global academic opportunities. Starting as a small, passionate team in Jaffna, we have grown to become one of the most trusted overseas education consultancies in Sri Lanka.
                </Typography>
                <Typography sx={{ color: '#4A5D54', lineHeight: 1.8, mb: 4, fontSize: '0.97rem' }}>
                  We understand that studying abroad is one of the most important decisions of your life. Our approach is rooted in empathy, honesty, and an unwavering commitment to your success.
                </Typography>

                {/* Checklist */}
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.5 }}>
                  {checkPoints.map((point) => (
                    <Box key={point} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <CheckCircle size={16} color="#125A41" style={{ flexShrink: 0, marginTop: 3 }} />
                      <Typography sx={{ color: '#4A5D54', fontSize: '0.88rem', lineHeight: 1.6 }}>{point}</Typography>
                    </Box>
                  ))}
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/register')}
                  sx={{ mt: 4, bgcolor: '#125A41', borderRadius: 30, px: 4, py: 1.4, fontWeight: 700, '&:hover': { bgcolor: '#0d4530' } }}
                >
                  Book a Free Consultation
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Core Values ──────────────────────────────────── */}
      <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: '#f5f7f6' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: '#F4A522', fontWeight: 700, letterSpacing: 3, fontSize: '0.72rem' }}>
              WHAT DRIVES US
            </Typography>
            <Typography variant="h3" sx={{ color: '#125A41', fontWeight: 800, mt: 1, fontSize: { xs: '1.6rem', md: '2rem' } }}>
              Our Core Values
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 3 }}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={i} custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <Box sx={{
                    bgcolor: 'white',
                    borderRadius: 4,
                    p: 3.5,
                    height: '100%',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s ease',
                    '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 16px 40px rgba(0,0,0,0.1)', borderColor: `${v.color}30` }
                  }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: 2.5, bgcolor: `${v.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: v.color, mb: 2.5 }}>
                      <Icon size={24} />
                    </Box>
                    <Typography sx={{ fontWeight: 800, color: '#125A41', mb: 1, fontSize: '1rem' }}>{v.title}</Typography>
                    <Typography sx={{ color: '#7a8c82', fontSize: '0.85rem', lineHeight: 1.65 }}>{v.desc}</Typography>
                  </Box>
                </motion.div>
              );
            })}
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutUs;
