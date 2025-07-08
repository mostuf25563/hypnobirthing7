import React, { useState } from 'react';
import { Tooltip, IconButton } from '@mui/material';
import { Bug } from 'lucide-react';

interface DebugTooltipProps {
  jsonPath: string;
  children: React.ReactNode;
}

export const DebugTooltip: React.FC<DebugTooltipProps> = ({ jsonPath, children }) => {
  const [debugMode, setDebugMode] = useState(false);

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        setDebugMode(!debugMode);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [debugMode]);

  if (!debugMode) {
    return <>{children}</>;
  }

  return (
    <Tooltip title={jsonPath} arrow>
      <span style={{ position: 'relative', border: '1px dashed #D4A5A5', padding: '2px' }}>
        {children}
      </span>
    </Tooltip>
  );
};

export const DebugToggle: React.FC = () => {
  const [debugMode, setDebugMode] = useState(false);

  const toggleDebug = () => {
    setDebugMode(!debugMode);
    // Store in localStorage for persistence
    localStorage.setItem('debugMode', (!debugMode).toString());
  };

  React.useEffect(() => {
    const stored = localStorage.getItem('debugMode');
    if (stored) {
      setDebugMode(stored === 'true');
    }
  }, []);

  return (
    <IconButton
      onClick={toggleDebug}
      color={debugMode ? 'primary' : 'default'}
      size="small"
      sx={{ position: 'fixed', top: 10, right: 10, zIndex: 9999 }}
    >
      <Bug size={20} />
    </IconButton>
  );
};