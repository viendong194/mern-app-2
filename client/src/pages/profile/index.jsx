import React from 'react';
import Auth from '../../Auth';
import Dashboard from './dashboard.jsx';
import styled from 'styled-components';

class Index extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: ''
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    fetch('/api/dashboard', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json','authorization':`bearer ${Auth.getToken()}` }
      }).then(res => res.json()).then((res) => {
        if (!res.success) {
          this.setState({ secretData: '' });
          this.props.history.push('/login');
        }
        else{
          this.setState({ secretData: res.message  });
        } 
      });
  }

  /**
   * Render the component.
   */
  render() {
    return (<Dashboard secretData={this.state.secretData} />);
  }

}

export default Index;