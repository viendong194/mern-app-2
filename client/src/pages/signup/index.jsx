import React from 'react';
import SignUpForm from './signupForm';
import styled from 'styled-components';


class Index extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    };

  }

  changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  
  processForm = (event) => {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

   

    const { name, email, password } = this.state.user;
   
    fetch('/auth/signup/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password})
    }).then(res => res.json()).then((res) => {
      if (!res.success) {
        console.log(res);
        this.setState({ errors: res.errors });
      }else {
        console.log(res.message);
        this.setState({ errors: null });
        this.props.history.push('/login');
      }
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
    <Wrapper>
        <Inner>
            <SignUpForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        </Inner>
    </Wrapper>
      
    );
  }

}

export default Index;

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
const Inner = styled.div`
  width: 1000px;
`