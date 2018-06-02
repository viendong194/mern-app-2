import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        <Copyright>My efforts to learn MERN</Copyright>
      </Wrapper>
    )
  }
}

const Wrapper = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5C6BC0;
`;
const Copyright = styled.small`
  display:block;
  text-align: center;
  font-size: 12px;
  color: white;
`