import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button, List, ListItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Courses = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  const courses = [
    {
      title: t('courses.hypnobirthing.title'),
      description: t('courses.hypnobirthing.description'),
      image: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: t('courses.hypnobirthing.details', { returnObjects: true }) as string[]
    },
    {
      title: t('courses.breastfeeding.title'),
      description: t('courses.breastfeeding.description'),
      image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: t('courses.breastfeeding.details', { returnObjects: true }) as string[]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} dir={isRTL ? 'rtl' : 'ltr'}>
      <Typography variant="h2" gutterBottom color="primary" textAlign="center">
        {t('courses.title')}
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {courses.map((course, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card elevation={3}>
              <CardMedia
                component="img"
                height="300"
                image={course.image}
                alt={course.title}
                sx={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              <CardContent>
                <Typography variant="h4" gutterBottom color="primary" textAlign={isRTL ? 'right' : 'left'}>
                  {course.title}
                </Typography>
                <Typography variant="body1" paragraph textAlign={isRTL ? 'right' : 'left'}>
                  {course.description}
                </Typography>
                <List sx={{ pl: isRTL ? 0 : 2, pr: isRTL ? 2 : 0 }}>
                  {Array.isArray(course.details) && course.details.map((detail, idx) => (
                    <ListItem key={idx} sx={{ display: 'list-item', textAlign: isRTL ? 'right' : 'left' }}>
                      <Typography>
                        {detail}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ mt: 2 }}
                  href="/contact"
                >
                  {t('courses.enrollButton')}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};