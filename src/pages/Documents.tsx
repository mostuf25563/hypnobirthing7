import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Award, GraduationCap, FileText } from 'lucide-react';

export const Documents = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  const certifications = t('documents.certifications.items', { returnObjects: true });
  const achievements = t('documents.achievements.items', { returnObjects: true });

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} dir={isRTL ? 'rtl' : 'ltr'}>
      <Typography variant="h2" gutterBottom color="primary" textAlign={isRTL ? 'right' : 'left'}>
        {t('documents.title')}
      </Typography>

      {/* Certifications */}
      <Box sx={{ mb: 8, mt: 6 }}>
        <Typography variant="h4" gutterBottom color="primary" textAlign={isRTL ? 'right' : 'left'}>
          {t('documents.certifications.title')}
        </Typography>
        <Grid container spacing={4}>
          {certifications.map((cert: any, index: number) => (
            <Grid item xs={12} md={4} key={index}>
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
                {index === 0 ? <GraduationCap size={40} color="#D4A5A5" /> :
                 index === 1 ? <Award size={40} color="#D4A5A5" /> :
                              <FileText size={40} color="#D4A5A5" />}
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                  {cert.title}
                </Typography>
                <Typography color="text.secondary">
                  {cert.organization}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {cert.year}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Achievements */}
      <Box>
        <Typography variant="h4" gutterBottom color="primary" textAlign={isRTL ? 'right' : 'left'}>
          {t('documents.achievements.title')}
        </Typography>
        <Grid container spacing={4}>
          {achievements.map((achievement: any, index: number) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%'
                }}
              >
                <Typography variant="h6" gutterBottom textAlign={isRTL ? 'right' : 'left'}>
                  {achievement.title}
                </Typography>
                <Typography paragraph textAlign={isRTL ? 'right' : 'left'}>
                  {achievement.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign={isRTL ? 'right' : 'left'}>
                  {achievement.year}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};