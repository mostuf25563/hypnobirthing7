import React from 'react';
import { Container, Typography, Box, Grid, TextField, Button, Paper, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

export const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Typography variant="h2" gutterBottom color="primary">
            {t('contact.title')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('contact.subtitle')}
          </Typography>
          <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label={t('contact.form.firstName')}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label={t('contact.form.lastName')}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={t('contact.form.email')}
                    required
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={t('contact.form.phone')}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={t('contact.form.message')}
                    multiline
                    rows={4}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    {t('contact.form.submit')}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={5}>
          <Box sx={{ mt: { xs: 4, md: 12 } }}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom color="primary">
                {t('contact.info.title')}
              </Typography>
              
              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Phone size={24} color="#4CAF50" />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1">
                      {t('contact.info.phone')}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Mail size={24} color="#4CAF50" />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1">
                      {t('contact.info.email')}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <MessageCircle size={24} color="#4CAF50" />
                  <Box sx={{ ml: 2 }}>
                    <Link
                      href={t('contact.info.whatsappLink')}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                        '&:hover': {
                          color: 'primary.main'
                        }
                      }}
                    >
                      <Typography variant="body1">
                        {t('contact.info.whatsapp')}
                      </Typography>
                    </Link>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <MapPin size={24} color="#4CAF50" />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1">
                      {t('contact.info.location')}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};