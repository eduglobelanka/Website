import React, { useEffect, useState, useRef } from 'react';
import { Box, Container, Typography, Button, Chip } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Zap, Gift, BadgeCheck, Clock, ArrowRight } from 'lucide-react';

const ORANGE = '#F4A522';
const DARK   = '#06120C';

// ── Countdown hook ────────────────────────────────────────────
function useCountdown(targetDate) {
  const calc = () => {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000)  / 60000),
      seconds: Math.floor((diff % 60000)    / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.25, 0.46, 0.45, 0.94] } }),
};

// ── Single countdown tile ─────────────────────────────────────
function CountBlock({ value, label }) {
  return (
    <Box sx={{ textAlign: 'center', flex: '1 1 0', minWidth: 0 }}>
      <Box sx={{
        bgcolor: 'rgba(244,165,34,0.12)',
        border: '1px solid rgba(244,165,34,0.28)',
        borderRadius: 2,
        px: { xs: 1, md: 1.5, lg: 2 },
        py: { xs: 0.8, md: 1.4, lg: 1.8 },
        mb: { xs: 0.5, md: 0.7 },
        minWidth: 0,
      }}>
        <Typography sx={{
          color: ORANGE, fontWeight: 900, lineHeight: 1,
          fontSize: { xs: '1.3rem', md: '2rem', lg: '2.4rem' },
          fontFamily: '"Outfit",sans-serif',
          whiteSpace: 'nowrap',
        }}>
          {String(value).padStart(2, '0')}
        </Typography>
      </Box>
      <Typography sx={{
        color: 'rgba(255,255,255,0.42)',
        fontSize: { xs: '0.55rem', md: '0.65rem', lg: '0.7rem' },
        fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
      }}>
        {label}
      </Typography>
    </Box>
  );
}

// ── Separator colon ───────────────────────────────────────────
function Sep() {
  return (
    <Typography sx={{
      color: 'rgba(244,165,34,0.55)',
      fontSize: { xs: '1.1rem', md: '1.7rem', lg: '2rem' },
      fontWeight: 900,
      alignSelf: 'flex-start',
      mt: { xs: 0.5, md: 1.0, lg: 1.2 },
      flexShrink: 0,
      px: { xs: 0.3, md: 0.5 },
      lineHeight: 1,
    }}>:</Typography>
  );
}

// ─────────────────────────────────────────────────────────────
const ScholarshipBanner = () => {
  const navigate  = useNavigate();
  const ref       = useRef(null);
  const inView    = useInView(ref, { once: true, amount: 0.15 });
  const countdown = useCountdown('2026-09-01T00:00:00');
  const perks = [
    { icon: <Gift size={14} />,         text: '£3,000 scholarship' },
    { icon: <BadgeCheck size={14} />,   text: 'University of East London' },
    { icon: <GraduationCap size={14} />, text: 'September 2026 intake' },
  ];

  const whatYouGet = [
    '£3,000 off first-year tuition',
    'Priority application processing',
    'Dedicated visa counselor',
    'University of East London only',
  ];

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #071810 0%, #0a2218 40%, #0d2e1c 70%, #071810 100%)',
        borderTop:    '1px solid rgba(244,165,34,0.15)',
        borderBottom: '1px solid rgba(244,165,34,0.15)',
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      {/* ── Decorative blobs ── */}
      <Box sx={{ position: 'absolute', top: -140, right: -140, width: { xs: 300, md: 550 }, height: { xs: 300, md: 550 }, borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(244,165,34,0.12) 0%, transparent 65%)' }} />
      <Box sx={{ position: 'absolute', bottom: -100, left: -100, width: { xs: 260, md: 450 }, height: { xs: 260, md: 450 }, borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(18,90,65,0.22) 0%, transparent 65%)' }} />

      {/* ── Shimmer scan line ── */}
      <motion.div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <motion.div
          style={{ position: 'absolute', left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, rgba(244,165,34,0.38), transparent)' }}
          animate={{ top: ['-2%', '102%'] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'linear', repeatDelay: 2.5 }}
        />
      </motion.div>

      {/* ── Dot grid ── */}
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.022, backgroundImage: 'radial-gradient(rgba(244,165,34,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr minmax(0, 440px)', xl: '1fr minmax(0, 480px)' },
          gap: { xs: 5, sm: 6, lg: 6 },
          alignItems: 'center',
          overflow: 'hidden',
        }}>

          {/* ══════════ LEFT — headline + CTA ══════════ */}
          <Box>

            {/* Badge row */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1.2, mb: { xs: 2.5, md: 3 } }}>
                <motion.div
                  animate={{ scale: [1, 1.07, 1], boxShadow: ['0 0 0px rgba(244,165,34,0)', '0 0 18px rgba(244,165,34,0.5)', '0 0 0px rgba(244,165,34,0)'] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ borderRadius: 30 }}
                >
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.7, bgcolor: ORANGE, color: DARK, borderRadius: 30, px: 2, py: 0.6 }}>
                    <Zap size={11} fill={DARK} />
                    <Typography sx={{ fontWeight: 800, fontSize: '0.66rem', letterSpacing: 1.5, textTransform: 'uppercase' }}>Limited Offer</Typography>
                  </Box>
                </motion.div>
                <Chip
                  label="September 2026 Intake"
                  size="small"
                  icon={<Clock size={11} color={ORANGE} style={{ marginLeft: 8 }} />}
                  sx={{ bgcolor: 'rgba(244,165,34,0.1)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(244,165,34,0.25)', fontSize: '0.7rem', fontWeight: 600 }}
                />
              </Box>
            </motion.div>

            {/* Headline */}
            <motion.div custom={0.1} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <Typography sx={{ color: 'white', fontWeight: 900, lineHeight: 1.1, mb: 0.5, fontSize: { xs: '1.65rem', sm: '2.2rem', md: '2.8rem', lg: '3.4rem' }, fontFamily: '"Outfit",sans-serif', letterSpacing: { xs: '-0.5px', md: '-1px' } }}>
                Apply Now &amp; Receive a
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: { xs: 0.5, md: 1.5 }, mb: 2 }}>
                <motion.div
                  animate={{ textShadow: ['0 0 0px #F4A522', '0 0 36px rgba(244,165,34,0.75)', '0 0 0px #F4A522'] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Typography sx={{ color: ORANGE, fontWeight: 900, lineHeight: 1, fontSize: { xs: '2.8rem', sm: '3.4rem', md: '4.4rem', lg: '5.2rem' }, fontFamily: '"Outfit",sans-serif', textShadow: '0 0 36px rgba(244,165,34,0.3)', letterSpacing: { xs: '-1px', md: '-2px' } }}>
                    £3,000
                  </Typography>
                </motion.div>
                <Typography sx={{ color: 'white', fontWeight: 900, lineHeight: 1, fontSize: { xs: '1.65rem', sm: '2.2rem', md: '2.8rem', lg: '3.4rem' }, fontFamily: '"Outfit",sans-serif', letterSpacing: { xs: '-0.5px', md: '-1px' } }}>
                  Scholarship
                </Typography>
              </Box>
            </motion.div>

            {/* Description */}
            <motion.div custom={0.18} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.8, maxWidth: 560, mb: 3 }}>
                Apply through{' '}
                <Box component="span" sx={{ color: ORANGE, fontWeight: 700 }}>EduGlobe Lanka</Box> to the{' '}
                <Box component="span" sx={{ color: 'white', fontWeight: 700 }}>University of East London</Box> for the September 2026 intake and get{' '}
                <Box component="span" sx={{ color: ORANGE, fontWeight: 700 }}>£3,000 off</Box>{' '}
                your first-year tuition — exclusively through us.
              </Typography>
            </motion.div>

            {/* Perk pills */}
            <motion.div custom={0.24} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1.2, md: 2 }, mb: { xs: 3.5, md: 4.5 } }}>
                {perks.map(({ icon, text }) => (
                  <Box key={text} sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                    <Box sx={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, bgcolor: 'rgba(244,165,34,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: ORANGE, border: '1px solid rgba(244,165,34,0.22)' }}>
                      {icon}
                    </Box>
                    <Typography sx={{ color: 'rgba(255,255,255,0.78)', fontSize: { xs: '0.82rem', md: '0.87rem' }, fontWeight: 600 }}>{text}</Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>

            {/* CTA */}
            <motion.div custom={0.3} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                <motion.div whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300, damping: 16 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRight size={17} />}
                    onClick={() => navigate('/register')}
                    sx={{
                      background: `linear-gradient(135deg, ${ORANGE} 0%, #ffc155 100%)`,
                      color: DARK, px: { xs: 3.5, md: 4.5 }, py: { xs: 1.6, md: 1.8 },
                      borderRadius: 30, fontWeight: 800, fontSize: { xs: '0.92rem', md: '1rem' },
                      boxShadow: '0 10px 32px rgba(244,165,34,0.42)',
                      '&:hover': { boxShadow: '0 18px 48px rgba(244,165,34,0.62)' },
                      width: { xs: '100%', sm: 'auto' },
                    }}
                  >
                    Claim My Scholarship
                  </Button>
                </motion.div>
                <Typography sx={{ color: 'rgba(255,255,255,0.32)', fontSize: '0.78rem', display: { xs: 'none', sm: 'block' } }}>
                  Free · No commitment
                </Typography>
              </Box>
            </motion.div>
          </Box>

          {/* ══════════ RIGHT — countdown card ══════════ */}
          <motion.div custom={0.18} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <Box sx={{
              position: 'relative',
              bgcolor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(244,165,34,0.2)',
              borderRadius: 4,
              p: { xs: 3, sm: 3.5, md: 4 },
              overflow: 'hidden',
            }}>
              {/* Corner glow */}
              <Box sx={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(244,165,34,0.14) 0%, transparent 70%)' }} />

              {/* Label */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Clock size={13} color={ORANGE} />
                <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.66rem', fontWeight: 700, letterSpacing: 1.4, textTransform: 'uppercase' }}>
                  Intake Opens In
                </Typography>
              </Box>

              {/* ── Countdown ── */}
              <Box sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: { xs: 0.5, md: 0.8 },
                mb: 3,
                width: '100%',
                overflow: 'hidden',
                '& *': { boxSizing: 'border-box' },
              }}>
                <CountBlock value={countdown.days}    label="Days" />
                <Sep />
                <CountBlock value={countdown.hours}   label="Hours" />
                <Sep />
                <CountBlock value={countdown.minutes} label="Mins" />
                <Sep />
                <CountBlock value={countdown.seconds} label="Secs" />
              </Box>

              {/* Divider */}
              <Box sx={{ height: '1px', bgcolor: 'rgba(244,165,34,0.12)', mb: 2.5 }} />

              {/* What you get */}
              <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.63rem', fontWeight: 700, letterSpacing: 1.4, textTransform: 'uppercase', mb: 1.2 }}>
                What You Get
              </Typography>
              {whatYouGet.map((item) => (
                <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 0.9 }}>
                  <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ORANGE, flexShrink: 0 }} />
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: { xs: '0.82rem', md: '0.84rem' } }}>{item}</Typography>
                </Box>
              ))}

              {/* Mini CTA */}
              <Box sx={{ mt: 2.5, p: { xs: 1.5, md: 2 }, borderRadius: 2.5, bgcolor: 'rgba(244,165,34,0.07)', border: '1px dashed rgba(244,165,34,0.25)', textAlign: 'center' }}>
                <Typography sx={{ color: ORANGE, fontWeight: 700, fontSize: { xs: '0.78rem', md: '0.82rem' } }}>
                  🎓 Limited spots — apply early!
                </Typography>
              </Box>
            </Box>
          </motion.div>

        </Box>
      </Container>
    </Box>
  );
};

export default ScholarshipBanner;
