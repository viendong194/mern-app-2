import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Auth from '../Auth.js';

class Header extends React.Component{
  render(){
    const {classes} = this.props
    return(
      
        <AppBar className={classes.container}>
           <div>
              {!Auth.isUserAuthenticated() && <Button component={Link} to="/login" className={classes.button}>Sign In</Button>}
              {!Auth.isUserAuthenticated() && <Button component={Link} to="/signup" className={classes.button}>Sign up</Button>}
              {Auth.isUserAuthenticated() && <Button component={Link} to="/profile" className={classes.button}>Profile</Button>}
              {/* <Button component={Link} to="/comments" className={classes.button}>Comments</Button> */}
           </div>
        </AppBar>
    )
  }
}
export default withStyles(styles)(Header);

const styles = theme => ({
    button: {
      margin: theme.spacing.unit
    },
    input: {
      display: 'none',
    },
  });