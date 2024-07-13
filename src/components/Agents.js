// src/components/Agents.js
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';

const Agents = () => {
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Monthly Average Temperature'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Temperature (°C)'
      }
    },
    series: [{
      name: 'Tokyo',
      data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }]
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Agents Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Chart 1
            </Typography>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Chart 2
            </Typography>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Chart 3
            </Typography>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 3 }}>
        <Button variant="contained" color="primary">
          Action Button
        </Button>
      </Box>
    </Box>
  );
};

export default Agents;
