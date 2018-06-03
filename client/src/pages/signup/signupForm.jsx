import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import  Card from '@material-ui/core/Card';
import  CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class SignUpForm extends React.Component{
  render(){
      return(
        <Card className="container">
            <form action="/auth/signup" onSubmit={this.props.onSubmit}>
            <H2>Sign Up</H2>

        
            <Center>
                <TextField
                    label={this.props.errors && this.props.errors.name || 'Name'}
                    name="name"
                    error={this.props.errors && this.props.errors.name && true}
                    onChange={this.props.onChange}
                    value={this.props.user.name}
                />
            </Center>

            <Center>
                <TextField
                    label={this.props.errors && this.props.errors.email || 'Email'}
                    name="email"
                    error={this.props.errors && this.props.errors.email && true}
                    onChange={this.props.onChange}
                    value={this.props.user.email}
                />
            </Center>

            <Center>
                <TextField
                    label={this.props.errors && this.props.errors.password ||'Password'}
                    type="password"
                    name="password"
                    onChange={this.props.onChange}
                    error={this.props.errors && this.props.errors.password && true}
                    value={this.props.user.password}
                />
            </Center>

            <Center>
                <Button type="submit">Create New Account</Button>
                <CardContent>Already have an account? <Link to={'/login'}>Log in</Link></CardContent>
            </Center>
           
            </form>
        </Card>
      )
  }
  
}


export default SignUpForm;

const Center = styled.div`
  width: 90%;
  margin:0 auto;
  text-align: center;
`
const H2 = styled.h2`
  margin:0 auto;
  text-align: center;
`