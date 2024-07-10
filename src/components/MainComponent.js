import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import FilterComponent from './FilterComponent';
import data from '../data/data.json';

const MainComponent = () => {
  const [filteredData, setFilteredData] = useState([]);

  const filterData = (filters) => {
    let results = data.results;

    if (filters.mention) {
      results = results.filter((item) => item.events.some(event => event.pi.identifier === filters.mention));
    }
    if (filters.newConversations) {
      results = results.filter((item) => item.status === filters.newConversations);
    }
    if (filters.assignments) {
      results = results.filter((item) => item.flow.name === filters.assignments);
    }
    if (filters.reminder) {
      results = results.filter((item) => item.flow.description.includes(filters.reminder));
    }
    if (filters.participation) {
      results = results.filter((item) => item.participating_pis.some(pi => pi.identifier === filters.participation));
    }
    if (filters.user) {
      results = results.filter((item) => item.session_bucket.user_name === filters.user);
    }
    if (filters.dateType) {
      const filterDate = new Date(filters.date);
      if (filters.dateType === 'on') {
        results = results.filter((item) => new Date(item.created_at).toDateString() === filterDate.toDateString());
      } else if (filters.dateType === 'before') {
        results = results.filter((item) => new Date(item.created_at) < filterDate);
      } else if (filters.dateType === 'after') {
        results = results.filter((item) => new Date(item.created_at) > filterDate);
      } else if (filters.dateType === 'between') {
        const fromDate = new Date(filters.fromDate);
        const toDate = new Date(filters.toDate);
        results = results.filter((item) => new Date(item.created_at) >= fromDate && new Date(item.created_at) <= toDate);
      }
    }

    setFilteredData(results);
  };

  useEffect(() => {
    setFilteredData(data.results);
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <FilterComponent onFilterChange={filterData} />
      <Box sx={{ mt: 2 }}>
        {filteredData.length > 0 ? (
          <HighchartsReact
            highcharts={Highcharts}
            options={{
              title: {
                text: 'Filtered Data'
              },
              series: [{
                data: filteredData.map(item => item.id.length) // Dummy data for example
              }]
            }}
          />
        ) : (
          <Typography>No data available</Typography>
        )}
      </Box>
    </Box>
  );
};

export default MainComponent;
