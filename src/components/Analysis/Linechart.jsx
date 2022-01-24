import React, { Component } from 'react'
import Chart from 'react-google-charts'





const Line =({LineData})=> {
  const LineChartOptions = {
    hAxis:{
      viewWindow: {
        max: LineData[1][0],
        min: LineData[LineData.length-1][0]
      },
      gridlines:{
        count:10
      },
      ticks:[
        LineData[1][0],LineData[LineData.length-1][0]
      ],
      
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
    },
    interval:{

    }
    

  }
    // console.log(LineData);
    var w = '600px';
    var h  = '600px';
    console.log(window.innerWidth);
    if(window.innerWidth<450 ){
      w = '250px';
      h = '200px';
    }
    else if(window.innerWidth<800){
      w = '400px';
      h = '400px';
    }
    else if(window.innerWidth<1000 ){
      w = '500px';
      h = '500px';
    }
    else if(window.innerWidth>1300 ){
      w = '800px';
      h = '800px';
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

export default Line;