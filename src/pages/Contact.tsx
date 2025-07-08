import React from 'react';
import { Container, Typography, Box, Grid, Paper, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { DebugTooltip } from '../components/Debug/DebugTooltip';

export const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  return (
    <Container maxWidth="md" sx={{ py: 8 }} dir={isRTL ? 'rtl' : 'ltr'}>
      <DebugTooltip jsonPath="contact.title (i18n)">
        <Typography variant="h2" gutterBottom color="primary" textAlign="center" sx={{ mb: 6 }}>
          {t('contact.title')}
        </Typography>
      </DebugTooltip>

      <Paper elevation={3} sx={{ p: 4, borderRadius: '20px' }}>
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
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
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
              </Box>
            </DebugTooltip>
    </Container>
  );
};