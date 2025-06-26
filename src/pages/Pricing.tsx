import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { FadeInText } from '../components/Animations/FadeInText';

export const Pricing = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} dir={isRTL ? 'rtl' : 'ltr'}>
      <FadeInText
        text={t('pricing.title')}
        variant="h2"
        color="primary"
        sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}
      />
      
      <FadeInText
        text={t('pricing.subtitle')}
        delay={500}
        variant="h5"
        sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}
      />

      {/* Pricing Image */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Card
          elevation={5}
          sx={{
            maxWidth: 800,
            mx: 'auto',
            borderRadius: '20px',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
            }
          }}
        >
          <CardMedia
            component="img"
            image="/src/img/prices.jpg"
            alt="מחירון שירותים"
            sx={{
              height: 'auto',
              maxHeight: 600,
              objectFit: 'contain'
            }}
          />
        </Card>
      </Box>

      <Grid container spacing={4}>
        {/* Online Services */}
        <Grid item xs={12} md={6}>
          <Card
            elevation={3}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '20px',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
              }
            }}
          >
            <CardContent sx={{ flexGrow: 1, p: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom textAlign="center" color="primary" sx={{ fontWeight: 'bold' }}>
                {t('pricing.online.title')}
              </Typography>
              <Typography variant="body1" textAlign="center" sx={{ mb: 3, color: 'text.secondary' }}>
                {t('pricing.online.description')}
              </Typography>

              {/* Online Services List */}
              <Box sx={{ mb: 3 }}>
                <PriceItem
                  title={t('pricing.online.services.breastfeedingPrep.title')}
                  price={t('pricing.online.services.breastfeedingPrep.price')}
                />
                <PriceItem
                  title={t('pricing.online.services.breastfeedingConsult.title')}
                  price={t('pricing.online.services.breastfeedingConsult.price')}
                />
                <PriceItem
                  title={t('pricing.online.services.breastfeedingEnd.title')}
                  price={t('pricing.online.services.breastfeedingEnd.price')}
                />
                <PriceItem
                  title={t('pricing.online.services.gentleBirth.title')}
                  price={t('pricing.online.services.gentleBirth.price')}
                  description={t('pricing.online.services.gentleBirth.description')}
                  insurance={t('pricing.online.services.gentleBirth.insurance')}
                  recommendation={t('pricing.online.services.gentleBirth.recommendation')}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* In-Person Services */}
        <Grid item xs={12} md={6}>
          <Card
            elevation={3}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '20px',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
              }
            }}
          >
            <CardContent sx={{ flexGrow: 1, p: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom textAlign="center" color="primary" sx={{ fontWeight: 'bold' }}>
                {t('pricing.inPerson.title')}
              </Typography>
              <Typography variant="body1" textAlign="center" sx={{ color: 'text.secondary' }}>
                פרטים נוספים יתווספו בקרוב
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          {t('pricing.notes.vat')}
        </Typography>
      </Box>
    </Container>
  );
};

interface PriceItemProps {
  title: string;
  price: string;
  description?: string;
  insurance?: string;
  recommendation?: string;
}

const PriceItem: React.FC<PriceItemProps> = ({ title, price, description, insurance, recommendation }) => (
  <Box 
    sx={{ 
      mb: 3, 
      p: 2, 
      borderRadius: '10px',
      backgroundColor: 'rgba(76, 175, 80, 0.05)',
      border: '1px solid rgba(76, 175, 80, 0.2)',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        transform: 'translateX(5px)'
      }
    }}
  >
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{title}</Typography>
      <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>₪{price}</Typography>
    </Box>
    {description && (
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {description}
      </Typography>
    )}
    {insurance && (
      <Typography variant="body2" color="success.main" sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
        <Check size={16} style={{ marginLeft: '4px' }} />
        {insurance}
      </Typography>
    )}
    {recommendation && (
      <Typography variant="body2" color="info.main" sx={{ fontStyle: 'italic' }}>
        {recommendation}
      </Typography>
    )}
  </Box>
);