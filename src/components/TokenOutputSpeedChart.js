import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const TokenOutputSpeedChart = ({ tokenOutputSpeedData }) => {
  const options = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Token Output Speed'
    },
    series: [{
      name: 'Token Output Speed',
      data: tokenOutputSpeedData
    }]
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default TokenOutputSpeedChart;
