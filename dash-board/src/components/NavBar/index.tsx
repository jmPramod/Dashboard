import React from 'react';
import './styles.scss';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { Avatar, Badge } from '@mui/material';
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="img/logo.png" alt="logo" />
      </div>
      <div className="icons">
        <IconButton aria-label="delete" color="primary">
          <SearchIcon />
        </IconButton>
        <IconButton aria-label="delete" color="primary">
          <WidgetsIcon />
        </IconButton>
        <IconButton aria-label="delete" color="primary">
          <FullscreenIcon />
        </IconButton>

        <IconButton aria-label="delete" color="primary">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>{' '}
        </IconButton>
        <IconButton>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
        <IconButton aria-label="delete" color="primary">
          <SettingsIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default NavBar;
