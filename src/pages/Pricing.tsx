import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Check, Clock, Users, MapPin, Video, Phone } from 'lucide-react';
import { FadeInText } from '../components/Animations/FadeInText';
import { ZoomableImage } from '../components/UI/ZoomableImage';

export const Pricing = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  const privateServices = [
    {
      title: 'ייעוץ אישי בהנקה',
      description: 'ייעוץ פרטי ואישי בבית הלקוחה או במרפאה',
      icon: <Users size={24} color="#4CAF50" />,
      features: ['ביקור בית אישי', 'הערכה מקיפה', 'תוכנית טיפול מותאמת', 'מעקב טלפוני']
    },
    {
      title: 'הכנה ללידה פרטית',
      description: 'קורס פרטי מותאם אישית לזוג',
      icon: <MapPin size={24} color="#4CAF50" />,
      features: ['מפגשים בבית הלקוחה', 'תוכן מותאם אישית', 'גמישות בזמנים', 'תמיכה אישית']
    },
    {
      title: 'ליווי וירטואלי',
      description: 'ייעוץ והדרכה באמצעות וידאו קול',
      icon: <Video size={24} color="#4CAF50" />,
      features: ['פגישות זום', 'גמישות בזמנים', 'הקלטות למעקב', 'תמיכה בווטסאפ']
    },
    {
      title: 'ייעוץ טלפוני חירום',
      description: 'זמינות לייעוץ מיידי בשעות קריטיות',
      icon: <Phone size={24} color="#4CAF50" />,
      features: ['זמינות 24/7', 'מענה מיידי', 'ייעוץ מקצועי', 'הפניה לטיפול נוסף']
    },
    {
      title: 'סדנאות קבוצתיות',
      description: 'סדנאות מיוחדות לקבוצות קטנות',
      icon: <Clock size={24} color="#4CAF50" />,
      features: ['קבוצות של 4-6 זוגות', 'אווירה אינטימית', 'שיתוף חוויות', 'מחיר מוזל']
    }
  ];

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
        <ZoomableImage
          src="https://raw.githubusercontent.com/ofer-shaham/hypnobirthing4/d5b272e4ad8c610dae7a9d05a06a8db6da17e75a/src/img/prices.jpg"
          alt="מחירון שירותים"
          sx={{ maxWidth: 800, mx: 'auto' }}
        />
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

        {/* Private Services */}
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
              
              <Grid container spacing={2}>
                {privateServices.map((service, index) => (
                  <Grid item xs={12} key={index}>
                    <Paper
                      elevation={1}
                      sx={{
                        p: 2,
                        borderRadius: '15px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateX(5px)',
                          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        {service.icon}
                        <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold' }}>
                          {service.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {service.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {service.features.map((feature, idx) => (
                          <Typography
                            key={idx}
                            variant="caption"
                            sx={{
                              backgroundColor: 'rgba(76, 175, 80, 0.1)',
                              color: 'primary.main',
                              px: 1,
                              py: 0.5,
                              borderRadius: '10px',
                              fontSize: '0.7rem'
                            }}
                          >
                            {feature}
                          </Typography>
                        ))}
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          {t('pricing.notes.vat')}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          לפרטים נוספים על השירותים הפרטיים, אנא צרו קשר
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