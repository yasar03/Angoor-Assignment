// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import FilterComponent from '../components/FilterComponent';
import ChartComponent from '../components/ChartComponent';
import { Grid, Box } from '@mui/material';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Process the data to extract necessary metrics
  const processedData = data.map(item => {
    const totalCalls = item.events.length;
    const tokenConsumption = item.events.reduce((acc, event) => acc + event.body.length, 0);
    const medianResolutionTime = 
      (new Date(item.events[item.events.length - 1].created_at) - new Date(item.events[0].created_at)) / 2;

    return {
      totalCalls,
      tokenConsumption,
      medianResolutionTime
    };
  });

  return (
    <Box p={2}>
      <FilterComponent />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ChartComponent title="Total Calls" data={processedData.map(item => item.totalCalls)} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartComponent title="Token Consumption" data={processedData.map(item => item.tokenConsumption)} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartComponent title="Median Resolution Time" data={processedData.map(item => item.medianResolutionTime)} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
