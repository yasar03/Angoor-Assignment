import React from 'react';
import { Container, Typography } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  title: {
    text: 'Sample Chart'
  },
  series: [{
    data: [1, 2, 3, 4, 5]
  }]
};

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Welcome to Angoor AI
      </Typography>
      <HighchartsReact highcharts={Highcharts} options={options} />
      {/* Add home page content here */}
    </Container>
  );
};

export default Home;
