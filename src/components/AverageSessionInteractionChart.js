import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const AverageSessionInteractionChart = ({ averageSessionInteractionData }) => {
  const options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Average Session Interaction'
    },
    series: [{
      name: 'Average Interaction',
      data: averageSessionInteractionData
    }]
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default AverageSessionInteractionChart;
