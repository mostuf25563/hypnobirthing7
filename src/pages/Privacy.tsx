import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Shield, Eye, Lock, UserCheck, FileText, Mail } from 'lucide-react';

export const Privacy = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  const sections = [
    {
      icon: <Shield size={24} color="#D4A5A5" />,
      title: 'איסוף מידע',
      content: [
        'אנו אוספים מידע אישי שאתם מספקים לנו ביוזמתכם, כגון שם, כתובת אימייל, מספר טלפון ופרטי קשר נוספים.',
        'מידע זה נאסף כאשר אתם יוצרים קשר איתנו, נרשמים לקורסים או משתמשים בשירותים שלנו.',
        'אנו עשויים לאסוף גם מידע טכני כגון כתובת IP, סוג דפדפן ומידע על השימוש באתר.'
      ]
    },
    {
      icon: <Eye size={24} color="#D4A5A5" />,
      title: 'שימוש במידע',
      content: [
        'המידע האישי שלכם משמש אותנו לצורך מתן השירותים המבוקשים.',
        'ליצירת קשר איתכם בנוגע לקורסים, ייעוצים ושירותים נוספים.',
        'לשיפור השירותים שלנו ולהתאמתם לצרכיכם.',
        'לשליחת עדכונים ומידע רלוונטי (רק עם הסכמתכם המפורשת).'
      ]
    },
    {
      icon: <Lock size={24} color="#D4A5A5" />,
      title: 'הגנה על המידע',
      content: [
        'אנו נוקטים באמצעי אבטחה מתקדמים להגנה על המידע האישי שלכם.',
        'המידע מאוחסן בשרתים מאובטחים ומוגנים בהצפנה.',
        'רק אנשי צוות מורשים יכולים לגשת למידע האישי שלכם.',
        'אנו מבצעים עדכוני אבטחה שוטפים כדי להבטיח הגנה מיטבית.'
      ]
    },
    {
      icon: <UserCheck size={24} color="#D4A5A5" />,
      title: 'זכויותיכם',
      content: [
        'זכות לדעת איזה מידע אישי אנו מחזיקים עליכם.',
        'זכות לבקש תיקון או עדכון של המידע האישי שלכם.',
        'זכות לבקש מחיקת המידע האישי שלכם.',
        'זכות להתנגד לעיבוד המידע או להגביל אותו.',
        'זכות לקבל העתק של המידע האישי שלכם.'
      ]
    },
    {
      icon: <FileText size={24} color="#D4A5A5" />,
      title: 'שיתוף מידע עם צדדים שלישיים',
      content: [
        'אנו לא מוכרים, משכירים או מעבירים את המידע האישי שלכם לצדדים שלישיים.',
        'מידע עשוי להיות משותף רק במקרים הבאים:',
        '• עם ספקי שירות מורשים הפועלים מטעמנו (תחת הסכמי סודיות)',
        '• כאשר נדרש על פי חוק או צו בית משפט',
        '• להגנה על הזכויות, הרכוש או הבטיחות שלנו או של אחרים'
      ]
    },
    {
      icon: <Mail size={24} color="#D4A5A5" />,
      title: 'יצירת קשר',
      content: [
        'לכל שאלה או בקשה בנוגע למדיניות הפרטיות, ניתן לפנות אלינו:',
        'אימייל: maryza1982@gmail.com',
        'טלפון: 052-620-5052',
        'אנו מתחייבים לענות על פניותיכם תוך 30 יום.'
      ]
    }
  ];

  return (
    <Box sx={{ backgroundColor: 'rgba(212, 165, 165, 0.02)', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg" dir={isRTL ? 'rtl' : 'ltr'}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            color="primary" 
            sx={{ 
              fontWeight: 'bold',
              mb: 3,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            מדיניות פרטיות
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              fontWeight: 300
            }}
          >
            אנו מתחייבים להגן על הפרטיות שלכם ולשמור על המידע האישי שלכם בצורה אחראית ובטוחה
          </Typography>
          
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ mt: 2 }}
          >
            עדכון אחרון: ינואר 2025
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {sections.map((section, index) => (
            <Paper 
              key={index}
              elevation={3} 
              sx={{ 
                p: 6, 
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
                  gap: 3,
                  mb: 4
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
                  {section.icon}
                </Box>
                
                <Typography 
                  variant="h4" 
                  color="primary" 
                  sx={{ fontWeight: 'bold' }}
                >
                  {section.title}
                </Typography>
              </Box>
              
              <List sx={{ pl: isRTL ? 0 : 2, pr: isRTL ? 2 : 0 }}>
                {section.content.map((item, itemIndex) => (
                  <ListItem key={itemIndex} sx={{ px: 0, py: 1 }}>
                    <ListItemText
                      primary={
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            textAlign: isRTL ? 'right' : 'left',
                            lineHeight: 1.7,
                            color: 'text.primary'
                          }}
                        >
                          {item}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          ))}
        </Box>

        {/* Footer Note */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            mt: 6,
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(212, 165, 165, 0.1) 0%, rgba(212, 165, 165, 0.05) 100%)',
            border: '1px solid rgba(212, 165, 165, 0.2)',
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.6,
              color: 'text.primary',
              mb: 2
            }}
          >
            מדיניות פרטיות זו עשויה להתעדכן מעת לעת. שינויים מהותיים יובאו לידיעתכם באמצעות האתר או בדרכי קשר אחרות.
          </Typography>
          
          <Typography 
            variant="body2" 
            color="text.secondary"
          >
            המשך השימוש באתר לאחר פרסום שינויים מהווה הסכמה למדיניות המעודכנת.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};