import React, { useState, useEffect } from 'react';

// ── SEO helper ────────────────────────────────────────────────
function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
  el.setAttribute('content', content);
}
function setOgMeta(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute('property', property); document.head.appendChild(el); }
  el.setAttribute('content', content);
}
function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) { el = document.createElement('link'); el.rel = 'canonical'; document.head.appendChild(el); }
  el.href = url;
}
import {
  Box, Container, Typography, TextField, Button,
  MenuItem, Collapse, Chip,
} from '@mui/material';
import { Send, CheckCircle, ArrowLeft, GraduationCap, Star, Zap, Gift, BadgeCheck, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// ── Constants ─────────────────────────────────────────────────
const ORANGE = '#F4A522';
const GREEN  = '#125A41';
const DARK   = '#06120C';

const destinations = ['United Kingdom', 'Canada', 'Australia', 'USA', 'New Zealand', 'Germany', 'France', 'Other'];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

// ── Input style ───────────────────────────────────────────────
const inputSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 2,
    bgcolor: 'rgba(255,255,255,0.04)',
    color: 'white',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.35)' },
    '&.Mui-focused fieldset': { borderColor: ORANGE, borderWidth: 1.5 },
  },
  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' },
  '& .MuiInputLabel-root.Mui-focused': { color: ORANGE },
  '& .MuiInputBase-input': { color: 'white' },
  '& .MuiSelect-icon': { color: 'rgba(255,255,255,0.5)' },
};

// ─────────────────────────────────────────────────────────────
const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const title = 'Register & Apply | EduGlobe Lanka – Free Consultation for Studying Abroad';
    const desc = 'Apply for a free consultation with EduGlobe Lanka. Get expert guidance for studying in the UK, Canada & Australia. Claim your £3,000 scholarship for September 2026 intake.';
    const canonical = 'https://www.eduglobelanka.lk/register';
    document.title = title;
    setMeta('description', desc);
    setOgMeta('og:title', title);
    setOgMeta('og:description', desc);
    setOgMeta('og:url', canonical);
    setCanonical(canonical);
    return () => {
      document.title = 'EduGlobe Lanka – Best Student Visa Consultancy in Sri Lanka & Jaffna';
      setMeta('description', 'EduGlobe Lanka is recognized as the best student visa consultancy in Sri Lanka and Jaffna. Get expert guidance for student visas to the UK, Canada, Australia, USA & New Zealand.');
      setCanonical('https://www.eduglobelanka.lk/');
    };
  }, []);
  const [form, setForm]       = useState({ name: '', email: '', phone: '', destination: '', intakeYear: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // Geo-IP (best-effort)
      let submitterIp = 'Unknown', submitterCountry = 'Unknown';
      try {
        const geo = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(5000) });
        const gj  = await geo.json();
        submitterIp      = gj.ip           || 'Unknown';
        submitterCountry = gj.country_name || gj.country || 'Unknown';
      } catch { /* silent */ }

      // Web3Forms
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '2bc10ea7-5fbb-45c9-a453-26dbad56aba9',
          subject: `New Application from ${form.name} — EduGlobe Lanka`,
          from_name: 'EduGlobe Lanka Website',
          Name: form.name,
          Email: form.email,
          Phone: form.phone || '—',
          'Preferred Destination': form.destination || '—',
          'Intake Year': form.intakeYear || '—',
          Message: form.message,
          Source: 'Register Page',
          'Submitter IP': submitterIp,
          'Submitter Country': submitterCountry,
        }),
      });

      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', destination: '', intakeYear: '', message: '' });
      } else {
        setError('network');
      }
    } catch {
      setError('network');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: DARK, position: 'relative', overflow: 'hidden' }}>

      {/* ── Background blobs ── */}
      <Box sx={{ position: 'absolute', top: -180, left: -180, width: 620, height: 620, borderRadius: '50%', background: 'radial-gradient(circle, rgba(18,90,65,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: -120, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,165,34,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* ── Shimmer line ── */}
      <motion.div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <motion.div
          style={{ position: 'absolute', left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, rgba(244,165,34,0.3), transparent)' }}
          animate={{ top: ['-2%', '102%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
        />
      </motion.div>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, pt: { xs: 4, md: 6 }, pb: 10 }}>

        {/* ── Top bar ── */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: { xs: 5, md: 7 }, flexWrap: 'wrap', gap: 2 }}>
          {/* Back button */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Button
              startIcon={<ArrowLeft size={18} />}
              onClick={() => navigate('/')}
              sx={{
                color: 'rgba(255,255,255,0.65)', fontWeight: 600, fontSize: '0.88rem',
                border: '1px solid rgba(255,255,255,0.12)', borderRadius: 30, px: 2.5, py: 0.9,
                backdropFilter: 'blur(10px)',
                '&:hover': { borderColor: ORANGE, color: ORANGE, bgcolor: 'rgba(244,165,34,0.07)' },
              }}
            >
              Back to Home
            </Button>
          </motion.div>

          {/* Logo pill */}
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(244,165,34,0.10)', border: '1px solid rgba(244,165,34,0.3)', borderRadius: 30, px: 2.5, py: 0.8 }}>
              <GraduationCap size={14} color={ORANGE} />
              <Typography sx={{ color: ORANGE, fontWeight: 700, fontSize: '0.72rem', letterSpacing: 1.6, textTransform: 'uppercase' }}>
                EduGlobe Lanka Consultancy
              </Typography>
            </Box>
          </motion.div>
        </Box>

        {/* ── Page header ── */}
        <motion.div variants={fadeUp} custom={0.05} initial="hidden" animate="visible">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography variant="overline" sx={{ color: ORANGE, fontWeight: 700, letterSpacing: 3, fontSize: '0.78rem' }}>
              START YOUR JOURNEY
            </Typography>
            <Typography variant="h2" sx={{ color: 'white', mt: 1, mb: 2, fontSize: { xs: '2rem', md: '2.9rem' }, fontWeight: 800 }}>
              Register Your Application
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.55)', maxWidth: 540, mx: 'auto', lineHeight: 1.85, fontSize: '0.96rem' }}>
              Fill in your details below and one of our certified counselors will contact you within 24 hours to discuss your study abroad journey.
            </Typography>
          </Box>
        </motion.div>

        {/* ── Two-column layout ── */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1.6fr' }, gap: { xs: 5, lg: 8 }, alignItems: 'start' }}>

          {/* Left — Promotional offer */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

            {/* ── Main scholarship promo card ── */}
            <motion.div custom={0.1} variants={fadeUp} initial="hidden" animate="visible">
              <Box sx={{
                position: 'relative', borderRadius: 4, overflow: 'hidden',
                background: 'linear-gradient(135deg, #0d3320 0%, #0a2418 50%, #071810 100%)',
                border: '1px solid rgba(244,165,34,0.35)',
                boxShadow: '0 0 60px rgba(244,165,34,0.12), inset 0 0 60px rgba(18,90,65,0.08)',
                p: { xs: 3.5, md: 4.5 },
              }}>
                {/* Animated glow ring */}
                <Box sx={{
                  position: 'absolute', top: -60, right: -60, width: 200, height: 200,
                  borderRadius: '50%', pointerEvents: 'none',
                  background: 'radial-gradient(circle, rgba(244,165,34,0.18) 0%, transparent 70%)',
                  animation: 'pulse-ring 3s ease-in-out infinite',
                }} />
                <Box sx={{
                  position: 'absolute', bottom: -40, left: -40, width: 160, height: 160,
                  borderRadius: '50%', pointerEvents: 'none',
                  background: 'radial-gradient(circle, rgba(18,90,65,0.3) 0%, transparent 70%)',
                }} />

                {/* EXCLUSIVE badge */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Box sx={{
                      display: 'inline-flex', alignItems: 'center', gap: 0.7,
                      bgcolor: ORANGE, color: '#06120C',
                      borderRadius: 30, px: 2, py: 0.5,
                      fontWeight: 800, fontSize: '0.65rem', letterSpacing: 1.5, textTransform: 'uppercase',
                    }}>
                      <Zap size={11} />
                      <Typography sx={{ fontWeight: 800, fontSize: '0.65rem', letterSpacing: 1.5 }}>EXCLUSIVE OFFER</Typography>
                    </Box>
                  </motion.div>
                  <Chip label="2026" size="small" sx={{ bgcolor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', fontSize: '0.68rem', fontWeight: 700, border: '1px solid rgba(255,255,255,0.12)' }} />
                </Box>

                {/* Scholarship amount */}
                <Box sx={{ mb: 2.5 }}>
                  <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', mb: 0.5 }}>
                    September 2026 Intake
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1.5 }}>
                    <motion.div
                      animate={{ textShadow: ['0 0 0px #F4A522', '0 0 24px rgba(244,165,34,0.7)', '0 0 0px #F4A522'] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Typography sx={{
                        color: ORANGE, fontWeight: 900, lineHeight: 1,
                        fontSize: { xs: '3.8rem', md: '4.5rem' },
                        fontFamily: '"Outfit",sans-serif',
                        textShadow: '0 0 30px rgba(244,165,34,0.4)',
                      }}>
                        £3,000
                      </Typography>
                    </motion.div>
                  </Box>
                  <Typography sx={{ color: 'white', fontWeight: 800, fontSize: { xs: '1.3rem', md: '1.55rem' }, mt: 0.5, lineHeight: 1.3 }}>
                    Scholarship Guarantee
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.58)', fontSize: '0.88rem', mt: 1, lineHeight: 1.7 }}>
                    Apply through <Box component="span" sx={{ color: ORANGE, fontWeight: 700 }}>EduGlobe Lanka</Box> to the <Box component="span" sx={{ color: 'white', fontWeight: 700 }}>University of East London</Box> for the September 2026 intake and receive a guaranteed <Box component="span" sx={{ color: 'white', fontWeight: 700 }}>£3,000 scholarship</Box> — directly off your tuition fees.
                  </Typography>
                </Box>

                {/* Divider */}
                <Box sx={{ height: '1px', bgcolor: 'rgba(244,165,34,0.18)', mb: 2.5 }} />

                {/* Offer perks */}
                {[
                  { icon: <Gift size={15} />, text: '£3,000 off your first-year tuition' },
                  { icon: <BadgeCheck size={15} />, text: 'Exclusively at University of East London' },
                  { icon: <Star size={15} />, text: 'September 2026 intake only' },
                ].map(({ icon, text }) => (
                  <Box key={text} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.2 }}>
                    <Box sx={{ color: ORANGE, flexShrink: 0 }}>{icon}</Box>
                    <Typography sx={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.87rem', fontWeight: 500 }}>{text}</Typography>
                  </Box>
                ))}

                {/* CTA arrow */}
                <Box sx={{ mt: 3, p: 2, borderRadius: 2.5, bgcolor: 'rgba(244,165,34,0.08)', border: '1px dashed rgba(244,165,34,0.3)', textAlign: 'center' }}>
                  <Typography sx={{ color: ORANGE, fontWeight: 700, fontSize: '0.84rem', letterSpacing: 0.5 }}>
                    👉 Fill in the form to claim your scholarship →
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            {/* ── Supporting trust cards ── */}
            {[
              { icon: <Users size={18} />, label: '200+ Students Placed', sub: 'in the UK, Australia & more' },
              { icon: <BookOpen size={18} />, label: '98% Visa Success Rate', sub: 'Certified expert counselors' },
            ].map((card, i) => (
              <motion.div key={card.label} custom={0.35 + i * 0.1} variants={fadeUp} initial="hidden" animate="visible">
                <Box sx={{
                  display: 'flex', alignItems: 'center', gap: 2,
                  bgcolor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 3, p: 2.5, transition: 'all 0.3s',
                  '&:hover': { bgcolor: 'rgba(244,165,34,0.06)', borderColor: 'rgba(244,165,34,0.2)' },
                }}>
                  <Box sx={{ width: 42, height: 42, borderRadius: 2, flexShrink: 0, bgcolor: 'rgba(18,90,65,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: ORANGE }}>
                    {card.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>{card.label}</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem' }}>{card.sub}</Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Right — form */}
          <motion.div custom={0.2} variants={fadeUp} initial="hidden" animate="visible">
            <Box sx={{ bgcolor: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 4, p: { xs: 3, sm: 4, md: 5 } }}>

              {submitted ? (
                /* ── Success state ── */
                <Box sx={{ textAlign: 'center', py: 7 }}>
                  <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                    <Box sx={{ width: 88, height: 88, borderRadius: '50%', bgcolor: 'rgba(244,165,34,0.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                      <CheckCircle size={44} color={ORANGE} />
                    </Box>
                  </motion.div>
                  <Typography variant="h5" sx={{ color: 'white', fontWeight: 800, mb: 1.5 }}>Application Submitted! 🎉</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 5, lineHeight: 1.8 }}>
                    Thank you, we've received your application. A certified counselor will reach out within <strong style={{ color: 'white' }}>24 hours</strong>.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button variant="outlined" onClick={() => setSubmitted(false)}
                      sx={{ color: ORANGE, borderColor: 'rgba(244,165,34,0.4)', borderRadius: 30, px: 4, '&:hover': { bgcolor: 'rgba(244,165,34,0.08)' } }}>
                      Submit Another
                    </Button>
                    <Button variant="contained" onClick={() => navigate('/')}
                      sx={{ bgcolor: ORANGE, color: DARK, borderRadius: 30, px: 4, fontWeight: 700, '&:hover': { bgcolor: '#ffb732' } }}>
                      Back to Home
                    </Button>
                  </Box>
                </Box>
              ) : (
                /* ── Form ── */
                <Box component="form" onSubmit={handleSubmit}>
                  <Typography variant="h5" sx={{ color: 'white', fontWeight: 800, mb: 0.7, fontFamily: '"Outfit",sans-serif' }}>
                    Free Consultation Request
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.84rem', mb: 3.5 }}>
                    All fields marked * are required
                  </Typography>

                  {/* Network error */}
                  <Collapse in={error === 'network'}>
                    <Box sx={{ mb: 3, p: 2.5, borderRadius: 2, bgcolor: 'rgba(239,68,68,0.10)', border: '1px solid rgba(239,68,68,0.3)' }}>
                      <Typography sx={{ color: '#FCA5A5', fontWeight: 700, fontSize: '0.88rem', mb: 0.5 }}>Connection error</Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.82rem' }}>
                        Please check your internet or email us at{' '}
                        <Box component="a" href="mailto:Eduglobelankaconsultancy@gmail.com" sx={{ color: ORANGE, textDecoration: 'none' }}>
                          Eduglobelankaconsultancy@gmail.com
                        </Box>
                      </Typography>
                    </Box>
                  </Collapse>

                  {/* Row 1: Name + Email */}
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5, mb: 2.5 }}>
                    <TextField label="Full Name *"     name="name"  value={form.name}  onChange={handleChange} required fullWidth sx={inputSx} />
                    <TextField label="Email Address *" name="email" type="email" value={form.email} onChange={handleChange} required fullWidth sx={inputSx} />
                  </Box>

                  {/* Row 2: Phone + Destination */}
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5, mb: 2.5 }}>
                    <TextField label="Phone Number" name="phone" value={form.phone} onChange={handleChange} fullWidth sx={inputSx} />
                    <TextField
                      label="Preferred Destination" name="destination" value={form.destination}
                      onChange={handleChange} select fullWidth
                      sx={{ ...inputSx, '& .MuiSelect-select': { color: form.destination ? 'white' : 'rgba(255,255,255,0.35)' } }}
                      SelectProps={{ displayEmpty: true, MenuProps: { PaperProps: { sx: { bgcolor: '#0a2418', color: 'white' } } } }}
                    >
                      <MenuItem value="" disabled>Select destination</MenuItem>
                      {destinations.map((d) => (
                        <MenuItem key={d} value={d} sx={{ '&:hover': { bgcolor: 'rgba(244,165,34,0.15)' }, '&.Mui-selected': { bgcolor: 'rgba(244,165,34,0.22)' } }}>
                          {d}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>

                  {/* Row 3: Intake Year */}
                  <Box sx={{ mb: 2.5 }}>
                    <TextField
                      label="Preferred Intake Year" name="intakeYear" value={form.intakeYear}
                      onChange={handleChange} select fullWidth
                      sx={{ ...inputSx, '& .MuiSelect-select': { color: form.intakeYear ? 'white' : 'rgba(255,255,255,0.35)' } }}
                      SelectProps={{ displayEmpty: true, MenuProps: { PaperProps: { sx: { bgcolor: '#0a2418', color: 'white' } } } }}
                    >
                      <MenuItem value="" disabled>Select intake year</MenuItem>
                      {['2025', '2026', '2027', '2028'].map((y) => (
                        <MenuItem key={y} value={y} sx={{ '&:hover': { bgcolor: 'rgba(244,165,34,0.15)' }, '&.Mui-selected': { bgcolor: 'rgba(244,165,34,0.22)' } }}>
                          {y}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>

                  {/* Message */}
                  <TextField
                    label="Your Message *" name="message" value={form.message} onChange={handleChange}
                    required multiline rows={5} fullWidth
                    placeholder="Tell us about your study plans, preferred course, budget, or any questions..."
                    sx={{ ...inputSx, mb: 4 }}
                  />

                  {/* Submit */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      type="submit" variant="contained" size="large" fullWidth disabled={loading}
                      endIcon={<Send size={18} />}
                      sx={{
                        background: 'linear-gradient(135deg, #F4A522 0%, #ffc155 100%)',
                        color: DARK, py: 1.9, fontSize: '1rem', fontWeight: 800, borderRadius: 30,
                        boxShadow: '0 10px 32px rgba(244,165,34,0.35)',
                        '&:hover': { boxShadow: '0 18px 44px rgba(244,165,34,0.55)' },
                        '&:disabled': { background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.3)' },
                      }}
                    >
                      {loading ? 'Sending…' : 'Submit My Application'}
                    </Button>
                  </motion.div>

                  <Typography sx={{ color: 'rgba(255,255,255,0.28)', fontSize: '0.74rem', textAlign: 'center', mt: 2 }}>
                    🔒 Your information is 100% secure and will never be shared.
                  </Typography>
                </Box>
              )}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
