import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from 'react-router-dom';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import InfoIcon from '@mui/icons-material/Info';

const menuItems = [
  { text: 'Inspection Overview', icon: <AssessmentIcon />, count: '', path: '/inspection-overview' },
  { text: 'Handover Check', icon: <AssignmentIcon />, count: '', path: '/handover-check' },
  { text: 'Electrics', icon: <ElectricBoltIcon />, count: '999', path: '/electrics' },
  { text: 'Things to Remember', icon: <InfoIcon />, count: '', path: '/things-to-remember' },
];

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        backgroundColor: '#242424',
        height: '100%',
        color: 'white',
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        p: 2,
        display: { sm: 'none' } 
      }}>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => {
              navigate(item.path);
              handleDrawerToggle();
            }}
            sx={{
              mb: 1,
              backgroundColor: location.pathname === item.path ? '#2E2E2E' : 'transparent',
              borderRadius: 1,
              '&:hover': {
                backgroundColor: '#2E2E2E',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
            {item.count && (
              <Box
                sx={{
                  backgroundColor: '#4CAF50',
                  borderRadius: 1,
                  px: 1,
                  py: 0.5,
                  fontSize: '0.875rem',
                }}
              >
                {item.count}
              </Box>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Mobile hamburger menu */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 999,
          display: { sm: 'none' },
          backgroundColor: '#1E1E1E',
          '&:hover': {
            backgroundColor: '#2E2E2E',
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Mobile drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 280,
              backgroundColor: '#1E1E1E',
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop permanent drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 280,
              backgroundColor: '#1E1E1E',
              border: 'none',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar; 