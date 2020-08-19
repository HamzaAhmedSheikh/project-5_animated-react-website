import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography,  Drawer} from '@material-ui/core';
import { Menu } from '@material-ui/icons'
import Logo from '../images/logo.png'
import '../css/style.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'black',
  },
  logo: {
    flexGrow: 1,  
    marginTop: '30px',
    width: "100px"  
  },
}));

export default function Navbar() {
  
   const [open, setOpen] = useState(false)
   const handleDrawer = () => {   setOpen(true)  }
  
    
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color={'transparent'}>
        <Toolbar>
          <IconButton onClick={handleDrawer} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Menu  />
          </IconButton>
          <Typography variant="h6" className={classes.logo}>
            <img src={Logo} alt="logo" />
          </Typography>          
        </Toolbar>
      </AppBar>


        <Drawer
          anchor='right'
          open={open}
          onClose={() => setOpen(false)}
        >
          <div style={{ height: "100%", width: "250px", background: "#f67c92", transition: ".5s"}}>
            <ul className='ul'>
              <li><a href="http://animated_react-web.surge.sh/"> HOME </a></li>
              <li><a href="http://animated_react-web.surge.sh/"> ABOUT US </a></li>
              <li><a href="http://animated_react-web.surge.sh/"> FEATURES </a></li>
              <li><a href="http://animated_react-web.surge.sh/"> COURSES </a></li>
              <li><a href="http://animated_react-web.surge.sh/"> OFFER </a></li>
              <li><a href="http://animated_react-web.surge.sh/"> CONTACT </a></li>
            </ul>
          </div>                               
        </Drawer>
    </div>
  );
}

 