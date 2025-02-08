import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom color="primary" textAlign="center">
        {t('pricing.title')}
      </Typography>
      <Typography variant="h5" textAlign="center" sx={{ mb: 6 }}>
        {t('pricing.subtitle')}
      </Typography>

      <Grid container spacing={4}>
        {/* Online Services */}
        <Grid item xs={12} md={6}>
          <Card
            elevation={3}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h4" component="h2" gutterBottom textAlign="center" color="primary">
                {t('pricing.online.title')}
              </Typography>
              <Typography variant="body1" textAlign="center" sx={{ mb: 3 }}>
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
              flexDirection: 'column'
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h4" component="h2" gutterBottom textAlign="center" color="primary">
                {t('pricing.inPerson.title')}
              </Typography>
              {/* Add in-person services when provided */}
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
  <Box sx={{ mb: 3 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h6">₪{price}</Typography>
    </Box>
    {description && (
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    )}
    {insurance && (
      <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
        <Check size={16} style={{ display: 'inline', marginRight: '4px' }} />
        {insurance}
      </Typography>
    )}
    {recommendation && (
      <Typography variant="body2" color="info.main">
        {recommendation}
      </Typography>
    )}
  </Box>
);