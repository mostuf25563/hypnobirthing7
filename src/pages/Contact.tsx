import React from 'react';
import { Container, Typography, Box, Grid, Paper, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MessageCircle, MapPin, Instagram, Users } from 'lucide-react';
import { DebugTooltip } from '../components/Debug/DebugTooltip';

export const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} dir={isRTL ? 'rtl' : 'ltr'}>
      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} md={8}>
          <DebugTooltip jsonPath="contact.title (i18n)">
            <Typography variant="h2" gutterBottom color="primary" textAlign="center">
              {t('contact.title')}
            </Typography>
          </DebugTooltip>
          
          <DebugTooltip jsonPath="contact.subtitle (i18n)">
            <Typography variant="body1" paragraph textAlign="center" sx={{ mb: 6 }}>
              {t('contact.subtitle')}
            </Typography>
          </DebugTooltip>

          <Paper elevation={3} sx={{ p: 4, borderRadius: '20px' }}>
            <DebugTooltip jsonPath="contact.info.title (i18n)">
              <Typography variant="h4" gutterBottom color="primary" textAlign="center" sx={{ mb: 4 }}>
                {t('contact.info.title')}
              </Typography>
            </DebugTooltip>
            
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <DebugTooltip jsonPath="contact info - phone (static)">
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                    <Phone size={24} color="#D4A5A5" />
                    <Box sx={{ ml: isRTL ? 0 : 2, mr: isRTL ? 2 : 0 }}>
                      <Link href="tel:0526205052" sx={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="body1">
                          052-620-5052
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </DebugTooltip>

                <DebugTooltip jsonPath="contact info - email (static)">
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                    <Mail size={24} color="#D4A5A5" />
                    <Box sx={{ ml: isRTL ? 0 : 2, mr: isRTL ? 2 : 0 }}>
                      <Link href="mailto:maryza1982@gmail.com" sx={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="body1">
                          maryza1982@gmail.com
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </DebugTooltip>

                <DebugTooltip jsonPath="contact info - whatsapp (static)">
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                    <MessageCircle size={24} color="#D4A5A5" />
                    <Box sx={{ ml: isRTL ? 0 : 2, mr: isRTL ? 2 : 0 }}>
                      <Link
                        href="https://chatwith.io/s/mariana-shaham"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <Typography variant="body1">
                          WhatsApp Chat
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </DebugTooltip>

                <DebugTooltip jsonPath="contact.info.location (i18n)">
                  <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                    <MapPin size={24} color="#D4A5A5" />
                    <Box sx={{ ml: isRTL ? 0 : 2, mr: isRTL ? 2 : 0 }}>
                      <Typography variant="body1">
                        {t('contact.info.location')}
                      </Typography>
                    </Box>
                  </Box>
                </DebugTooltip>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom color="primary" textAlign={isRTL ? 'right' : 'left'}>
                  עקבו אחריי
                </Typography>
                
                <DebugTooltip jsonPath="social links - instagram (static)">
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                    <Instagram size={24} color="#D4A5A5" />
                    <Box sx={{ ml: isRTL ? 0 : 2, mr: isRTL ? 2 : 0 }}>
                      <Link
                        href="https://www.instagram.com/mariana.shaham/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <Typography variant="body1">
                          Instagram
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </DebugTooltip>

                <DebugTooltip jsonPath="social links - professional association (static)">
                  <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                    <Users size={24} color="#D4A5A5" />
                    <Box sx={{ ml: isRTL ? 0 : 2, mr: isRTL ? 2 : 0 }}>
                      <Link
                        href="https://ialp.org.il/counselors/%D7%9E%D7%90%D7%A8%D7%99%D7%90%D7%A0%D7%94-%D7%A9%D7%97%D7%9D/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <Typography variant="body1">
                          האיגוד הישראלי למקצועות ההנקה
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </DebugTooltip>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};