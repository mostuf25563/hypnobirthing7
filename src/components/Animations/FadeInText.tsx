import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

interface FadeInTextProps {
  text: string;
  delay?: number;
  duration?: number;
  variant?: any;
  color?: string;
  sx?: any;
}

export const FadeInText: React.FC<FadeInTextProps> = ({
  text,
  delay = 0,
  duration = 1000,
  variant = 'body1',
  color = 'inherit',
  sx = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Typography
      variant={variant}
      color={color}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all ${duration}ms ease-in-out`,
        ...sx
      }}
    >
      {text}
    </Typography>
  );
};