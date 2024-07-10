import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import FilterComponent from './components/FilterComponent';
import TotalCallsChart from './components/TotalCallsChart';
import TotalConsumptionChart from './components/TotalConsumptionChart';
import AverageSessionInteractionChart from './components/AverageSessionInteractionChart';
import TokenOutputSpeedChart from './components/TokenOutputSpeedChart';
import MedianResolutionTimeChart from './components/MedianResolutionTimeChart';

import data from './data/data.json'; // Ensure this path is correct and data.json exists

const App = () => {
  // Example data for charts (you should replace with actual data processing logic)
  const totalCallsData = [/* Array of total calls data */];
  const totalConsumptionData = [/* Array of total consumption data */];
  const averageSessionInteractionData = [/* Array of average session interaction data */];
  const tokenOutputSpeedData = [/* Array of token output speed data */];
  const medianResolutionTimeData = [/* Array of median resolution time data */];

  // Example options for pie chart
  const pieChartOptions = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Pie Chart Title'
    },
    series: [{
      name: 'Pie Chart',
      data: [{
        name: 'Category 1',
        y: 50
      }, {
        name: 'Category 2',
        y: 30
      }]
    }]
  };

  // Filter data based on platform (example filter)
  const filteredData = data.results.filter(result =>
    result.platform === 'whatsapp' || result.platform === 'instagram' || result.platform === 'website'
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <FilterComponent data={filteredData} /> {/* Pass necessary props */}
      <Box mt={4}>
        <HighchartsReact
          highcharts={Highcharts}
          options={pieChartOptions} // Replace with valid pie chart options
        />
      </Box>
      <Box mt={4}>
        <TotalCallsChart totalCallsData={totalCallsData} /> {/* Pass total calls data */}
      </Box>
      <Box mt={4}>
        <TotalConsumptionChart totalConsumptionData={totalConsumptionData} /> {/* Pass total consumption data */}
      </Box>
      <Box mt={4}>
        <AverageSessionInteractionChart averageSessionInteractionData={averageSessionInteractionData} /> {/* Pass average session interaction data */}
      </Box>
      <Box mt={4}>
        <TokenOutputSpeedChart tokenOutputSpeedData={tokenOutputSpeedData} /> {/* Pass token output speed data */}
      </Box>
      <Box mt={4}>
        <MedianResolutionTimeChart medianResolutionTimeData={medianResolutionTimeData} /> {/* Pass median resolution time data */}
      </Box>
    </Container>
  );
};

export default App;
