import React from 'react';
import  Card from '@material-ui/core/Card';
import  CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';

const Dashboard = ({ secretData }) => (
  <Wrapper>
    <Inner>
      <Card>
        {secretData && <CardContent>{secretData}</CardContent>}
      </Card>
    </Inner>
  </Wrapper>
);


export default Dashboard;

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