import React from 'react';
import  Card from '@material-ui/core/Card';
import  CardContent from '@material-ui/core/CardContent';


const Dashboard = ({ secretData }) => (
  <Card>
    {secretData && <CardContent>{secretData}</CardContent>}
  </Card>
);


export default Dashboard;