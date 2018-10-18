import React, {Fragment} from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
  return (
    <div>
        <div className='NavBar-navBar'>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='title' color='inherit' className='NavBar-flex'>
                        <p className='Navbar-navBarText'>Vehicle Information Dashboard</p>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    </div>
  );
}

export default NavBar;
