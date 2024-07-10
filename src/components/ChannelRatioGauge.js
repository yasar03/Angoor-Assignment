// ChannelRatioGauge.js
import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsPie from 'highcharts/modules/exporting';

// Initialize the pie module
HighchartsPie(Highcharts);


const ChannelRatioGauge = ({ whatsappCount, instagramCount, websiteCount }) => {
    const options = {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Channel Ratio',
      },
      series: [
        {
          name: 'Channels',
          data: [
            {
              name: 'WhatsApp',
              y: whatsappCount,
            },
            {
              name: 'Instagram',
              y: instagramCount,
            },
            {
              name: 'Website',
              y: websiteCount,
            },
          ],
        },
      ],
    };
  
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  };
  
export default ChannelRatioGauge;
