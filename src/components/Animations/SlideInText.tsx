import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

interface SlideInTextProps {
  texts: string[];
  interval?: number;
  delay?: number;
  variant?: any;
  color?: string;
  sx?: any;
}

export const SlideInText: React.FC<SlideInTextProps> = ({
  texts,
  interval = 3000,
  delay = 0,
  variant = 'body1',
  color = 'inherit',
  sx = {}
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval, isVisible]);

  return (
    <Box sx={{ position: 'relative', minHeight: '2em', ...sx }}>
      {texts.map((text, index) => (
        <Typography
          key={index}
          variant={variant}
          color={color}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            opacity: currentIndex === index ? 1 : 0,
            transform: currentIndex === index ? 'translateX(0)' : 'translateX(100px)',
            transition: 'all 0.8s ease-in-out',
          }}
        >
          {text}
        </Typography>
      ))}
    </Box>
  );
};