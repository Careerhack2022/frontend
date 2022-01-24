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
    var w = '350px';
    var h  = '350px';
    console.log(window.innerWidth);
    if(window.innerWidth<450 ){
      w = '250px';
      h = '200px';
    }
    else if(window.innerWidth<800){
      w = '200px';
      h = '200px';
    }
    else if(window.innerWidth<1000 ){
      w = '280px';
      h = '280px';
    }
    else if(window.innerWidth>1300 ){
      w = '400px';
      h = '400px';
    }
    console.log("line",w,h);
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