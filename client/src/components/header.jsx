import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import white from '@material-ui/core/colors/purple';

class Header extends React.Component{
  render(){
    const {classes} = this.props
    return(
      
        <AppBar className={classes.container}>
           <div>
                <Button component={Link} to="/login" className={classes.button}>Sign In</Button>
                <Button component={Link} to="/signup" className={classes.button}>Sign up</Button>
                <Button component={Link} to="/comments" className={classes.button}>Comments</Button>
                <Button component={Link} to="/profile" className={classes.button}>Profile</Button>
           </div>
        </AppBar>
    
    )
  }
}
export default withStyles(styles)(Header);

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      color: white
    },
    input: {
      display: 'none',
    },
  });