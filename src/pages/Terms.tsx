import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FileText, AlertCircle, Users, CreditCard, Shield, Phone } from 'lucide-react';

export const Terms = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  const sections = [
    {
      icon: <FileText size={24} color="#D4A5A5" />,
      title: 'הגדרות כלליות',
      content: [
        'תנאי שירות אלה חלים על כל השירותים הניתנים על ידי מאריאנה שחם.',
        'השירותים כוללים: הכנה ללידה, הדרכת הנקה, שפת דנסטן, עיסוי תינוקות וייעוץ אישי.',
        'השימוש בשירותים מהווה הסכמה מלאה לתנאים אלה.',
        'תנאים אלה עשויים להתעדכן מעת לעת, והגרסה המעודכנת תפורסם באתר.'
      ]
    },
    {
      icon: <Users size={24} color="#D4A5A5" />,
      title: 'השירותים הניתנים',
      content: [
        'קורסי הכנה ללידה - 3 מפגשים אישיים הכוללים הכנה פיזית ונפשית ללידה.',
        'הדרכת הנקה - ליווי מקצועי לאחר הלידה כולל שפת דנסטן לזיהוי צרכי התינוק.',
        'סדנאות עיסוי תינוקות - 4 מפגשים קבוצתיים ללימוד טכניקות עיסוי.',
        'ייעוץ אישי - מפגשים פרטיים המותאמים לצרכים האישיים.',
        'כל השירותים ניתנים על ידי מאריאנה שחם, מדריכת לידה ויועצת הנקה מוסמכת.'
      ]
    },
    {
      icon: <CreditCard size={24} color="#D4A5A5" />,
      title: 'תשלומים והחזרים',
      content: [
        'התשלום עבור השירותים יבוצע מראש, לפני תחילת הקורס או הייעוץ.',
        'ניתן לשלם במזומן, בהעברה בנקאית או בכרטיס אשראי.',
        'במקרה של ביטול עד 48 שעות לפני המפגש - החזר מלא.',
        'ביטול בין 24-48 שעות לפני המפגש - החזר של 50%.',
        'ביטול פחות מ-24 שעות לפני המפגש - ללא החזר.',
        'במקרים מיוחדים (מחלה, לידה מוקדמת) ניתן לתאם פתרון אישי.'
      ]
    },
    {
      icon: <AlertCircle size={24} color="#D4A5A5" />,
      title: 'אחריות והגבלות',
      content: [
        'השירותים ניתנים למטרות חינוכיות והדרכה בלבד.',
        'המידע והייעוץ אינם מהווים תחליף לייעוץ רפואי מקצועי.',
        'מומלץ להתייעץ עם רופא לפני השתתפות בקורסים או יישום ההמלצות.',
        'מאריאנה שחם אינה נושאת באחריות לתוצאות הלידה או בעיות רפואיות.',
        'המשתתפים אחראים לבריאותם ולהחלטותיהם הרפואיות.',
        'בכל מקרה של ספק או בעיה רפואית, יש לפנות מיד לגורם רפואי מוסמך.'
      ]
    },
    {
      icon: <Shield size={24} color="#D4A5A5" />,
      title: 'סודיות ופרטיות',
      content: [
        'כל המידע האישי והרפואי שיישתף במהלך השירותים יישמר בסודיות מוחלטת.',
        'המידע לא יועבר לצדדים שלישיים ללא הסכמה מפורשת.',
        'ניתן לבקש מחיקת המידע האישי בכל עת.',
        'במקרים חריגים בהם קיים חשש לבטיחות, ייתכן שיהיה צורך לפנות לגורמים מקצועיים.',
        'השימוש במידע מוגבל למטרות מתן השירות בלבד.'
      ]
    },
    {
      icon: <Phone size={24} color="#D4A5A5" />,
      title: 'יצירת קשר ופתרון סכסוכים',
      content: [
        'לכל שאלה או בעיה, ניתן לפנות ישירות למאריאנה שחם.',
        'דרכי קשר: טלפון 052-620-5052, אימייל maryza1982@gmail.com',
        'נעשה כל מאמץ לפתור בעיות בדרך של דיאלוג ופשרה.',
        'במקרה של סכסוך שלא ניתן לפתרון, הסמכות נתונה לבתי המשפט בישראל.',
        'החוק הישראלי חל על תנאי שירות אלה.',
        'כל שינוי בתנאים יעשה בכתב ויפורסם באתר.'
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
            תנאי שירות
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
            תנאי השירות מגדירים את הזכויות והחובות של כל הצדדים ומבטיחים שירות מקצועי ואמין
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

        {/* Important Notice */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            mt: 6,
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 193, 7, 0.05) 100%)',
            border: '1px solid rgba(255, 193, 7, 0.2)',
            textAlign: 'center'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <AlertCircle size={24} color="#ff9800" />
            <Typography 
              variant="h6" 
              color="#ff9800"
              sx={{ ml: isRTL ? 0 : 1, mr: isRTL ? 1 : 0, fontWeight: 'bold' }}
            >
              הודעה חשובה
            </Typography>
          </Box>
          
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.6,
              color: 'text.primary',
              mb: 2
            }}
          >
            השירותים הניתנים מיועדים לתמיכה והדרכה בלבד ואינם מהווים תחליף לטיפול רפואי מקצועי. 
            בכל מקרה של ספק או בעיה רפואית, יש לפנות מיד לרופא או לגורם רפואי מוסמך.
          </Typography>
          
          <Typography 
            variant="body2" 
            color="text.secondary"
          >
            השימוש בשירותים מהווה הסכמה לתנאים אלה ולמדיניות הפרטיות.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};