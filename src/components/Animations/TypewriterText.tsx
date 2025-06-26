import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  variant?: any;
  color?: string;
  sx?: any;
  onComplete?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  delay = 0,
  variant = 'body1',
  color = 'inherit',
  sx = {},
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, started, onComplete]);

  return (
    <Typography
      variant={variant}
      color={color}
      sx={{
        minHeight: '1.5em',
        '&::after': {
          content: '"|"',
          animation: 'blink 1s infinite',
          '@keyframes blink': {
            '0%, 50%': { opacity: 1 },
            '51%, 100%': { opacity: 0 }
          }
        },
        ...sx
      }}
    >
      {displayText}
    </Typography>
  );
};