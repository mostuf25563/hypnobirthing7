import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

interface PulseTextProps {
  text: string;
  delay?: number;
  variant?: any;
  color?: string;
  sx?: any;
}

export const PulseText: React.FC<PulseTextProps> = ({
  text,
  delay = 0,
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
        animation: isVisible ? 'pulse 2s ease-in-out infinite' : 'none',
        '@keyframes pulse': {
          '0%': {
            transform: 'scale(1)',
            opacity: 1
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: 0.8
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1
          }
        },
        ...sx
      }}
    >
      {text}
    </Typography>
  );
};