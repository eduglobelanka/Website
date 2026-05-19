import React, { useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, MapPin, GraduationCap, DollarSign, Briefcase } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { destinationsData } from '../data/destinationsData';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.25, 0.46, 0.45, 0.94] } }),
};

const DestinationPage = () => {
  const { countryId } = useParams();
  const navigate = useNavigate();
  const dest = destinationsData[countryId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [countryId]);

  if (!dest) {
    return <Navigate to="/" replace />; // Fallback if country not found
  }

  const icons = [GraduationCap, Briefcase, MapPin, DollarSign];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        bgcolor: '#071810',
        py: { xs: 8, md: 14 },
        backgroundImage: `linear-gradient(to right, rgba(7,24,16,0.95) 30%, rgba(7,24,16,0.6) 100%), url(${dest.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Button
            startIcon={<ArrowLeft size={18} />}
            onClick={() => navigate('/')}
            sx={{ mb: 4, color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#F4A522' } }}
          >
            Back to Home
          </Button>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Typography variant="overline" sx={{ color: '#F4A522', fontWeight: 700, letterSpacing: 3 }}>
              DESTINATIONS
            </Typography>
            <Typography variant="h1" sx={{ color: 'white', mt: 1, mb: 3, fontSize: { xs: '2.4rem', md: '4rem' }, fontWeight: 900 }}>
              {dest.title}
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.85)', maxWidth: 700, fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
              {dest.description}
            </Typography>
            <Button variant="contained" size="large" onClick={() => navigate('/register')} sx={{ bgcolor: '#F4A522', color: '#06120C', borderRadius: 30, px: 4, py: 1.5, fontWeight: 800, '&:hover': { bgcolor: '#e0961a' } }}>
              Apply for {dest.name} Now
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, py: { xs: 8, md: 12 }, bgcolor: '#f5f7f6' }}>
        <Container maxWidth="xl">
          <Grid container spacing={8}>
            
            {/* Left: Why Study Here */}
            <Grid item xs={12} lg={7}>
              <motion.div custom={0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Typography variant="h3" sx={{ color: '#125A41', fontWeight: 800, mb: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                  Why Study in {dest.name}?
                </Typography>
                
                <Grid container spacing={3}>
                  {dest.whyStudyHere.map((reason, i) => {
                    const Icon = icons[i % icons.length];
                    return (
                      <Grid item xs={12} sm={6} key={i}>
                        <Card sx={{ height: '100%', borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid rgba(18,90,65,0.08)' }}>
                          <CardContent sx={{ p: 3 }}>
                            <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: 'rgba(244,165,34,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F4A522', mb: 2 }}>
                              <Icon size={22} />
                            </Box>
                            <Typography sx={{ fontWeight: 800, color: '#125A41', mb: 1 }}>{reason.title}</Typography>
                            <Typography sx={{ color: '#4A5D54', fontSize: '0.9rem', lineHeight: 1.6 }}>{reason.desc}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>

                {/* Step by Step */}
                <Box sx={{ mt: 8 }}>
                  <Typography variant="h4" sx={{ color: '#125A41', fontWeight: 800, mb: 4 }}>
                    Your Journey to {dest.name}
                  </Typography>
                  <Box sx={{ position: 'relative' }}>
                    {/* Vertical line connecting steps */}
                    <Box sx={{ position: 'absolute', left: 15, top: 20, bottom: 20, width: 2, bgcolor: 'rgba(244,165,34,0.3)' }} />
                    
                    {dest.stepByStep.map((step, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3, position: 'relative', zIndex: 1 }}>
                        <Box sx={{ width: 32, height: 32, borderRadius: '50%', bgcolor: '#F4A522', color: '#06120C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0, boxShadow: '0 0 0 4px #f5f7f6' }}>
                          {i + 1}
                        </Box>
                        <Box sx={{ bgcolor: 'white', py: 2, px: 3, borderRadius: 3, boxShadow: '0 2px 12px rgba(0,0,0,0.03)', width: '100%' }}>
                          <Typography sx={{ fontWeight: 700, color: '#125A41' }}>{step}</Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Right: Sidebar */}
            <Grid item xs={12} lg={5}>
              <motion.div custom={0.3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                
                {/* Top Universities */}
                <Box sx={{ bgcolor: 'white', borderRadius: 4, p: 4, mb: 4, boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#125A41', mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <GraduationCap size={24} color="#F4A522" />
                    Top Partner Universities
                  </Typography>
                  {dest.topUniversities.map((uni, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
                      <CheckCircle size={18} color="#125A41" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <Typography sx={{ color: '#4A5D54', fontWeight: 600 }}>{uni}</Typography>
                    </Box>
                  ))}
                  <Typography sx={{ color: 'rgba(74,93,84,0.6)', fontSize: '0.8rem', mt: 2, fontStyle: 'italic' }}>
                    *This is a partial list. We partner with many more institutions across {dest.name}.
                  </Typography>
                </Box>

                {/* Living Costs */}
                <Box sx={{ bgcolor: '#125A41', borderRadius: 4, p: 4, color: 'white', boxShadow: '0 12px 40px rgba(18,90,65,0.2)' }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <DollarSign size={24} color="#F4A522" />
                    Estimated Living Costs
                  </Typography>
                  <Typography sx={{ fontSize: '1.1rem', fontWeight: 600, color: '#F4A522', mb: 1 }}>
                    {dest.livingCosts}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    Note: Living expenses vary greatly depending on the city, accommodation type, and personal lifestyle. Proof of funds is required for visa approval.
                  </Typography>
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

export default DestinationPage;
