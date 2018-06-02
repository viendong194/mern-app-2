import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'


export default class Index extends React.Component {
  render() {
    return (
      <Wrapper>
        <Card className="container">
            <CardHeader title="React Application" subheader="This is the home page." />
        </Card>
      </Wrapper>
    )
  }
}

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
const P = styled.p`
`
