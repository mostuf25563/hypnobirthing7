import React from 'react';
import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Heart, Baby, Leaf } from 'lucide-react';
import { DebugTooltip } from '../components/Debug/DebugTooltip';

export const Home = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  return (
    <Box dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url("https://raw.githubusercontent.com/ofer-shaham/hypnobirthing4/refs/heads/main/src/img/logo2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: isRTL ? 'right' : 'left' }}>
            <DebugTooltip jsonPath="animation_text.json > introduction.name">
              <Typography
                variant="h1"
                color="white"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                  mb: 2
                }}
              >
                מאריאנה שחם
              </Typography>
            </DebugTooltip>
            
            <DebugTooltip jsonPath="home.subtitle (i18n)">
              <Typography
                variant="h4"
                color="white"
                sx={{
                  mb: 4,
                  maxWidth: '800px',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                  lineHeight: 1.4
                }}
              >
                לידה מנצחת - מרגע ההכנה עד החיבוק הראשון ואחריו, יד ביד איתך כל הדרך
              </Typography>
            </DebugTooltip>

            <DebugTooltip jsonPath="home.exploreButton (i18n)">
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
                  boxShadow: '0 4px 15px rgba(212, 165, 165, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(212, 165, 165, 0.4)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                {t('home.exploreButton')}
              </Button>
            </DebugTooltip>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 8, backgroundColor: 'rgba(212, 165, 165, 0.05)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <DebugTooltip jsonPath="animation_text.json > services.title">
              <Typography variant="h3" color="primary" sx={{ mb: 4, fontWeight: 'bold' }}>
                כל המקצועיות במקום אחד
              </Typography>
            </DebugTooltip>
            
            <DebugTooltip jsonPath="animation_text.json > services.offerings">
              <Typography variant="h5" color="text.primary" sx={{ fontWeight: 500 }}>
                הכנה ללידה • הכנה להנקה • שפת דנסטן • עיסוי התינוק
              </Typography>
            </DebugTooltip>
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
              <Heart size={48} color="#D4A5A5" />
              <DebugTooltip jsonPath="home.features.hypnobirthing.title (i18n)">
                <Typography variant="h5" sx={{ mt: 2, mb: 1, color: 'primary.main' }}>
                  {t('home.features.hypnobirthing.title')}
                </Typography>
              </DebugTooltip>
              <DebugTooltip jsonPath="home.features.hypnobirthing.description (i18n)">
                <Typography>
                  {t('home.features.hypnobirthing.description')}
                </Typography>
              </DebugTooltip>
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
              <Baby size={48} color="#D4A5A5" />
              <DebugTooltip jsonPath="home.features.breastfeeding.title (i18n)">
                <Typography variant="h5" sx={{ mt: 2, mb: 1, color: 'primary.main' }}>
                  {t('home.features.breastfeeding.title')}
                </Typography>
              </DebugTooltip>
              <DebugTooltip jsonPath="home.features.breastfeeding.description (i18n)">
                <Typography>
                  {t('home.features.breastfeeding.description')}
                </Typography>
              </DebugTooltip>
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
              <Leaf size={48} color="#D4A5A5" />
              <DebugTooltip jsonPath="home.features.holistic.title (i18n)">
                <Typography variant="h5" sx={{ mt: 2, mb: 1, color: 'primary.main' }}>
                  {t('home.features.holistic.title')}
                </Typography>
              </DebugTooltip>
              <DebugTooltip jsonPath="home.features.holistic.description (i18n)">
                <Typography>
                  {t('home.features.holistic.description')}
                </Typography>
              </DebugTooltip>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};