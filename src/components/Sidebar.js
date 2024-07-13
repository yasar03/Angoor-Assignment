// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  Divider,
  Box
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [pluginsOpen, setPluginsOpen] = useState(true);
  const [deploymentsOpen, setDeploymentsOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const togglePlugins = () => {
    setPluginsOpen(!pluginsOpen);
  };

  const toggleDeployments = () => {
    setDeploymentsOpen(!deploymentsOpen);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 240 : 56,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 240 : 56,
          boxSizing: 'border-box',
          transition: 'width 0.3s',
        },
      }}
    >
      <List>
        <ListItem button onClick={toggleSidebar}>
          <ListItemIcon>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </ListItemIcon>
        </ListItem>
        <Divider />
        <ListItem button onClick={togglePlugins}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Plug-In Management" />}
          {pluginsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={pluginsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={() => navigate('/agents')}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Agents" />}
            </ListItem>
            <ListItem button onClick={() => navigate('/flows')}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Flows" />}
            </ListItem>
            <ListItem button onClick={() => navigate('/forms')}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Forms" />}
            </ListItem>
            <ListItem button onClick={() => navigate('/tools')}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Tools" />}
            </ListItem>
            <ListItem button onClick={() => navigate('/integrations')}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Integrations" />}
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={toggleDeployments}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Deployments" />}
          {deploymentsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={deploymentsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Whatsapp" />}
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Widget" />}
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Widget Components" />}
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <ListItem button onClick={toggleSidebar}>
        <ListItemIcon>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </ListItemIcon>
      </ListItem>
    </Drawer>
  );
};

export default Sidebar;
