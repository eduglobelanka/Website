import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, useTheme, Collapse, MenuItem } from '@mui/material';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle, ExternalLink, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  { icon: <Phone size={20} />, label: 'Phone',  lines: ['+44 7401 148372'] },
  { icon: <Mail size={20} />,  label: 'Email',  lines: ['Eduglobelankaconsultancy@gmail.com'] },
  { icon: <MapPin size={20} />,label: 'Colombo Office', lines: ['No. 45, Duplication Road,', 'Colombo 03, Sri Lanka'] },
  { icon: <MapPin size={20} />,label: 'Jaffna Operations', lines: ['Serving students across', 'Jaffna & Northern Province'] },
  { icon: <Clock size={20} />, label: 'Hours',  lines: ['Mon – Fri: 9:00 AM – 6:00 PM', 'Sat: 9:00 AM – 2:00 PM'] },
];

const destinations = ['United Kingdom', 'Canada', 'Australia', 'USA', 'New Zealand', 'Other'];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.25, 0.46, 0.45, 0.94] } }),
};

const Contact = () => {
  const theme = useTheme();
  const [form, setForm]           = useState({ name: '', email: '', phone: '', destination: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState(null); // null | 'activation' | 'network'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // 1️⃣ Resolve submitter's IP & country (best-effort — fails silently)
      let submitterIp      = 'Unknown';
      let submitterCountry = 'Unknown';
      try {
        const geoRes  = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(5000) });
        const geoJson = await geoRes.json();
        submitterIp      = geoJson.ip      || 'Unknown';
        submitterCountry = geoJson.country_name || geoJson.country || 'Unknown';
      } catch (geoErr) {
        console.warn('[GeoIP] lookup failed (ignored):', geoErr);
      }

      // 2️⃣ Submit form via Web3Forms
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '2bc10ea7-5fbb-45c9-a453-26dbad56aba9';
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Enquiry from ${form.name} — EduGlobe Lanka`,
          from_name: 'EduGlobe Lanka Website',
          replyto: form.email,
          botcheck: false,
          Name: form.name,
          Email: form.email,
          Phone: form.phone || '—',
          'Preferred Destination': form.destination || '—',
          Message: form.message,
          'Submitter IP': submitterIp,
          'Submitter Country': submitterCountry,
        }),
      });

      const json = await res.json().catch(() => ({}));
      console.log('[Web3Forms] response:', res.status, json);

      if (res.ok && json.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', destination: '', message: '' });
      } else {
        console.error('[Web3Forms] error:', json.message || json);
        setError('network');
      }
    } catch (err) {
      console.error('[Web3Forms] fetch error:', err);
      setError('network');
    } finally {
      setLoading(false);
    }
  };

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: 2,
      bgcolor: 'rgba(255,255,255,0.04)',
      color: 'white',
      '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
      '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.35)' },
      '&.Mui-focused fieldset': { borderColor: '#F4A522', borderWidth: 1.5 },
    },
    '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#F4A522' },
    '& .MuiInputBase-input': { color: 'white' },
    '& .MuiInputBase-input::placeholder': { color: 'rgba(255,255,255,0.35)' },
  };

  return (
    <Box id="contact" sx={{ position: 'relative', bgcolor: '#071810', py: { xs: 8, md: 12 }, overflow: 'hidden' }}>
      {/* Blobs */}
      <Box sx={{ position: 'absolute', top: -120, left: -120, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(18,90,65,0.22) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: -100, right: -80, width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,165,34,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography variant="overline" sx={{ color: '#F4A522', fontWeight: 700, letterSpacing: 3, fontSize: '0.78rem' }}>GET IN TOUCH</Typography>
            <Typography variant="h2" sx={{ color: 'white', mt: 1, mb: 2, fontSize: { xs: '2rem', md: '2.8rem' } }}>Start Your Journey Today</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.58)', maxWidth: 520, mx: 'auto', lineHeight: 1.8, fontSize: '0.97rem' }}>
              Fill out the form and one of our certified counselors will reach out within 24 hours to discuss your study abroad plans.
            </Typography>
          </Box>
        </motion.div>

        {/* Two-column layout */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1.6fr' }, gap: { xs: 5, lg: 8 }, alignItems: 'start' }}>

          {/* Left — info cards */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {contactInfo.map((c, i) => (
              <motion.div key={c.label} custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
                <Box sx={{
                  display: 'flex', alignItems: 'flex-start', gap: 2.5,
                  bgcolor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 3, p: 3, transition: 'all 0.3s',
                  '&:hover': { bgcolor: 'rgba(244,165,34,0.07)', borderColor: 'rgba(244,165,34,0.25)' },
                }}>
                  <Box sx={{ width: 46, height: 46, borderRadius: 2, flexShrink: 0, bgcolor: 'rgba(244,165,34,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F4A522' }}>
                    {c.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', mb: 0.5 }}>{c.label}</Typography>
                    {c.lines.map((l) => (
                      <Typography key={l} sx={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.9rem', lineHeight: 1.65, wordBreak: 'break-word' }}>{l}</Typography>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            ))}

            {/* Google Business Profile / Maps CTA */}
            <motion.div custom={0.5} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
              <Box
                component="a"
                href="https://maps.app.goo.gl/REPLACE_WITH_YOUR_GOOGLE_MAPS_LINK"
                target="_blank"
                rel="noopener noreferrer"
                id="google-maps-link"
                sx={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: 2, textDecoration: 'none',
                  bgcolor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(244,165,34,0.3)',
                  borderRadius: 3, p: 2.5,
                  transition: 'all 0.3s',
                  '&:hover': { bgcolor: 'rgba(244,165,34,0.1)', borderColor: 'rgba(244,165,34,0.6)', transform: 'translateY(-2px)' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {/* Google G icon */}
                  <Box sx={{
                    width: 46, height: 46, borderRadius: 2, flexShrink: 0,
                    bgcolor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.2 }}>Find Us on Google</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4, mt: 0.3 }}>
                      {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="#F4A522" color="#F4A522" />)}
                      <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.72rem', ml: 0.5 }}>4.9 · Google Reviews</Typography>
                    </Box>
                  </Box>
                </Box>
                <ExternalLink size={16} color="rgba(244,165,34,0.7)" />
              </Box>
            </motion.div>
          </Box>

          {/* Right — form */}
          <motion.div custom={0.15} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <Box sx={{ bgcolor: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 4, p: { xs: 2.5, sm: 3.5, md: 5 } }}>

              {submitted ? (
                /* Success */
                <Box sx={{ textAlign: 'center', py: 6 }}>
                  <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                    <Box sx={{ width: 80, height: 80, borderRadius: '50%', bgcolor: 'rgba(244,165,34,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                      <CheckCircle size={40} color="#F4A522" />
                    </Box>
                  </motion.div>
                  <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Message Sent!</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 4, lineHeight: 1.7 }}>
                    Thank you for reaching out. One of our counselors will contact you within 24 hours.
                  </Typography>
                  <Button variant="outlined" sx={{ color: '#F4A522', borderColor: 'rgba(244,165,34,0.4)', borderRadius: 30, px: 4 }} onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </Box>
              ) : (
                /* Form */
                <Box component="form" onSubmit={handleSubmit}>
                  <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 0.8, fontFamily: '"Outfit",sans-serif' }}>Free Consultation Request</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.85rem', mb: 3 }}>All fields marked * are required</Typography>



                  {/* Network error */}
                  <Collapse in={error === 'network'}>
                    <Box sx={{ mb: 3, p: 2.5, borderRadius: 2, bgcolor: 'rgba(239,68,68,0.10)', border: '1px solid rgba(239,68,68,0.3)' }}>
                      <Typography sx={{ color: '#FCA5A5', fontWeight: 700, fontSize: '0.88rem', mb: 0.5 }}>Connection error</Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.82rem' }}>
                        Please check your internet connection or email us at{' '}
                        <Box component="a" href="mailto:Eduglobelankaconsultancy@gmail.com" sx={{ color: '#F4A522', textDecoration: 'none' }}>
                          Eduglobelankaconsultancy@gmail.com
                        </Box>
                      </Typography>
                    </Box>
                  </Collapse>

                  {/* Fields */}
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5, mb: 2.5 }}>
                    <TextField label="Full Name *"      name="name"    value={form.name}    onChange={handleChange} required fullWidth sx={inputSx} />
                    <TextField label="Email Address *"  name="email"   type="email" value={form.email}   onChange={handleChange} required fullWidth sx={inputSx} />
                    <TextField label="Phone Number"     name="phone"   value={form.phone}   onChange={handleChange} fullWidth sx={inputSx} />
                    <TextField
                      label="Preferred Destination" name="destination" value={form.destination}
                      onChange={handleChange} select fullWidth
                      sx={{ ...inputSx, '& .MuiSelect-select': { color: form.destination ? 'white' : 'rgba(255,255,255,0.35)' } }}
                      SelectProps={{
                        displayEmpty: true,
                        MenuProps: { PaperProps: { sx: { bgcolor: '#0a2418', color: 'white' } } }
                      }}
                    >
                      <MenuItem value="" disabled>Select destination</MenuItem>
                      {destinations.map((d) => <MenuItem key={d} value={d} sx={{ '&:hover': { bgcolor: 'rgba(244,165,34,0.15)' }, '&.Mui-selected': { bgcolor: 'rgba(244,165,34,0.25)', '&:hover': { bgcolor: 'rgba(244,165,34,0.35)' } } }}>{d}</MenuItem>)}
                    </TextField>
                  </Box>

                  <TextField
                    label="Your Message *" name="message" value={form.message} onChange={handleChange}
                    required multiline rows={5} fullWidth
                    placeholder="Tell us about your study plans, preferred course, budget, or any questions..."
                    sx={{ ...inputSx, mb: 3.5 }}
                  />

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit" variant="contained" size="large" fullWidth disabled={loading}
                      endIcon={<Send size={18} />}
                      sx={{
                        background: 'linear-gradient(135deg, #F4A522 0%, #ffc155 100%)',
                        color: '#06120C', py: 1.8, fontSize: '1rem', fontWeight: 700, borderRadius: 30,
                        boxShadow: '0 10px 32px rgba(244,165,34,0.35)',
                        '&:hover': { boxShadow: '0 16px 40px rgba(244,165,34,0.5)' },
                        '&:disabled': { background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.3)' },
                      }}
                    >
                      {loading ? 'Sending…' : 'Send My Enquiry'}
                    </Button>
                  </motion.div>

                  <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', textAlign: 'center', mt: 2 }}>
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

export default Contact;
