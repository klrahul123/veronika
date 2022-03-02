import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';
import './toy.css';
import LoginIcon from '@mui/icons-material/Login';
import HelpIcon from '@mui/icons-material/Help';
import CodeIcon from '@mui/icons-material/Code';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
     <h1> <p class="ho"><MenuIcon /></p> </h1>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}><a class="way" href="/login"> <LoginIcon/> Login</a> </MenuItem>
        <MenuItem onClick={handleClose}><a class="way" href="/signup"> <AppRegistrationRoundedIcon/> Sign-Up</a></MenuItem>
        <MenuItem onClick={handleClose}><a class="way" href="/java"> <CodeIcon/> Java Language</a> </MenuItem>
        <MenuItem onClick={handleClose}><a class="way" href="/c"> <CodeIcon/> C Language</a></MenuItem>
        <MenuItem onClick={handleClose}><a class="way" href="/c++"> <CodeIcon/> C++ Language</a></MenuItem>
        <MenuItem onClick={handleClose}><a class="way" href="/python"> <CodeIcon/> Python Language</a></MenuItem>
        <MenuItem onClick={handleClose}><a class="way" href="/help"> <HelpIcon/> Help</a></MenuItem>
        <MenuItem onClick={handleClose}></MenuItem>
        <MenuItem onClick={handleClose}></MenuItem>
        <MenuItem onClick={handleClose}></MenuItem>
      </Menu>
    </div>
  );
}
