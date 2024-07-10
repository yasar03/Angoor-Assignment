import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const MedianResolutionTimeChart = ({ medianResolutionTimeData }) => {
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Median Resolution Time'
    },
    series: [{
      name: 'Median Resolution Time',
      data: medianResolutionTimeData
    }]
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default MedianResolutionTimeChart;
