import React from 'react';
import { Container, Typography, Box, Grid, Avatar, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Award, Heart, Users } from 'lucide-react';
import { DebugTooltip } from '../components/Debug/DebugTooltip';

export const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} dir={isRTL ? 'rtl' : 'ltr'}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', textAlign: 'center' }}>
            <Avatar
              src="https://raw.githubusercontent.com/ofer-shaham/hypnobirthing4/refs/heads/main/src/img/profile.jpg"
              sx={{
                width: { xs: 250, md: 350 },
                height: { xs: 250, md: 350 },
                mx: 'auto',
                mb: 3,
                border: '5px solid',
                borderColor: 'primary.main',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.3)'
                }
              }}
            />
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: isRTL ? 'right' : 'left' }}>
            <DebugTooltip jsonPath="about_self.json > text (paragraph 1)">
              <Typography variant="h2" color="primary" sx={{ mb: 3, fontWeight: 'bold' }}>
                היי, אני מאריאנה שחם.
              </Typography>
            </DebugTooltip>
            
            <DebugTooltip jsonPath="about_self.json > text (paragraph 2)">
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                המסע שלי התחיל בלידה הראשונה שלי – לידה קשה, כואבת, מבלבלת. הייתי מלאה בחוסר ידע, לא הבנתי מהן הזכויות שלי בלידה, ומה הגוף שלי באמת מסוגל לעשות.
              </Typography>
            </DebugTooltip>
            
            <DebugTooltip jsonPath="about_self.json > text (paragraph 3)">
              <Typography variant="h6" color="primary" sx={{ mb: 3, fontWeight: 'bold' }}>
                אבל בלב שלי ידעתי דבר אחד – שזה לא חייב להיות ככה.
              </Typography>
            </DebugTooltip>
            
            <DebugTooltip jsonPath="about_self.json > text (paragraph 4)">
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                אז לקראת הלידה השנייה שלי החלטתי – הפעם אני לוקחת את המושכות.
              </Typography>
            </DebugTooltip>
            
            <DebugTooltip jsonPath="about_self.json > text (paragraph 5)">
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                וככה זה היה גם בלידה השלישית והרביעית שלי – לידות עוצמתיות, מחוברות, מלאות ביטחון. הרגשתי שאני מנצחת על הלידה שלי. ידעתי למה אני מסוגלת.
              </Typography>
            </DebugTooltip>
            
            <DebugTooltip jsonPath="about_self.json > text (paragraph 6)">
              <Typography variant="body1" color="primary" sx={{ mb: 3, fontWeight: 'medium', lineHeight: 1.8 }}>
                כשהבנתי כמה עוצמה יש בדרך הזו – הפנימית, הנשית, המודעת – הבנתי שזו השליחות שלי: להעביר את זה הלאה. שכל אישה תדע – שגם היא יכולה ללדת אחרת.
              </Typography>
            </DebugTooltip>
          </Box>
        </Grid>
      </Grid>

      {/* Learning Journey */}
      <Box sx={{ mt: 8, p: 4, backgroundColor: 'rgba(212, 165, 165, 0.05)', borderRadius: '20px' }}>
        <DebugTooltip jsonPath="about_self.json > text (paragraph 7)">
          <Typography variant="h5" color="text.primary" sx={{ mb: 3, textAlign: 'center', lineHeight: 1.6 }}>
            אז יצאתי למסע למידה מעמיק – הדרכת לידה, הדרכת הנקה, שפת דנסטן ועיסוי התינוק, היפנובירת'ינג, תטא הילינג – כל מה שיכול לעזור לי בבית, אבל בעיקר – לעזור לנשים אחרות.
          </Typography>
        </DebugTooltip>
      </Box>

      {/* Personal Info */}
      <Box sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: '20px' }}>
          <DebugTooltip jsonPath="about_self.json > text (paragraph 8)">
            <Typography variant="h6" color="text.primary" sx={{ mb: 3, textAlign: isRTL ? 'right' : 'left', lineHeight: 1.8 }}>
              אני מאריאנה, אמא לאֵלָה, אוֹר, אביב ומִילָה. נשואה לעופר, גרה בקיבוץ נען.
            </Typography>
          </DebugTooltip>
          
          <DebugTooltip jsonPath="about_self.json > text (paragraph 9)">
            <Typography variant="body1" sx={{ mb: 3, textAlign: isRTL ? 'right' : 'left', lineHeight: 1.8 }}>
              אני מביאה איתי ניסיון אישי עמוק מכל סוגי הלידות שחוויתי – יחד עם כלים, ידע ודרך שמאפשרת לכל אישה לעבור את ההריון, הלידה וההורות – מתוך עוצמה, בחירה ואהבה.
            </Typography>
          </DebugTooltip>
          
          <DebugTooltip jsonPath="about_self.json > text (paragraph 10)">
            <Typography variant="h5" color="primary" sx={{ textAlign: 'center', fontWeight: 'medium', fontStyle: 'italic' }}>
              אם את בתחילת הדרך – או כבר בדרך – אני כאן להזכיר לך: הגוף שלך יודע. את יודעת. ואני כאן ללכת איתך יד ביד, באהבה.
            </Typography>
          </DebugTooltip>
        </Paper>
      </Box>
    </Container>
  );
};