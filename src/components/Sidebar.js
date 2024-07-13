// src/components/Sidebar.js
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore, Menu as MenuIcon, ChevronLeft, ChevronRight } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExtensionIcon from '@mui/icons-material/Extension';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import CategoryIcon from '@mui/icons-material/Category';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import WidgetsIcon from '@mui/icons-material/Widgets';

import Logo from '../assets/logo.png'; // Replace with your actual logo

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? 56 : 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: collapsed ? 56 : 240,
          boxSizing: 'border-box',
          transition: 'width 0.2s ease-out',
        },
      }}
    >
      <List>
        {/* Sidebar Header */}
        <ListItem sx={{ justifyContent: 'flex-end', p: 0 }}>
          <ListItemIcon onClick={toggleSidebar} sx={{ cursor: 'pointer', mr: -2 }}>
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </ListItemIcon>
        </ListItem>

        {/* Logo */}
        {/* <ListItem sx={{ justifyContent: 'center', p: 0 }}>
          <img src={Logo} alt="Logo" height="40" style={{ marginRight: '10px' }} />
        </ListItem> */}

        {/* Plug-In Management */}
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <ExtensionIcon />
          </ListItemIcon>
          {!collapsed && <ListItemText primary="Plug-In Management" />}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: collapsed ? 1 : 4 }}>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              {!collapsed && <ListItemText primary="Agents" />}
            </ListItem>
            <ListItem button sx={{ pl: collapsed ? 1 : 4 }}>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              {!collapsed && <ListItemText primary="Flows" />}
            </ListItem>
            <ListItem button sx={{ pl: collapsed ? 1 : 4 }}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              {!collapsed && <ListItemText primary="Forms" />}
            </ListItem>
            <ListItem button sx={{ pl: collapsed ? 1 : 4 }}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              {!collapsed && <ListItemText primary="Tools" />}
            </ListItem>
            <ListItem button sx={{ pl: collapsed ? 1 : 4 }}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              {!collapsed && <ListItemText primary="Integrations" />}
            </ListItem>
          </List>
        </Collapse>

        {/* Deployments */}
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <WidgetsIcon />
          </ListItemIcon>
          {!collapsed && <ListItemText primary="Deployments" />}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: collapsed ? 1 : 4 }}>
              <ListItemIcon>
                <WhatsAppIcon />
              </ListItemIcon>
              {!collapsed && <ListItemText primary="WhatsApp" />}
            </ListItem>
            <ListItem button sx={{ pl: collapsed ? 1 : 4 }}>
              <ListItemIcon>
                <WidgetsIcon />
              </ListItemIcon>
              {!collapsed && <ListItemText primary="Widget" />}
            </ListItem>
            <ListItem button sx={{ pl: collapsed ? 1 : 4 }}>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              {!collapsed && <ListItemText primary="Widget Components" />}
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
