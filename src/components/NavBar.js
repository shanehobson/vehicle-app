import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
  return (
    <div>
        <div className='NavBar-navBar'>
            <AppBar position='static'>
                <Toolbar>
                    <div className='NavBar-textContainer'>
                        <div>
                            <Typography variant='h3' color='inherit'>
                                <p className='Navbar-navBarText'>Vehicle Information Dashboard</p>
                            </Typography>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    </div>
  );
}

export default NavBar;
