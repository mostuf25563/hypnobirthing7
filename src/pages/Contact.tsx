import React from 'react';
import { Container, Typography, Box, Grid, Paper, Link, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MessageCircle, MapPin, Instagram, Users, Clock, Calendar } from 'lucide-react';
import { DebugTooltip } from '../components/Debug/DebugTooltip';

export const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  const contactMethods = [
    {
      icon: <Phone size={28} color="#D4A5A5" />,
      title: 'טלפון',
      value: '052-620-5052',
      link: 'tel:0526205052',
      description: 'זמין לשיחות בין השעות 9:00-20:00'
    },
    {
      icon: <Mail size={28} color="#D4A5A5" />,
      title: 'אימייל',
      value: 'maryza1982@gmail.com',
      link: 'mailto:maryza1982@gmail.com',
      description: 'מענה תוך 24 שעות'
    },
    {
      icon: <MessageCircle size={28} color="#D4A5A5" />,
      title: 'WhatsApp',
      value: 'צ\'אט מקוון',
      link: 'https://chatwith.io/s/mariana-shaham',
      description: 'מענה מהיר ונוח'
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram size={24} color="#D4A5A5" />,
      title: 'Instagram',
      handle: '@mariana.shaham',
      link: 'https://www.instagram.com/mariana.shaham/',
      description: 'עדכונים, טיפים ותכנים מועילים'
    },
    {
      icon: <Users size={24} color="#D4A5A5" />,
      title: 'האיגוד הישראלי למקצועות ההנקה',
      handle: 'פרופיל מקצועי',
      link: 'https://ialp.org.il/counselors/%D7%9E%D7%90%D7%A8%D7%99%D7%90%D7%A0%D7%94-%D7%A9%D7%97%D7%9D/',
      description: 'אישור מקצועי ואמינות'
    }
  ];

  return (
    <Box sx={{ backgroundColor: 'rgba(212, 165, 165, 0.02)', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <DebugTooltip jsonPath="contact.title (i18n)">
            <Typography 
              variant="h2" 
              color="primary" 
              sx={{ 
                fontWeight: 'bold',
                mb: 3,
                fontSize: { xs: '2rem', md: '3rem' }
              }}
            >
              {t('contact.title')}
            </Typography>
          </DebugTooltip>
          
          <DebugTooltip jsonPath="contact.subtitle (i18n)">
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
                fontWeight: 300
              }}
            >
              {t('contact.subtitle')}
            </Typography>
          </DebugTooltip>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Methods */}
          <Grid item xs={12} lg={8}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 6, 
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
                border: '1px solid rgba(212, 165, 165, 0.1)'
              }}
            >
              <Typography 
                variant="h4" 
                color="primary" 
                sx={{ 
                  mb: 5,
                  fontWeight: 'bold',
                  textAlign: isRTL ? 'right' : 'left'
                }}
              >
                דרכי התקשרות
              </Typography>
              
              <Grid container spacing={4}>
                {contactMethods.map((method, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Box
                      sx={{
                        p: 4,
                        borderRadius: '16px',
                        backgroundColor: 'rgba(212, 165, 165, 0.05)',
                        border: '1px solid rgba(212, 165, 165, 0.1)',
                        transition: 'all 0.3s ease',
                        height: '100%',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 25px rgba(212, 165, 165, 0.15)',
                          backgroundColor: 'rgba(212, 165, 165, 0.08)'
                        }
                      }}
                    >
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start',
                          flexDirection: isRTL ? 'row-reverse' : 'row',
                          gap: 3
                        }}
                      >
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: '12px',
                            backgroundColor: 'rgba(212, 165, 165, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: '56px',
                            height: '56px'
                          }}
                        >
                          {method.icon}
                        </Box>
                        
                        <Box sx={{ flex: 1, textAlign: isRTL ? 'right' : 'left' }}>
                          <Typography 
                            variant="h6" 
                            color="primary" 
                            sx={{ 
                              fontWeight: 'bold',
                              mb: 1
                            }}
                          >
                            {method.title}
                          </Typography>
                          
                          <Link 
                            href={method.link}
                            target={method.link.startsWith('http') ? '_blank' : undefined}
                            rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            sx={{ 
                              textDecoration: 'none',
                              color: 'text.primary',
                              fontWeight: 'medium',
                              fontSize: '1.1rem',
                              '&:hover': {
                                color: 'primary.main'
                              }
                            }}
                          >
                            {method.value}
                          </Link>
                          
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ mt: 1, lineHeight: 1.5 }}
                          >
                            {method.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Divider sx={{ my: 5, backgroundColor: 'rgba(212, 165, 165, 0.2)' }} />

              {/* Location */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: isRTL ? 'row-reverse' : 'row',
                  gap: 3,
                  p: 3,
                  borderRadius: '16px',
                  backgroundColor: 'rgba(212, 165, 165, 0.05)'
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    borderRadius: '12px',
                    backgroundColor: 'rgba(212, 165, 165, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <MapPin size={28} color="#D4A5A5" />
                </Box>
                
                <Box sx={{ textAlign: isRTL ? 'right' : 'left' }}>
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                    מיקום
                  </Typography>
                  <DebugTooltip jsonPath="contact.info.location (i18n)">
                    <Typography variant="body1" color="text.primary">
                      {t('contact.info.location')}
                    </Typography>
                  </DebugTooltip>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Social Links & Additional Info */}
          <Grid item xs={12} lg={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {/* Social Media */}
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
                  border: '1px solid rgba(212, 165, 165, 0.1)'
                }}
              >
                <Typography 
                  variant="h5" 
                  color="primary" 
                  sx={{ 
                    mb: 4,
                    fontWeight: 'bold',
                    textAlign: isRTL ? 'right' : 'left'
                  }}
                >
                  עקבו אחריי
                </Typography>
                
                {socialLinks.map((social, index) => (
                  <Box key={index} sx={{ mb: index < socialLinks.length - 1 ? 4 : 0 }}>
                    <Link
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ textDecoration: 'none' }}
                    >
                      <Box
                        sx={{
                          p: 3,
                          borderRadius: '12px',
                          backgroundColor: 'rgba(212, 165, 165, 0.05)',
                          border: '1px solid rgba(212, 165, 165, 0.1)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(212, 165, 165, 0.1)',
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        <Box 
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            flexDirection: isRTL ? 'row-reverse' : 'row',
                            gap: 2,
                            mb: 1
                          }}
                        >
                          {social.icon}
                          <Typography 
                            variant="subtitle1" 
                            color="primary" 
                            sx={{ fontWeight: 'bold' }}
                          >
                            {social.title}
                          </Typography>
                        </Box>
                        
                        <Typography 
                          variant="body2" 
                          color="text.primary"
                          sx={{ 
                            mb: 0.5,
                            textAlign: isRTL ? 'right' : 'left',
                            fontWeight: 'medium'
                          }}
                        >
                          {social.handle}
                        </Typography>
                        
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ textAlign: isRTL ? 'right' : 'left' }}
                        >
                          {social.description}
                        </Typography>
                      </Box>
                    </Link>
                  </Box>
                ))}
              </Paper>

              {/* Office Hours */}
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
                  border: '1px solid rgba(212, 165, 165, 0.1)'
                }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    flexDirection: isRTL ? 'row-reverse' : 'row',
                    gap: 2,
                    mb: 3
                  }}
                >
                  <Clock size={24} color="#D4A5A5" />
                  <Typography 
                    variant="h6" 
                    color="primary" 
                    sx={{ fontWeight: 'bold' }}
                  >
                    שעות פעילות
                  </Typography>
                </Box>
                
                <Box sx={{ textAlign: isRTL ? 'right' : 'left' }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>ימים א׳-ה׳:</strong> 9:00-20:00
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>יום ו׳:</strong> 9:00-14:00
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    <strong>שבת:</strong> סגור
                  </Typography>
                </Box>
              </Paper>

              {/* Quick Note */}
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, rgba(212, 165, 165, 0.1) 0%, rgba(212, 165, 165, 0.05) 100%)',
                  border: '1px solid rgba(212, 165, 165, 0.2)'
                }}
              >
                <Typography 
                  variant="body1" 
                  sx={{ 
                    textAlign: isRTL ? 'right' : 'left',
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                    color: 'text.primary'
                  }}
                >
                  "אני כאן ללוות אתכן בכל שלב של המסע - מההריון ועד ההורות המוקדמת. אל תהססו לפנות בכל שאלה או בקשה לייעוץ."
                </Typography>
                
                <Typography 
                  variant="body2" 
                  color="primary" 
                  sx={{ 
                    mt: 2,
                    textAlign: isRTL ? 'right' : 'left',
                    fontWeight: 'bold'
                  }}
                >
                  - מאריאנה שחם
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};