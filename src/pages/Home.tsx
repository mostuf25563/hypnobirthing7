import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Heart, Baby, Leaf } from 'lucide-react';
import { TypewriterText } from '../components/Animations/TypewriterText';
import { FadeInText } from '../components/Animations/FadeInText';
import { SlideInText } from '../components/Animations/SlideInText';
import animationData from '../texts/animation_text.json';

export const Home = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';
  const [showSecondAnimation, setShowSecondAnimation] = useState(false);

  const services = animationData.services.offerings;

  return (
    <Box dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: isRTL ? 'right' : 'left' }}>
            <TypewriterText
              text={animationData.introduction.name}
              speed={100}
              variant="h1"
              color="white"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                mb: 2
              }}
              onComplete={() => setShowSecondAnimation(true)}
            />
            
            {showSecondAnimation && (
              <FadeInText
                text="לידה מנצחת - מרגע ההכנה עד החיבוק הראשון ואחריו, יד ביד איתך כל הדרך"
                delay={500}
                variant="h4"
                color="white"
                sx={{
                  mb: 4,
                  maxWidth: '800px',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                  lineHeight: 1.4
                }}
              />
            )}

            {showSecondAnimation && (
              <FadeInText
                text={t('home.exploreButton')}
                delay={1500}
                sx={{ display: 'inline-block' }}
              >
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  href="/courses"
                  sx={{ 
                    fontSize: '1.2rem', 
                    py: 1.5, 
                    px: 4,
                    borderRadius: '25px',
                    boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {t('home.exploreButton')}
                </Button>
              </FadeInText>
            )}
          </Box>
        </Container>
      </Box>

      {/* Services Animation Section */}
      <Box sx={{ py: 8, backgroundColor: 'rgba(76, 175, 80, 0.05)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <FadeInText
              text={animationData.services.title}
              delay={200}
              variant="h3"
              color="primary"
              sx={{ mb: 4, fontWeight: 'bold' }}
            />
            
            <SlideInText
              texts={services}
              interval={2000}
              delay={1000}
              variant="h5"
              color="text.primary"
              sx={{ 
                fontWeight: 500,
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Heart size={48} color="#4CAF50" />
              <Typography variant="h5" sx={{ mt: 2, mb: 1, color: 'primary.main' }}>
                {t('home.features.hypnobirthing.title')}
              </Typography>
              <Typography>
                {t('home.features.hypnobirthing.description')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Baby size={48} color="#4CAF50" />
              <Typography variant="h5" sx={{ mt: 2, mb: 1, color: 'primary.main' }}>
                {t('home.features.breastfeeding.title')}
              </Typography>
              <Typography>
                {t('home.features.breastfeeding.description')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Leaf size={48} color="#4CAF50" />
              <Typography variant="h5" sx={{ mt: 2, mb: 1, color: 'primary.main' }}>
                {t('home.features.holistic.title')}
              </Typography>
              <Typography>
                {t('home.features.holistic.description')}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};