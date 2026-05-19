import React, { useState } from 'react';
import { Box, Container, Typography, Button, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Quote, GraduationCap, MapPin, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: d, ease: [0.25, 0.46, 0.45, 0.94] } }),
};

const stories = [
  {
    name: 'Nimesha Perera',
    university: 'University of Toronto',
    country: 'Canada',
    flag: '🇨🇦',
    program: 'MSc Computer Science',
    avatar: 'NP',
    avatarBg: 'linear-gradient(135deg, #125A41, #1d8a64)',
    tag: 'Scholarship Winner',
    tagColor: '#125A41',
    quote: 'EduGlobe Lanka made my dream of studying in Canada a reality. The visa process was incredibly smooth and the team was supportive at every single step. I cannot imagine doing this without them.',
    outcome: 'Awarded $8,000 entrance scholarship',
    year: '2025',
  },
  {
    name: 'Kasun Jayawardena',
    university: 'University of Melbourne',
    country: 'Australia',
    flag: '🇦🇺',
    program: 'MBA — Business Administration',
    avatar: 'KJ',
    avatarBg: 'linear-gradient(135deg, #1565c0, #1e88e5)',
    tag: 'PR Pathway',
    tagColor: '#1565c0',
    quote: "I was overwhelmed about which university to choose. EduGlobe Lanka's counsellors helped me find the perfect program that aligned with my career goals. Genuinely couldn't have done it without them!",
    outcome: 'Now on a Graduate Work Visa pathway',
    year: '2025',
  },
  {
    name: 'Shalini Fernando',
    university: 'University of Manchester',
    country: 'United Kingdom',
    flag: '🇬🇧',
    program: 'BSc Biomedical Science',
    avatar: 'SF',
    avatarBg: 'linear-gradient(135deg, #c48013, #f0a726)',
    tag: 'Partial Scholarship',
    tagColor: '#b07010',
    quote: "The scholarship guidance I received was invaluable. I secured a partial scholarship I didn't even know I was eligible for. EduGlobe Lanka is absolutely the best consultancy in Sri Lanka!",
    outcome: 'Saved £4,500 through scholarship assistance',
    year: '2024',
  },
  {
    name: 'Arunthavarajah Priya',
    university: 'University of Hertfordshire',
    country: 'United Kingdom',
    flag: '🇬🇧',
    program: 'BEng Electrical Engineering',
    avatar: 'AP',
    avatarBg: 'linear-gradient(135deg, #7b1fa2, #ab47bc)',
    tag: 'Visa Approved',
    tagColor: '#7b1fa2',
    quote: 'As a student from Jaffna, I was unsure how to navigate the UK visa process. EduGlobe Lanka guided me every step of the way — from application to landing in the UK. Truly the best!',
    outcome: 'UK Student Visa approved within 3 weeks',
    year: '2025',
  },
  {
    name: 'Tharmalingam Suriya',
    university: 'Coventry University',
    country: 'United Kingdom',
    flag: '🇬🇧',
    program: 'MSc Data Analytics',
    avatar: 'TS',
    avatarBg: 'linear-gradient(135deg, #0d6e4a, #125A41)',
    tag: 'Fast Track Visa',
    tagColor: '#125A41',
    quote: 'EduGlobe Lanka team is extremely professional and knowledgeable. They made my dream of studying in the UK a reality. I highly recommend them to every student from Jaffna and beyond!',
    outcome: 'Admitted in top 100 UK university',
    year: '2024',
  },
  {
    name: 'Kanagasabai Nithya',
    university: 'University of Canberra',
    country: 'Australia',
    flag: '🇦🇺',
    program: 'Bachelor of Nursing',
    avatar: 'KN',
    avatarBg: 'linear-gradient(135deg, #c62828, #ef5350)',
    tag: 'Top University',
    tagColor: '#c62828',
    quote: 'The counsellors at EduGlobe Lanka understood my situation perfectly and found the right university and course for me. The entire process was seamless. Thank you so much!',
    outcome: 'Enrolled in Australia\'s top Nursing program',
    year: '2025',
  },
  {
    name: 'Dilshan Rajapaksa',
    university: 'Cardiff Metropolitan University',
    country: 'United Kingdom',
    flag: '🇬🇧',
    program: 'MSc Sports Management',
    avatar: 'DR',
    avatarBg: 'linear-gradient(135deg, #00695c, #26a69a)',
    tag: 'Career Change',
    tagColor: '#00695c',
    quote: 'I wanted to switch careers completely and EduGlobe Lanka helped me find a university that matched my background. The SOP they helped me write was absolutely perfect. Got an offer in 3 weeks!',
    outcome: 'Career pivot into Sports Management achieved',
    year: '2024',
  },
  {
    name: 'Saranya Krishnamohan',
    university: 'Victoria University',
    country: 'Australia',
    flag: '🇦🇺',
    program: 'Master of Education',
    avatar: 'SK',
    avatarBg: 'linear-gradient(135deg, #4527a0, #7c4dff)',
    tag: 'Teacher Pathway',
    tagColor: '#4527a0',
    quote: 'From Jaffna to Melbourne — I could not have done this without EduGlobe Lanka. Their team knew exactly which program would get me teaching registration in Australia. Forever grateful!',
    outcome: 'Cleared Australian Teacher Registration pathway',
    year: '2025',
  },
  {
    name: 'Balachandran Kavi',
    university: 'Constructor University',
    country: 'Germany',
    flag: '🇩🇪',
    program: 'BSc Computer Engineering',
    avatar: 'BK',
    avatarBg: 'linear-gradient(135deg, #37474f, #607d8b)',
    tag: 'Europe Pathway',
    tagColor: '#37474f',
    quote: 'Germany was not on my radar initially, but EduGlobe Lanka opened my eyes to the opportunity. Tuition is almost free! Their guidance was thorough and professional throughout the process.',
    outcome: 'Secured near-full tuition waiver in Germany',
    year: '2024',
  },
];

const stats = [
  { num: '200+', label: 'Students Placed', icon: GraduationCap },
  { num: '98%', label: 'Visa Success Rate', icon: CheckCircle },
  { num: '10+', label: 'Countries', icon: MapPin },
  { num: '5★', label: 'Avg Rating', icon: Star },
];

const SuccessStories = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#f5f7f6' }}>
      <Header />

      {/* ── Hero ─────────────────────────────────────── */}
      <Box sx={{
        position: 'relative',
        background: 'linear-gradient(145deg, #071810 0%, #0d3322 60%, #071810 100%)',
        py: { xs: 7, md: 10 },
        overflow: 'hidden',
      }}>
        {/* Decorative blobs */}
        <Box sx={{ position: 'absolute', top: -100, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,165,34,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <Box sx={{ position: 'absolute', bottom: -80, left: -80, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(18,90,65,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Button startIcon={<ArrowLeft size={15} />} onClick={() => navigate('/')}
            sx={{ mb: 3, color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', '&:hover': { color: '#F4A522' }, px: 0 }}>
            Back to Home
          </Button>

          {/* 2-column hero layout */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 8 }, alignItems: 'center' }}>

            {/* Left: Text + stats */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(244,165,34,0.12)', border: '1px solid rgba(244,165,34,0.25)', borderRadius: 10, px: 2, py: 0.6, mb: 2.5 }}>
                <TrendingUp size={14} color="#F4A522" />
                <Typography sx={{ color: '#F4A522', fontWeight: 700, fontSize: '0.72rem', letterSpacing: 1 }}>STUDENT SUCCESS STORIES</Typography>
              </Box>
              <Typography variant="h1" sx={{ color: 'white', mb: 2, fontSize: { xs: '2rem', md: '3.2rem' }, fontWeight: 900, lineHeight: 1.18 }}>
                Real Students.<br />Real Dreams.<br />
                <Box component="span" sx={{ color: '#F4A522' }}>Real Results.</Box>
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: 480, lineHeight: 1.8, fontSize: '0.97rem', mb: 5 }}>
                Hundreds of students from Sri Lanka have trusted EduGlobe Lanka to guide them to top universities around the world.
              </Typography>

              {/* Stats strip */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {stats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Box key={i} sx={{
                      display: 'flex', alignItems: 'center', gap: 1.5,
                      bgcolor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 3, px: 2, py: 1.2,
                    }}>
                      <Icon size={16} color="#F4A522" />
                      <Box>
                        <Typography sx={{ color: 'white', fontWeight: 900, fontSize: '1rem', lineHeight: 1, fontFamily: '"Outfit",sans-serif' }}>{s.num}</Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.64rem', fontWeight: 600, letterSpacing: 0.3 }}>{s.label}</Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </motion.div>

            {/* Right: Floating testimonial card stack */}
            <motion.div custom={0.2} initial="hidden" animate="visible" variants={fadeUp}>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', gap: 2 }}>
                {stories.slice(0, 3).map((story, i) => (
                  <Box key={i} sx={{
                    bgcolor: 'rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderLeft: `4px solid ${story.tagColor}`,
                    borderRadius: 3,
                    p: 2.5,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    transform: i === 1 ? 'translateX(20px)' : 'none',
                    opacity: i === 2 ? 0.75 : 1,
                    transition: 'all 0.3s ease',
                  }}>
                    <Avatar sx={{ background: story.avatarBg, width: 42, height: 42, fontWeight: 800, fontSize: '0.78rem', flexShrink: 0 }}>
                      {story.avatar}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.82rem', fontStyle: 'italic', lineHeight: 1.6, mb: 1 }}>
                        "{story.quote.slice(0, 90)}..."
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box>
                          <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.8rem' }}>{story.name}</Typography>
                          <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.68rem' }}>{story.university} · {story.flag}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 0.2 }}>
                          {[...Array(5)].map((_, si) => <Star key={si} size={10} fill="#F4A522" color="#F4A522" />)}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
                <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', textAlign: 'center', mt: 0.5 }}>
                  + {stories.length - 3} more stories below ↓
                </Typography>
              </Box>
            </motion.div>

          </Box>{/* end 2-col grid */}
        </Container>
      </Box>{/* end hero */}

      {/* ── Stories Grid ──────────────────────────────── */}
      <Box sx={{ flex: 1, py: { xs: 6, md: 9 } }}>
        <Container maxWidth="xl">
          {/* 3-column masonry-style grid */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: 3,
          }}>
            {stories.map((story, i) => (
              <motion.div
                key={i}
                custom={i * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Box
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  sx={{
                    bgcolor: 'white',
                    borderRadius: 4,
                    overflow: 'hidden',
                    border: '1px solid',
                    borderColor: hovered === i ? `${story.tagColor}35` : 'rgba(0,0,0,0.07)',
                    boxShadow: hovered === i ? `0 20px 50px ${story.tagColor}15` : '0 2px 16px rgba(0,0,0,0.05)',
                    transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    transform: hovered === i ? 'translateY(-7px)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  {/* Colored top strip */}
                  <Box sx={{ height: 5, background: story.avatarBg }} />

                  <Box sx={{ p: 3.5, display: 'flex', flexDirection: 'column', flex: 1 }}>

                    {/* Top row: tag + year */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
                      <Chip label={story.tag} size="small" sx={{
                        bgcolor: `${story.tagColor}12`,
                        color: story.tagColor,
                        fontWeight: 700, fontSize: '0.68rem',
                        border: `1px solid ${story.tagColor}25`,
                        height: 24,
                      }} />
                      <Typography sx={{ fontSize: '0.72rem', color: '#aab8b2', fontWeight: 600 }}>
                        {story.flag} {story.year}
                      </Typography>
                    </Box>

                    {/* Quote block */}
                    <Box sx={{ position: 'relative', mb: 'auto', pb: 2.5 }}>
                      <Box sx={{ position: 'absolute', top: -8, left: -6, opacity: 0.12 }}>
                        <Quote size={36} color={story.tagColor} />
                      </Box>
                      <Typography sx={{
                        color: '#374a41',
                        fontSize: '0.88rem',
                        lineHeight: 1.75,
                        fontStyle: 'italic',
                        pl: 0.5,
                      }}>
                        "{story.quote}"
                      </Typography>
                    </Box>

                    {/* Outcome badge */}
                    <Box sx={{
                      display: 'flex', alignItems: 'center', gap: 1,
                      bgcolor: '#f5f7f6',
                      borderRadius: 2, px: 1.5, py: 1, mb: 2.5,
                    }}>
                      <CheckCircle size={13} color="#125A41" style={{ flexShrink: 0 }} />
                      <Typography sx={{ color: '#125A41', fontSize: '0.75rem', fontWeight: 600 }}>
                        {story.outcome}
                      </Typography>
                    </Box>

                    {/* Stars */}
                    <Box sx={{ display: 'flex', gap: 0.3, mb: 2.5 }}>
                      {[...Array(5)].map((_, si) => <Star key={si} size={12} fill="#F4A522" color="#F4A522" />)}
                    </Box>

                    {/* Divider */}
                    <Box sx={{ height: 1, bgcolor: 'rgba(0,0,0,0.06)', mb: 2.5 }} />

                    {/* Student info */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{
                        background: story.avatarBg,
                        width: 44, height: 44,
                        fontWeight: 800, fontSize: '0.8rem',
                        flexShrink: 0,
                        boxShadow: `0 4px 14px ${story.tagColor}30`,
                      }}>
                        {story.avatar}
                      </Avatar>
                      <Box>
                        <Typography sx={{ fontWeight: 800, color: '#125A41', fontSize: '0.92rem', lineHeight: 1.2 }}>
                          {story.name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.3 }}>
                          <GraduationCap size={11} color="#F4A522" />
                          <Typography sx={{ color: '#7a8c82', fontSize: '0.72rem', fontWeight: 500 }}>
                            {story.program}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.2 }}>
                          <MapPin size={10} color="#b0bdb8" />
                          <Typography sx={{ color: '#b0bdb8', fontSize: '0.7rem' }}>
                            {story.university} · {story.country}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* ── CTA Banner ────────────────────────────── */}
          <motion.div custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Box sx={{
              mt: 8,
              borderRadius: 5,
              overflow: 'hidden',
              position: 'relative',
              background: 'linear-gradient(135deg, #06120C 0%, #125A41 50%, #0d3d2a 100%)',
              p: { xs: 5, md: 8 },
              textAlign: 'center',
            }}>
              {/* Decorative rings */}
              <Box sx={{ position: 'absolute', top: -60, right: -60, width: 220, height: 220, borderRadius: '50%', border: '40px solid rgba(244,165,34,0.08)', pointerEvents: 'none' }} />
              <Box sx={{ position: 'absolute', bottom: -40, left: -40, width: 160, height: 160, borderRadius: '50%', border: '30px solid rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(244,165,34,0.15)', border: '1px solid rgba(244,165,34,0.3)', borderRadius: 10, px: 2, py: 0.6, mb: 2.5 }}>
                  <Star size={13} fill="#F4A522" color="#F4A522" />
                  <Typography sx={{ color: '#F4A522', fontWeight: 700, fontSize: '0.7rem', letterSpacing: 1 }}>YOUR TURN</Typography>
                </Box>

                <Typography variant="h3" sx={{ color: 'white', fontWeight: 900, mb: 1.5, fontSize: { xs: '1.6rem', md: '2.4rem' } }}>
                  Ready to Write Your Own<br />Success Story?
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 4, maxWidth: 480, mx: 'auto', lineHeight: 1.75, fontSize: '0.95rem' }}>
                  Join 200+ students who trusted EduGlobe Lanka to guide them to their dream university. Start with a free, no-obligation consultation.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRight size={18} />}
                    onClick={() => navigate('/register')}
                    sx={{
                      bgcolor: '#F4A522', color: '#06120C',
                      borderRadius: 30, px: 4, py: 1.4,
                      fontWeight: 800, fontSize: '0.95rem',
                      '&:hover': { bgcolor: '#e09520' },
                      transition: 'all 0.25s',
                    }}
                  >
                    Start My Journey
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/#contact')}
                    sx={{
                      color: 'white', borderColor: 'rgba(255,255,255,0.3)',
                      borderRadius: 30, px: 4, py: 1.4,
                      fontWeight: 700, fontSize: '0.95rem',
                      '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.06)' },
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default SuccessStories;
