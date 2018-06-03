import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Index from './pages/index/index';
import Login from './pages/login/index';
import Signup from './pages/signup/index';
import Profile from './pages/profile/index'
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename="/">
          <Center>
            <Header />
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
            </Switch>
            <Footer />
          </Center>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

const Center = styled.div`
  display:block;
  margin:0 auto;
  width:100%;
  height:100vh;
  background-color:black;
`;