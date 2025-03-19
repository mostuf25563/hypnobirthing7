import React from 'react';
import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Heart, Baby, Leaf } from 'lucide-react';

export const Home = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  return (
    <Box dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url("https://github.com/ofer-shaham/hypnobirthing-proffesional-website/blob/main/public/assets/1.jpg?raw=true"https://github.com/ofer-shaham/hypnobirthing-proffesional-website/blob/main/public/assets/1.jpg?raw=true")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
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
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h1"
            color="white"
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              textAlign: isRTL ? 'right' : 'left'
            }}
          >
            {t('home.welcome')}
          </Typography>
          <Typography
            variant="h4"
            color="white"
            sx={{
              mb: 4,
              maxWidth: '600px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              textAlign: isRTL ? 'right' : 'left'
            }}
          >
            {t('home.subtitle')}
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="primary"
            href="/courses"
            sx={{ fontSize: '1.2rem', py: 1.5, px: 4 }}
          >
            {t('home.exploreButton')}
          </Button>
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
                textAlign: 'center'
              }}
            >
              <Heart size={48} color="#4CAF50" />
              <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
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
                textAlign: 'center'
              }}
            >
              <Baby size={48} color="#4CAF50" />
              <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
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
                textAlign: 'center'
              }}
            >
              <Leaf size={48} color="#4CAF50" />
              <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
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
