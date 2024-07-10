import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const TotalConsumptionChart = ({ totalConsumptionData }) => {
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Total Consumption'
    },
    series: [{
      name: 'Total Consumption',
      data: totalConsumptionData
    }]
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default TotalConsumptionChart;
