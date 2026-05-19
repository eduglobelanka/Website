import React, { useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Shield, Book, PenTool } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { servicesData } from '../data/servicesData';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.25, 0.46, 0.45, 0.94] } }),
};

const iconMap = {
  'shield': Shield,
  'book': Book,
  'pen': PenTool,
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData[serviceId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return <Navigate to="/" replace />; // Fallback if service not found
  }

  const MainIcon = iconMap[service.icon] || Shield;

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      {/* Hero Section */}
      <Box sx={{ position: 'relative', bgcolor: '#071810', py: { xs: 8, md: 12 }, overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(18,90,65,0.3) 0%, transparent 70%)' }} />
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Button
            startIcon={<ArrowLeft size={18} />}
            onClick={() => navigate('/')}
            sx={{ mb: 4, color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#F4A522' } }}
          >
            Back to Home
          </Button>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(244,165,34,0.1)', px: 2, py: 1, borderRadius: 2, mb: 3 }}>
               <MainIcon size={20} color="#F4A522" />
               <Typography variant="overline" sx={{ color: '#F4A522', fontWeight: 700, letterSpacing: 2, m: 0, lineHeight: 1 }}>
                 OUR SERVICES
               </Typography>
            </Box>
            <Typography variant="h1" sx={{ color: 'white', mb: 3, fontSize: { xs: '2.4rem', md: '3.6rem' }, fontWeight: 900 }}>
              {service.title}
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.85)', maxWidth: 700, fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
              {service.description}
            </Typography>
            <Button variant="contained" size="large" onClick={() => navigate('/register')} sx={{ bgcolor: '#F4A522', color: '#06120C', borderRadius: 30, px: 4, py: 1.5, fontWeight: 800, '&:hover': { bgcolor: '#e0961a' } }}>
              Book a Free Consultation
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
        <Container maxWidth="xl">
          <Grid container spacing={8}>
            
            {/* Left: How We Help */}
            <Grid item xs={12} lg={7}>
              <motion.div custom={0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Typography variant="h3" sx={{ color: '#125A41', fontWeight: 800, mb: 5, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                  Our Approach
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {service.howWeHelp.map((item, i) => (
                     <Box key={i} sx={{ display: 'flex', gap: 3 }}>
                       <Box sx={{ width: 48, height: 48, borderRadius: '50%', bgcolor: 'rgba(18,90,65,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                         <Typography sx={{ color: '#125A41', fontWeight: 900, fontSize: '1.2rem' }}>{item.step}</Typography>
                       </Box>
                       <Box>
                         <Typography variant="h6" sx={{ fontWeight: 800, color: '#125A41', mb: 1 }}>{item.title}</Typography>
                         <Typography sx={{ color: '#4A5D54', fontSize: '1.05rem', lineHeight: 1.7 }}>{item.desc}</Typography>
                       </Box>
                     </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Right: Why Choose Us */}
            <Grid item xs={12} lg={5}>
              <motion.div custom={0.3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Box sx={{ bgcolor: '#f5f7f6', borderRadius: 4, p: 5, border: '1px solid rgba(18,90,65,0.08)' }}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: '#125A41', mb: 3 }}>
                    Why Choose Us?
                  </Typography>
                  <Typography sx={{ color: '#4A5D54', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                    {service.whyChooseUs}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, bgcolor: 'white', p: 2.5, borderRadius: 3, boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                    <CheckCircle size={32} color="#F4A522" />
                    <Box>
                      <Typography sx={{ fontWeight: 800, color: '#125A41', fontSize: '1.1rem' }}>98% Success Rate</Typography>
                      <Typography sx={{ color: '#7a8c82', fontSize: '0.85rem' }}>Trusted by hundreds of students.</Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default ServicePage;
