import React from 'react';
import { Bar } from 'react-chartjs-2';

const TotalCallsGraph = ({ data }) => {
  // Example data aggregation logic for total calls
  const participantCounts = {};
  data.forEach(session => {
    const participantId = session.pi.id;
    if (!participantCounts[participantId]) {
      participantCounts[participantId] = 0;
    }
    participantCounts[participantId]++;
  });

  const chartData = {
    labels: Object.keys(participantCounts),
    datasets: [{
      label: 'Total Calls',
      data: Object.values(participantCounts),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  const chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  };

  return (
    <div>
      <h3>Total Calls Graph</h3>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default TotalCallsGraph;
