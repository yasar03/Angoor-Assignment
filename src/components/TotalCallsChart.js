import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const TotalCallsChart = ({ totalCallsData }) => {
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Total Calls'
    },
    series: [{
      name: 'Total Calls',
      data: totalCallsData
    }]
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default TotalCallsChart;
