import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, useTheme, Collapse } from '@mui/material';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  { icon: <Phone size={20} />, label: 'Phone',  lines: ['+44 7401 148372'] },
  { icon: <Mail size={20} />,  label: 'Email',  lines: ['Eduglobelankaconsultancy@gmail.com'] },
  { icon: <MapPin size={20} />,label: 'Office', lines: ['No. 45, Duplication Road,', 'Colombo 03, Sri Lanka'] },
  { icon: <Clock size={20} />, label: 'Hours',  lines: ['Mon – Fri: 9:00 AM – 6:00 PM', 'Sat: 9:00 AM – 2:00 PM'] },
];

const destinations = ['Canada', 'United Kingdom', 'Australia', 'USA', 'New Zealand', 'Other'];

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
      const res = await fetch('https://formsubmit.co/ajax/Eduglobelankaconsultancy@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Enquiry from ${form.name} — EduGlobe Lanka`,
          _captcha: 'false',
          _template: 'table',
          Name: form.name,
          Email: form.email,
          Phone: form.phone || '—',
          'Preferred Destination': form.destination || '—',
          Message: form.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', destination: '', message: '' });
      } else if (res.status === 500 || res.status === 403) {
        // FormSubmit sends a confirmation email on the FIRST submission.
        // The endpoint stays inactive (returns 500) until the user clicks "Confirm".
        setError('activation');
      } else {
        setError('network');
      }
    } catch {
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
                      <Typography key={l} sx={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.9rem', lineHeight: 1.65 }}>{l}</Typography>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Right — form */}
          <motion.div custom={0.15} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <Box sx={{ bgcolor: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 4, p: { xs: 3.5, md: 5 } }}>

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

                  {/* Activation warning */}
                  <Collapse in={error === 'activation'}>
                    <Box sx={{ mb: 3, p: 2.5, borderRadius: 2, bgcolor: 'rgba(251,191,36,0.10)', border: '1px solid rgba(251,191,36,0.35)' }}>
                      <Typography sx={{ color: '#FCD34D', fontWeight: 700, fontSize: '0.88rem', mb: 1 }}>
                        ⚠️ One-time email activation required
                      </Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.82rem', lineHeight: 1.75 }}>
                        FormSubmit has sent a <strong style={{ color: 'white' }}>confirmation email</strong> to{' '}
                        <strong style={{ color: 'white' }}>Eduglobelankaconsultancy@gmail.com</strong>.
                        Open that email and click <strong style={{ color: 'white' }}>"Confirm"</strong>, then resubmit this form.
                        This is a <em>one-time</em> step.
                      </Typography>
                      <Button
                        href="mailto:Eduglobelankaconsultancy@gmail.com?subject=Study Abroad Enquiry"
                        component="a"
                        size="small"
                        sx={{ mt: 1.5, color: '#FCD34D', border: '1px solid rgba(252,211,77,0.45)', borderRadius: 30, px: 2.5, fontSize: '0.78rem', '&:hover': { bgcolor: 'rgba(252,211,77,0.08)' } }}
                      >
                        Or email us directly →
                      </Button>
                    </Box>
                  </Collapse>

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
                      onChange={handleChange} select fullWidth SelectProps={{ native: true }}
                      sx={{ ...inputSx, '& select': { color: form.destination ? 'white' : 'rgba(255,255,255,0.35)', bgcolor: 'transparent' }, '& select option': { bgcolor: '#0a2418', color: 'white' } }}
                    >
                      <option value="">Select destination</option>
                      {destinations.map((d) => <option key={d} value={d}>{d}</option>)}
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
