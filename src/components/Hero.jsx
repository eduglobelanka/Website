import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import {
  Users, BookOpen, GraduationCap, FileText,
  ArrowRight, CheckCircle, Star, TrendingUp, MapPin,
} from 'lucide-react';

// ── Accent colour ────────────────────────────────────────────
const GREEN  = '#125A41';
const ORANGE = '#F4A522';   // restored original orange
const DARK   = '#06120C';

// ── Destinations — NO flag emojis (breaks on Windows) ───────
const DESTINATIONS = ['United Kingdom', 'Canada', 'Australia', 'USA', 'New Zealand'];
const DEST_FLAGS   = ['🇬🇧', '🇨🇦', '🇦🇺', '🇺🇸', '🇳🇿']; // only for badge icons on right

// ── Stats ────────────────────────────────────────────────────
const STATS = [
  { end: 200, suffix: '+', label: 'Students Placed',      icon: <Users size={17}/> },
  { end: 98,  suffix: '%', label: 'Visa Success Rate',    icon: <TrendingUp size={17}/> },
  { end: 200, suffix: '+', label: 'Partner Universities', icon: <BookOpen size={17}/> },
  { end: 5,   suffix: '+', label: 'Years Experience',     icon: <Star size={17}/> },
];

// ── Feature cards ────────────────────────────────────────────
const FEATURES = [
  { icon: <Users size={24}/>,         title: 'Expert Counselling',     desc: 'Certified overseas education experts guide you at every step.',  accent: GREEN },
  { icon: <BookOpen size={24}/>,      title: 'University Admissions',  desc: 'Secure your place at top-ranked universities worldwide.',        accent: ORANGE },
  { icon: <GraduationCap size={24}/>, title: 'Scholarship Assistance', desc: 'Maximum financial aid guidance for your dream program.',          accent: GREEN },
  { icon: <FileText size={24}/>,      title: 'Visa Processing',        desc: 'Hassle-free student visa application & coaching support.',        accent: ORANGE },
];

// ── Particles ────────────────────────────────────────────────
const PARTICLES = [
  { w:7,  h:7,  top:'14%', left:'7%',  dur:7,  delay:0,   col: `rgba(244,165,34,0.55)`  },
  { w:5,  h:5,  top:'28%', left:'20%', dur:9,  delay:1.2, col: `rgba(18,90,65,0.6)`     },
  { w:9,  h:9,  top:'62%', left:'4%',  dur:8,  delay:0.5, col: `rgba(244,165,34,0.4)`   },
  { w:6,  h:6,  top:'78%', left:'25%', dur:10, delay:2,   col: `rgba(255,255,255,0.22)` },
  { w:4,  h:4,  top:'42%', left:'32%', dur:6,  delay:0.8, col: `rgba(244,165,34,0.35)`  },
  { w:8,  h:8,  top:'20%', left:'85%', dur:7,  delay:0.3, col: `rgba(18,90,65,0.5)`     },
  { w:5,  h:5,  top:'52%', left:'90%', dur:9,  delay:1.8, col: `rgba(244,165,34,0.45)`  },
  { w:6,  h:6,  top:'72%', left:'78%', dur:7,  delay:0.9, col: `rgba(255,255,255,0.18)` },
];

// ── Animated counter ─────────────────────────────────────────
function AnimatedCounter({ end, suffix, started }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let t = null;
    const dur = 1800;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      setVal(Math.floor(p * end));
      if (p < 1) t = requestAnimationFrame(step);
    };
    t = requestAnimationFrame(step);
    return () => cancelAnimationFrame(t);
  }, [started, end]);
  return <>{val.toLocaleString()}{suffix}</>;
}

// ── Typewriter ───────────────────────────────────────────────
function Typewriter() {
  const [idx, setIdx]       = useState(0);
  const [txt, setTxt]       = useState('');
  const [deleting, setDel]  = useState(false);

  useEffect(() => {
    const full = DESTINATIONS[idx];
    let timer;
    if (!deleting && txt.length < full.length) {
      timer = setTimeout(() => setTxt(full.slice(0, txt.length + 1)), 80);
    } else if (!deleting && txt.length === full.length) {
      timer = setTimeout(() => setDel(true), 2000);
    } else if (deleting && txt.length > 0) {
      timer = setTimeout(() => setTxt(txt.slice(0, -1)), 45);
    } else {
      setDel(false);
      setIdx(i => (i + 1) % DESTINATIONS.length);
    }
    return () => clearTimeout(timer);
  }, [txt, deleting, idx]);

  return (
    <Box component="span" sx={{ color: ORANGE, display: 'inline-block', minWidth: { xs: 160, md: 280 } }}>
      {txt}
      <Box component="span" sx={{
        display: 'inline-block', width: 3, height: '0.82em',
        bgcolor: ORANGE, ml: '3px', verticalAlign: 'middle',
        borderRadius: 1, animation: 'blink-caret 0.85s step-end infinite',
      }}/>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: d, ease: [0.25,0.46,0.45,0.94] } }),
};
const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: (d = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.6, delay: d, ease: 'easeOut' } }),
};

// ─────────────────────────────────────────────────────────────
const Hero = () => {
  const statsRef  = useRef(null);
  const statsView = useInView(statsRef, { once: true, amount: 0.4 });

  return (
    <Box id="home">
      {/* Visually hidden h1 for SEO */}
      <Typography component="h1" sx={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
        EduGlobeLanka Consultancy - Sri Lanka's #1 Student Visa Experts
      </Typography>

      {/* ════════════════ HERO ════════════════ */}
      <Box sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: 'url(/assets/images/hero_bg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 25%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>

        {/* Overlay */}
        <Box sx={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(115deg, rgba(4,14,8,0.95) 0%, rgba(8,30,18,0.86) 42%, rgba(6,18,12,0.45) 100%)',
        }}/>

        {/* Morphing green blob */}
        <Box sx={{
          position: 'absolute', top: '-15%', left: '-12%',
          width: 600, height: 600, pointerEvents: 'none',
          background: 'radial-gradient(circle, rgba(18,90,65,0.28) 0%, transparent 70%)',
          animation: 'blob-morph 12s ease-in-out infinite',
        }}/>

        {/* Morphing blue blob */}
        <Box sx={{
          position: 'absolute', bottom: '-12%', right: '4%',
          width: 480, height: 480, pointerEvents: 'none',
          background: 'radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 70%)',
          animation: 'blob-morph 16s ease-in-out infinite reverse',
        }}/>

        {/* Particles */}
        {PARTICLES.map((p, i) => (
          <Box key={i} sx={{
            position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
            width: p.w, height: p.h, top: p.top, left: p.left,
            background: p.col,
            boxShadow: `0 0 12px ${p.col}`,
            animation: `particle-drift ${p.dur}s ease-in-out ${p.delay}s infinite`,
          }}/>
        ))}

        {/* ── Right destination badges ── */}
        <Box sx={{
          position: 'absolute', right: { xs: 14, xl: '4.5%' },
          top: '50%', transform: 'translateY(-50%)',
          display: { xs: 'none', lg: 'flex' },
          flexDirection: 'column', gap: 1.8, zIndex: 3,
        }}>
          {DESTINATIONS.map((name, i) => (
            <motion.div
              key={name}
              custom={i * 0.11 + 0.55}
              initial="hidden" animate="visible"
              variants={fadeRight}
              whileHover={{ x: -5, scale: 1.04, transition: { type: 'spring', stiffness: 320 } }}
            >
              <Box sx={{
                display: 'flex', alignItems: 'center', gap: 1,
                bgcolor: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(18px)',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: 30, px: 2.2, py: 1,
                color: 'white', fontSize: '0.82rem', fontWeight: 600,
                whiteSpace: 'nowrap', cursor: 'default',
                transition: 'all 0.3s',
                '&:hover': { bgcolor: 'rgba(244,165,34,0.15)', borderColor: 'rgba(244,165,34,0.45)' },
              }}>
                <MapPin size={13} color={ORANGE}/>
                {name}
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* ── Achievement badge ── */}
        <Box sx={{ position: 'absolute', top: '13%', right: '5%', zIndex: 4, display: { xs: 'none', xl: 'block' } }}>
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.6, ease: 'backOut' }}
          >
            <Box sx={{
              display: 'flex', alignItems: 'center', gap: 1.5,
              bgcolor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.16)',
              borderRadius: 3, px: 2.5, py: 1.8,
            }}>
              <Box sx={{
                position: 'relative', width: 42, height: 42, borderRadius: '50%',
                bgcolor: 'rgba(244,165,34,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: ORANGE,
                '&::before': {
                  content: '""', position: 'absolute', inset: -6, borderRadius: '50%',
                  border: '2px solid rgba(244,165,34,0.3)',
                  animation: 'pulse-ring 2s ease-out infinite',
                },
              }}>
                <Star size={20} fill={ORANGE} color={ORANGE}/>
              </Box>
              <Box>
                <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.88rem', lineHeight: 1.2 }}>#1 Rated Agency</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.58)', fontSize: '0.70rem' }}>Sri Lanka Student Visa</Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>

        {/* ── Main content ── */}
        <Container maxWidth="xl" sx={{
          position: 'relative', zIndex: 2, flex: 1,
          display: 'flex', alignItems: 'center',
          pt: { xs: 14, md: 6 }, pb: { xs: 4, md: 6 },
          pl: { md: '10%' }, // <--- Added padding to shift text right
        }}>
          <Box sx={{ maxWidth: { xs: '100%', md: 700, lg: 760 }, color: 'white' }}>

            {/* Badge pill */}
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
              <Box sx={{
                display: 'inline-flex', alignItems: 'center', gap: 1,
                bgcolor: 'rgba(244,165,34,0.12)', border: '1px solid rgba(244,165,34,0.35)',
                borderRadius: 30, px: 2.5, py: 0.8, mb: 3.5,
              }}>
                <GraduationCap size={13} color={ORANGE}/>
                <Typography sx={{ color: ORANGE, fontWeight: 700, letterSpacing: 1.8, textTransform: 'uppercase', fontSize: '0.68rem' }}>
                  Your Gateway to Global Education
                </Typography>
              </Box>
            </motion.div>

            {/* "Study in" line */}
            <motion.div custom={0.15} initial="hidden" animate="visible" variants={fadeUp}>
              <Typography variant="h1" component="h2" sx={{
                fontSize: { xs: '2.8rem', sm: '3.6rem', md: '4.8rem', lg: '5.4rem' },
                lineHeight: 1.06, fontWeight: 900, letterSpacing: '-2px', mb: 0,
              }}>
                Study in
              </Typography>
            </motion.div>

            {/* Typewriter line */}
            <motion.div custom={0.22} initial="hidden" animate="visible" variants={fadeUp}>
              <Typography variant="h1" component="h2" sx={{
                fontSize: { xs: '2.8rem', sm: '3.6rem', md: '4.8rem', lg: '5.4rem' },
                lineHeight: 1.06, fontWeight: 900, letterSpacing: '-2px',
                mb: 3, minHeight: { xs: '3.8rem', md: '5.8rem', lg: '6.6rem' },
              }}>
                <Typewriter/>
              </Typography>
            </motion.div>

            {/* Subtext */}
            <motion.div custom={0.32} initial="hidden" animate="visible" variants={fadeUp}>
              <Typography sx={{
                color: 'rgba(255,255,255,0.80)', lineHeight: 1.85,
                fontSize: { xs: '0.97rem', md: '1.08rem' }, maxWidth: 500, mb: 2.5,
              }}>
                Sri Lanka's most trusted student visa consultancy — turning your
                international education dreams into reality.
              </Typography>
            </motion.div>

            {/* Trust ticks */}
            <motion.div custom={0.4} initial="hidden" animate="visible" variants={fadeUp}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5, mb: 4.5 }}>
                {['Free Consultation', 'Certified Counselors', '98% Visa Success'].map(t => (
                  <Box key={t} sx={{ display: 'flex', alignItems: 'center', gap: 0.7 }}>
                    <CheckCircle size={14} color={ORANGE}/>
                    <Typography sx={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.82rem', fontWeight: 500 }}>{t}</Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>

            {/* CTA buttons */}
            <motion.div custom={0.5} initial="hidden" animate="visible" variants={fadeUp}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    variant="contained" size="large"
                    sx={{
                      bgcolor: ORANGE, color: '#06120C',
                      px: 4, py: 1.8, borderRadius: 30,
                      fontWeight: 800, fontSize: '1rem',
                      boxShadow: '0 8px 25px rgba(244,165,34,0.4)',
                      '&:hover': { bgcolor: '#ffb732', boxShadow: '0 12px 30px rgba(244,165,34,0.6)' },
                    }}
                  >
                    Start Your Application
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    variant="outlined" size="large"
                    sx={{
                      color: 'white', borderColor: 'rgba(255,255,255,0.3)',
                      px: 4, py: 1.8, borderRadius: 30,
                      fontWeight: 700, fontSize: '0.95rem',
                      backdropFilter: 'blur(10px)',
                      '&:hover': { borderColor: ORANGE, bgcolor: 'rgba(244,165,34,0.08)', color: ORANGE },
                    }}
                  >
                    Explore Destinations
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Box>
        </Container>

        {/* ── Stats bar ── */}
        <Box ref={statsRef} sx={{
          position: 'relative', zIndex: 2,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          bgcolor: 'rgba(4,12,8,0.92)', // solid semi-transparent, no blur
        }}>
          <Container maxWidth="xl">
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2,1fr)', sm: 'repeat(4,1fr)' },
              py: { xs: 3.5, md: 4.5 },
            }}>
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={i * 0.1}
                  initial="hidden" animate={statsView ? 'visible' : 'hidden'}
                  variants={fadeUp}
                >
                  <Box sx={{
                    textAlign: 'center', px: 2, position: 'relative',
                    '&:not(:last-child)::after': {
                      content: '""', position: 'absolute', right: 0, top: '15%',
                      height: '70%', width: '1px', bgcolor: 'rgba(255,255,255,0.09)',
                      display: { xs: 'none', sm: 'block' },
                    },
                  }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 0.8, color: 'rgba(244,165,34,0.65)' }}>
                      {s.icon}
                    </Box>
                    <Typography sx={{
                      fontFamily: '"Outfit",sans-serif', fontWeight: 900,
                      fontSize: { xs: '1.9rem', md: '2.3rem' }, lineHeight: 1, color: ORANGE,
                    }}>
                      <AnimatedCounter end={s.end} suffix={s.suffix} started={statsView}/>
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.58)', fontSize: '0.75rem', fontWeight: 500, mt: 0.5 }}>
                      {s.label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>

      {/* ════════════════ FEATURE CARDS ════════════════ */}
      <Box sx={{ bgcolor: '#f2f6f4', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4,1fr)' },
            gap: { xs: 2, md: 3 },
          }}>
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -8, transition: { duration: 0.22 } }}
              >
                <Box sx={{
                  bgcolor: 'white', borderRadius: 3.5, p: { xs: 2.5, md: 3.5 },
                  height: '100%', position: 'relative', overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(18,90,65,0.07)',
                  border: '1px solid rgba(18,90,65,0.06)',
                  transition: 'box-shadow 0.3s',
                  '&:hover': { boxShadow: '0 20px 50px rgba(18,90,65,0.14)' },
                  '&::before': {
                    content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                    background: i % 2 === 0
                      ? `linear-gradient(90deg,${GREEN},#1a8e64)`
                      : `linear-gradient(90deg,${ORANGE},#ffc155)`,
                  },
                }}>
                  {/* bg circle */}
                  <Box sx={{
                    position: 'absolute', bottom: -20, right: -20, width: 90, height: 90,
                    borderRadius: '50%', pointerEvents: 'none',
                    bgcolor: i % 2 === 0 ? 'rgba(18,90,65,0.04)' : 'rgba(244,165,34,0.05)',
                  }}/>
                  {/* icon */}
                  <Box sx={{
                    width: 54, height: 54, borderRadius: 2.5, mb: 2.5,
                    bgcolor: i % 2 === 0 ? 'rgba(18,90,65,0.09)' : 'rgba(244,165,34,0.10)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: f.accent,
                  }}>
                    {f.icon}
                  </Box>
                  <Typography sx={{ fontFamily: '"Outfit",sans-serif', fontWeight: 700, fontSize: '0.96rem', color: GREEN, mb: 1 }}>
                    {f.title}
                  </Typography>
                  <Typography sx={{ color: '#4A5D54', fontSize: '0.82rem', lineHeight: 1.75 }}>
                    {f.desc}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
