import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';  
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./style.css";
import { useNavigate } from 'react-router-dom';


export default function Navbar() {

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/user-profile');
  };

  const buttonStyles = {
    borderColor: '#143D60',
    color: '#143D60',
    '&:hover': {
      backgroundColor: '#143D60',
      color: '#A0C878',
      borderColor: '#143D60',
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: '#A0C878',
          color: '#143D60'
        }}
      >
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            BOOKnGO
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            variant="outlined" 
            startIcon={<AccountCircleIcon/>}
            sx={buttonStyles}
            onClick={handleButtonClick}
          >
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<NotificationsActiveIcon/>}
            sx={buttonStyles}
          >
          </Button>

            <Button 
              variant="outlined" 
              startIcon={<LoginIcon />}
              sx={buttonStyles}
            >
              Sign In
            </Button>

            <Button 
              variant="outlined" 
              startIcon={<PersonAddIcon />}
              sx={buttonStyles}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}