import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Check, Heart, Baby, Users } from 'lucide-react';
import { DebugTooltip } from '../components/Debug/DebugTooltip';

export const Pricing = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  const courses = [
    {
      title: 'קורס הכנה ללידה + הכנה להנקה',
      sessions: '3 מפגשים אישיים',
      price: '2500',
      insurance: 'קיים החזר מקופת החולים',
      icon: <Heart size={48} color="#D4A5A5" />
    },
    {
      title: 'הדרכת הנקה לאחר לידה + שפת דנסטן',
      sessions: '2 מפגשים',
      price: '450',
      icon: <Baby size={48} color="#D4A5A5" />
    },
    {
      title: 'סדנת עיסוי תינוקות',
      sessions: '4 מפגשים קבוצתיים',
      price: '400',
      icon: <Users size={48} color="#D4A5A5" />
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} dir={isRTL ? 'rtl' : 'ltr'}>
      <DebugTooltip jsonPath="pricing.title (i18n)">
        <Typography
          variant="h2"
          color="primary"
          sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}
        >
          {t('pricing.title')}
        </Typography>
      </DebugTooltip>
      
      <DebugTooltip jsonPath="pricing.subtitle (i18n)">
        <Typography
          variant="h5"
          sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}
        >
          {t('pricing.subtitle')}
        </Typography>
      </DebugTooltip>

      <Grid container spacing={4} justifyContent="center">
        {courses.map((course, index) => (
          <Grid item xs={12} md={4} key={index}>
            <DebugTooltip jsonPath={`courses[${index}] (static data)`}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '20px',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4, textAlign: 'center' }}>
                  <Box sx={{ mb: 3 }}>
                    {course.icon}
                  </Box>
                  
                  <Typography variant="h5" component="h2" gutterBottom color="primary" sx={{ fontWeight: 'bold', mb: 3 }}>
                    {course.title}
                  </Typography>
                  
                  <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary' }}>
                    {course.sessions}
                  </Typography>
                  
                  <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
                    ₪{course.price}
                  </Typography>
                  
                  {course.insurance && (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                      <Check size={20} color="#D4A5A5" style={{ marginLeft: isRTL ? 0 : 8, marginRight: isRTL ? 8 : 0 }} />
                      <Typography variant="body2" color="primary" sx={{ fontWeight: 'medium' }}>
                        {course.insurance}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </DebugTooltip>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <DebugTooltip jsonPath="pricing.notes.vat (i18n)">
          <Typography variant="body1" color="text.secondary">
            {t('pricing.notes.vat')}
          </Typography>
        </DebugTooltip>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          לפרטים נוספים ולתיאום מפגש, אנא צרו קשר
        </Typography>
      </Box>
    </Container>
  );
};