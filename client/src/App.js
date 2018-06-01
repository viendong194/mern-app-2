import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename="/">
          <Center>
            <Header />
            <Switch>
              <Route exact path="/" component={Index} />
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