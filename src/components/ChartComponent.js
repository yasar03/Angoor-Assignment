// src/components/ChartComponent.js
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartComponent = ({ title, data }) => {
  const options = {
    title: { text: title },
    series: [{
      type: 'pie',
      data: data
    }]
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default ChartComponent;
