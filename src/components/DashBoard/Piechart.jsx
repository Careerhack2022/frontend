import React, { Component } from 'react'
import Chart from 'react-google-charts'

// const PieData = [
//   ['x', '電視', '電風扇','空氣清淨機'],
//   ['01/23/13:30', 0, 0,25],
//   ['01/23/13:45', 10, 5,33],
//   ['01/23/14:00', 2, 15,1],
//   ['01/23/14:15', 17, 9,23],
//   ['01/23/14:30', 18, 10,231],
//   ['01/23/14:45', 56, 5,56],
//   ['01/23/15:00', 82, 3,82],
//   ['01/23/15:15', 11, 19,32],
// ]

// function Vector(components) {
//   // TODO: Finish the Vector class.
//   this.arr = components;
// }

const Piechart=({PieData})=> {
    var data = [];
    data.push(["電器","用電量"]);
    for(var i = 1;i<PieData[0].length;i++){
      var ele = 0;
      var tmp = [];
      for(var j = 1;j<PieData.length;j++){
        ele += PieData[j][i];

      }
      tmp.push(PieData[0][i]);
      tmp.push(ele);
      data.push(tmp);
    }
    var w = '400px';
    var h  = '400px';
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
    var opt = {
      legend:{position:'bottom'}
    };
    console.log(w,h);
    return (
      <div className="container mt-5">
        {/* <h2>React Google Line Chart Example</h2> */}
        <Chart
          width={w}
          height={h}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={data}
          options={opt}
        />
      </div>
    );
  
}

export default Piechart