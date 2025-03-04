import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const { logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sustainable Product Design
        </Typography>
        <IconButton onClick={handleMenu} color="inherit">
          <Avatar alt="Profile" src="/static/images/avatar/1.jpg" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>My Settings</MenuItem>
          <MenuItem onClick={handleClose}>System</MenuItem>
          <MenuItem onClick={handleClose}>Configurations</MenuItem>
          <MenuItem onClick={handleClose}>Help & Feedback</MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              logout();
            }}
          >
            Log Out
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;