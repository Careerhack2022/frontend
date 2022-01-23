import React, { Component } from 'react'
import Chart from 'react-google-charts'



const LineChartOptions = {
  hAxis: {
    title: 'Time',
  },
  vAxis: {
    title: 'Electricity',
  },
  series: {
    1: { curveType: 'function' },
  },
  explorer: { maxZoomOut: 15,maxZoomIn: 4.0 }
}

const Linechart =({LineData})=> {
    console.log(LineData);
    return (
      <div className="container mt-5">
        
        <Chart
          width={'600px'}
          height={'500px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          
        />
        
      </div>
    );
  
}

export default Linechart