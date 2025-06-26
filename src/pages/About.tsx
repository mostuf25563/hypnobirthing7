import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Avatar, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Award, Heart, Users } from 'lucide-react';
import { TypewriterText } from '../components/Animations/TypewriterText';
import { FadeInText } from '../components/Animations/FadeInText';
import { PulseText } from '../components/Animations/PulseText';
import aboutSelfData from '../texts/about_self.json';
import animationData2 from '../texts/amination_text2.json';

export const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';
  const [showContent, setShowContent] = useState(false);

  const aboutData = animationData2.about_self;

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} dir={isRTL ? 'rtl' : 'ltr'}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', textAlign: 'center' }}>
            <Avatar
              src="https://raw.githubusercontent.com/ofer-shaham/hypnobirthing4/d5b272e4ad8c610dae7a9d05a06a8db6da17e75a/src/img/profile.jpg"
              sx={{
                width: { xs: 250, md: 350 },
                height: { xs: 250, md: 350 },
                mx: 'auto',
                mb: 3,
                border: '5px solid',
                borderColor: 'primary.main',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.3)'
                }
              }}
            />
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: isRTL ? 'right' : 'left' }}>
            <TypewriterText
              text={aboutData.greeting}
              speed={80}
              variant="h2"
              color="primary"
              sx={{ mb: 3, fontWeight: 'bold' }}
              onComplete={() => setShowContent(true)}
            />
            
            {showContent && (
              <>
                <FadeInText
                  text={aboutData.journey_start.first_birth.description}
                  delay={500}
                  variant="h6"
                  color="text.secondary"
                  sx={{ mb: 2, fontStyle: 'italic' }}
                />
                
                <FadeInText
                  text={aboutData.journey_start.first_birth.feelings}
                  delay={1000}
                  variant="body1"
                  sx={{ mb: 3, lineHeight: 1.8 }}
                />
                
                <PulseText
                  text={aboutData.journey_start.first_birth.realization}
                  delay={1500}
                  variant="h6"
                  color="primary"
                  sx={{ mb: 3, fontWeight: 'bold' }}
                />
                
                <FadeInText
                  text={aboutData.journey_start.second_birth_decision}
                  delay={2000}
                  variant="body1"
                  sx={{ mb: 2, lineHeight: 1.8 }}
                />
                
                <FadeInText
                  text={aboutData.journey_start.third_and_fourth_births.description}
                  delay={2500}
                  variant="body1"
                  sx={{ mb: 2, lineHeight: 1.8 }}
                />
                
                <FadeInText
                  text={aboutData.journey_start.third_and_fourth_births.feeling}
                  delay={3000}
                  variant="body1"
                  color="primary"
                  sx={{ mb: 3, fontWeight: 'medium', lineHeight: 1.8 }}
                />
              </>
            )}
          </Box>
        </Grid>
      </Grid>

      {/* Mission Section */}
      <Box sx={{ mt: 8, p: 4, backgroundColor: 'rgba(76, 175, 80, 0.05)', borderRadius: '20px' }}>
        <FadeInText
          text={aboutData.mission.understanding_power}
          delay={3500}
          variant="h5"
          color="text.primary"
          sx={{ mb: 3, textAlign: 'center', lineHeight: 1.6 }}
        />
        
        <PulseText
          text={aboutData.mission.goal}
          delay={4000}
          variant="h4"
          color="primary"
          sx={{ textAlign: 'center', fontWeight: 'bold' }}
        />
      </Box>

      {/* Learning Journey */}
      <Box sx={{ mt: 6 }}>
        <FadeInText
          text={aboutData.learning_journey.description}
          delay={4500}
          variant="h5"
          color="text.primary"
          sx={{ mb: 3, textAlign: 'center' }}
        />
        
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {aboutData.learning_journey.methods.map((method, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FadeInText
                text={method}
                delay={5000 + (index * 200)}
                variant="body1"
                sx={{
                  p: 2,
                  backgroundColor: 'primary.main',
                  color: 'white',
                  borderRadius: '10px',
                  textAlign: 'center',
                  fontWeight: 'medium'
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Personal Info */}
      <Box sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: '20px' }}>
          <FadeInText
            text={`אני מאריאנה, אמא ל${aboutData.personal_info.children.join(', ')}. נשואה לעופר, גרה ב${aboutData.personal_info.location}.`}
            delay={6000}
            variant="h6"
            color="text.primary"
            sx={{ mb: 3, textAlign: isRTL ? 'right' : 'left', lineHeight: 1.8 }}
          />
          
          <FadeInText
            text={aboutData.personal_info.experience}
            delay={6500}
            variant="body1"
            sx={{ mb: 3, textAlign: isRTL ? 'right' : 'left', lineHeight: 1.8 }}
          />
          
          <PulseText
            text={aboutData.message}
            delay={7000}
            variant="h5"
            color="primary"
            sx={{ textAlign: 'center', fontWeight: 'medium', fontStyle: 'italic' }}
          />
        </Paper>
      </Box>

      {/* Credentials Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom textAlign="center" color="primary" sx={{ mb: 6 }}>
          {t('about.credentials.title')}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: '20px',
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Award size={48} color="#4CAF50" />
              <Typography variant="h6" sx={{ mt: 2, mb: 2, color: 'primary.main' }}>
                {t('about.credentials.certified.title')}
              </Typography>
              <Typography>
                {t('about.credentials.certified.description')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: '20px',
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Heart size={48} color="#4CAF50" />
              <Typography variant="h6" sx={{ mt: 2, mb: 2, color: 'primary.main' }}>
                {t('about.credentials.passionate.title')}
              </Typography>
              <Typography>
                {t('about.credentials.passionate.description')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: '20px',
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Users size={48} color="#4CAF50" />
              <Typography variant="h6" sx={{ mt: 2, mb: 2, color: 'primary.main' }}>
                {t('about.credentials.community.title')}
              </Typography>
              <Typography>
                {t('about.credentials.community.description')}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};