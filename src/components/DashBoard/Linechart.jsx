import React, { Component } from 'react'
import Chart from 'react-google-charts'





const Linechart =({LineData})=> {
  const LineChartOptions = {
    hAxis: {
      title: 'Time',
      format: 'M,d,H,m' ,
      gridThickness: 15
    },
    vAxis: {
      title: 'Electricity',
    },
    series: {
      1: { curveType: 'function' },
    },
    explorer: { maxZoomOut: 15,maxZoomIn: 4.0 },
    timeline: {
      groupByRowLabel: true,
      gridThickness: 15
    },
    legend:{
      position :'bottom',
    }

  }
    console.log(LineData);
    var w = '600px';
    var h  = '500px';
    if(window.innerWidth<450 ){
      w = '200px';
      h = '200px';
      console.log('yes');
    }
    else if(window.innerWidth<900 ||window.innerHeight<576){
      w = '250px';
      h = '250px';
      console.log('yes');
    }
    else if(window.innerWidth<900 ){
      w = '300px';
      h = '300px';
      console.log('yes');
    }
    return (
      <div className="container mt-5">
        
        <Chart
          width={w}
          height={h}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          
        />
        
      </div>
    );
  
}

export default Linechart