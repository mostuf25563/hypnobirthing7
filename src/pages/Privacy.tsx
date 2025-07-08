import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Shield, Eye, Lock, UserCheck, FileText, Mail } from 'lucide-react';

export const Privacy = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  const sections = [
    {
      icon: <Shield size={24} color="#D4A5A5" />,
      title: 'איסוף מידע',
      content: 'אנו אוספים מידע שאתם מספקים ביוזמתכם בלבד. לא נשמר מידע אישי באתר.'
    },
    {
      icon: <Eye size={24} color="#D4A5A5" />,
      title: 'שימוש במידע',
      content: 'המידע משמש אותנו רק לצורך מתן השירותים המבוקשים וליצירת קשר.'
    },
    {
      icon: <Lock size={24} color="#D4A5A5" />,
      title: 'הגנה על המידע',
      content: 'אנו נוקטים באמצעי אבטחה סטנדרטיים. המידע לא נשמר באתר.'
    },
    {
      icon: <UserCheck size={24} color="#D4A5A5" />,
      title: 'זכויותיכם',
      content: 'יש לכם זכות מלאה על המידע שלכם. ניתן לבקש מחיקה בכל עת.'
    },
    {
      icon: <FileText size={24} color="#D4A5A5" />,
      title: 'שיתוף מידע',
      content: 'אנו לא משתפים מידע אישי עם צדדים שלישיים.'
    },
    {
      icon: <Mail size={24} color="#D4A5A5" />,
      title: 'יצירת קשר',
      content: 'לשאלות: maryza1982@gmail.com או 052-620-5052'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} dir={isRTL ? 'rtl' : 'ltr'}>
      <Typography variant="h2" color="primary" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
        מדיניות פרטיות
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {sections.map((section, index) => (
          <Paper key={index} elevation={2} sx={{ p: 4, borderRadius: '16px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row', gap: 2, mb: 2 }}>
              {section.icon}
              <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                {section.title}
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ textAlign: isRTL ? 'right' : 'left', lineHeight: 1.6 }}>
              {section.content}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};