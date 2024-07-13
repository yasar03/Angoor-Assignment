// src/components/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import Logo from '../assets/logo.png'; // Replace with your actual logo

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [notificationOpen, setNotificationOpen] = React.useState(false);
  const [infoOpen, setInfoOpen] = React.useState(false);
  const [userOpen, setUserOpen] = React.useState(false);

  const handleMenuClick = (event, setter) => {
    setter(event.currentTarget);
  };

  const handleMenuClose = (setter) => {
    setter(null);
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleNotificationToggle = () => {
    setNotificationOpen(!notificationOpen);
  };

  const handleInfoToggle = () => {
    setInfoOpen(!infoOpen);
  };

  const handleUserToggle = () => {
    setUserOpen(!userOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <img src={Logo} alt="Logo" height="40" style={{ marginRight: '10px' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* Add title or app name here */}
        </Typography>

        {/* Settings Icon */}
        <IconButton
          size="large"
          color="inherit"
          aria-label="settings"
          onClick={(event) => handleMenuClick(event, setAnchorEl)}
          sx={{ ml: 'auto' }} // This pushes the icon to the rightmost position
        >
          <SettingsIcon />
        </IconButton>

        {/* Menu for Settings Icon */}
        <Menu
          id="settings-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleMenuClose(setAnchorEl)}
        >
          <MenuItem onClick={() => handleMenuClose(setAnchorEl)}>Settings</MenuItem>
          <MenuItem onClick={() => handleMenuClose(setAnchorEl)}>Profile</MenuItem>
          {/* Add more menu items as needed */}
        </Menu>

        {/* Other Icons (Search, Notifications, Info, User) */}
        <IconButton
          size="large"
          color="inherit"
          aria-label="search"
          onClick={handleSearchToggle}
        >
          <SearchIcon />
        </IconButton>

        <IconButton
          size="large"
          color="inherit"
          aria-label="notifications"
          onClick={handleNotificationToggle}
          sx={{ ml: 2 }}
        >
          <NotificationsIcon />
        </IconButton>

        <IconButton
          size="large"
          color="inherit"
          aria-label="info"
          onClick={handleInfoToggle}
          sx={{ ml: 2 }}
        >
          <InfoIcon />
        </IconButton>

        <IconButton
          size="large"
          color="inherit"
          aria-label="user account"
          onClick={handleUserToggle}
          sx={{ ml: 2 }}
        >
          <AccountCircleIcon />
        </IconButton>

        {/* Menus for other icons (Search, Notifications, Info, User) */}
        <Menu
          id="search-menu"
          anchorEl={null} // Replace with state if implementing a search menu
          open={searchOpen}
          onClose={() => handleMenuClose(setSearchOpen)}
        >
          <MenuItem onClick={() => handleMenuClose(setSearchOpen)}>Search Field</MenuItem>
        </Menu>

        <Menu
          id="notifications-menu"
          anchorEl={null} // Replace with state if implementing a notifications menu
          open={notificationOpen}
          onClose={() => handleMenuClose(setNotificationOpen)}
        >
          <MenuItem onClick={() => handleMenuClose(setNotificationOpen)}>Notification Menu</MenuItem>
        </Menu>

        <Menu
          id="info-menu"
          anchorEl={null} // Replace with state if implementing an info menu
          open={infoOpen}
          onClose={() => handleMenuClose(setInfoOpen)}
        >
          <MenuItem onClick={() => handleMenuClose(setInfoOpen)}>Info Box</MenuItem>
        </Menu>

        <Menu
          id="user-menu"
          anchorEl={null} // Replace with state if implementing a user menu
          open={userOpen}
          onClose={() => handleMenuClose(setUserOpen)}
        >
          <MenuItem onClick={() => handleMenuClose(setUserOpen)}>User Account Info</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
