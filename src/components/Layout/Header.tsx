import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  IconButton, 
  Menu, 
  MenuItem,
  useTheme,
  Box
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Menu as MenuIcon, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [langAnchorEl, setLangAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLangClose = () => {
    setLangAnchorEl(null);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleLangClose();
    document.dir = lng === 'he' ? 'rtl' : 'ltr';
  };

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: 'none' } }}
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, gap: 2 }}>
          <Button color="inherit" component={Link} to="/">{t('navigation.home')}</Button>
          <Button color="inherit" component={Link} to="/about">{t('navigation.about')}</Button>
          <Button color="inherit" component={Link} to="/courses">{t('navigation.courses')}</Button>
          <Button color="inherit" component={Link} to="/pricing">{t('navigation.pricing')}</Button>
          <Button color="inherit" component={Link} to="/documents">{t('navigation.documents')}</Button>
          <Button color="inherit" component={Link} to="/contact">{t('navigation.contact')}</Button>
        </Box>

        <IconButton color="inherit" onClick={handleLangMenu}>
          <Globe />
        </IconButton>

        <IconButton color="inherit" onClick={toggleTheme}>
          {theme.palette.mode === 'dark' ? <Sun /> : <Moon />}
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={Link} to="/" onClick={handleClose}>{t('navigation.home')}</MenuItem>
          <MenuItem component={Link} to="/about" onClick={handleClose}>{t('navigation.about')}</MenuItem>
          <MenuItem component={Link} to="/courses" onClick={handleClose}>{t('navigation.courses')}</MenuItem>
          <MenuItem component={Link} to="/pricing" onClick={handleClose}>{t('navigation.pricing')}</MenuItem>
          <MenuItem component={Link} to="/documents" onClick={handleClose}>{t('navigation.documents')}</MenuItem>
          <MenuItem component={Link} to="/contact" onClick={handleClose}>{t('navigation.contact')}</MenuItem>
        </Menu>

        <Menu
          anchorEl={langAnchorEl}
          open={Boolean(langAnchorEl)}
          onClose={handleLangClose}
        >
          <MenuItem onClick={() => changeLanguage('he')}>עברית</MenuItem>
          <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
          <MenuItem onClick={() => changeLanguage('ru')}>Русский</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};