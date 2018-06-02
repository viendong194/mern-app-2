import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import  Card from '@material-ui/core/Card';
import  CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class SignInForm extends React.Component{
  render(){
      return(
        <Card className="container">
            <form action="/" onSubmit={this.props.onSubmit}>
            <H2>Login</H2>

            {this.props.errors.summary && <p className="error-message">{this.props.errors.summary}</p>}

            <Center>
                <TextField
                    label="Name"
                    name="name"
                    error={this.props.errors.name}
                    onChange={this.props.onChange}
                    value={this.props.user.name}
                />
            </Center>

            <Center>
                <TextField
                    label="Email"
                    name="email"
                    error={this.props.errors.email}
                    onChange={this.props.onChange}
                    value={this.props.user.email}
                />
            </Center>

            <Center>
                <TextField
                    label="Password"
                    type="password"
                    name="password"
                    onChange={this.props.onChange}
                    errorText={this.props.errors.password}
                    value={this.props.user.password}
                />
            </Center>

            <Center>
                <Button type="submit">Create New Account</Button>
                <CardContent>Don't have an account? Create one <Link to={'/signup'}>Sign up</Link></CardContent>
            </Center>

            
            </form>
        </Card>
      )
  }
  
}


export default SignInForm;

const Center = styled.div`
  width: 90%;
  margin:0 auto;
  text-align: center;
`
const H2 = styled.h2`
  margin:0 auto;
  text-align: center;
`