import React from 'react';
import { Container, Typography, Box, Grid, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Award, Heart, Users } from 'lucide-react';

export const About = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative' }}>
            <Avatar
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              sx={{
                width: { xs: 200, md: 300 },
                height: { xs: 200, md: 300 },
                mx: 'auto'
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" gutterBottom color="primary">
            {t('about.title')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('about.intro')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('about.description')}
          </Typography>
        </Grid>
      </Grid>

      {/* Credentials Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom textAlign="center" color="primary">
          {t('about.credentials.title')}
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Award size={48} color="#4CAF50" />
              <Typography variant="h6" sx={{ mt: 2 }}>
                {t('about.credentials.certified.title')}
              </Typography>
              <Typography>
                {t('about.credentials.certified.description')}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Heart size={48} color="#4CAF50" />
              <Typography variant="h6" sx={{ mt: 2 }}>
                {t('about.credentials.passionate.title')}
              </Typography>
              <Typography>
                {t('about.credentials.passionate.description')}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Users size={48} color="#4CAF50" />
              <Typography variant="h6" sx={{ mt: 2 }}>
                {t('about.credentials.community.title')}
              </Typography>
              <Typography>
                {t('about.credentials.community.description')}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};