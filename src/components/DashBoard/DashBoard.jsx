import './DashBoard.css';
import { useState, useEffect, useRef } from 'react';
import Select from './Select';
import Linechart from './Linechart';
import Piechart from './Piechart';
import Chart from 'react-google-charts';
import MaterialTable from 'material-table';
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

//import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import { getDeviceDataAll, getDeviceDataOne } from '../api/device';
import { RiMapPinRangeFill } from 'react-icons/ri';


function DashBoard() {
  const [device,setDevice] = useState('各種電器');
  var electricity = 0;
  var bill  = 1234;
  var drawingData = [];


  const [demo_day, setDemoData] = useState(null);
  
  const [priority_list, setPriority] = useState(null);

  useEffect(() => {
    getDeviceDataAll("demo_day").then(res => {
      setDemoData(res.data);
      // console.log("data[0]", res.data[0])
      let temp = {
        "dryer": res.data[0]["dryer_priority"],
        "heater": res.data[0]["heater_priority"],
        "pot": res.data[0]["pot_priority"],
        "purifier_black": res.data[0]["purifier_black_priority"],
        "purifier_small": res.data[0]["purifier_small_priority"],
        "purifier_white": res.data[0]["purifier_white_priority"],
      }
      setPriority(temp);
    });
  }, []);

  const [seconds, setSeconds] = useState(0);
  console.log("demo_data", demo_day);
  console.log("priority_list", priority_list);

  

  useEffect(() => {
    const interval = setInterval(() => {
        
      setSeconds(seconds => seconds + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  console.log("sec",seconds);
  var data = [];
  //['x', 'Pot', 'Purifier White','Purifier Black','Purifier Small','Heater','Dryer']
  data.push([
    'x', 'Pot', 'Purifier White','Purifier Black','Purifier Small','Heater','Dryer'
    //   {type: 'number',label:'x',role:'interval'},
    //   {type: 'number',label:'Pot',role:'interval'},
    //   {type: 'number',label:'Purifier White',role:'interval'},
    //   {type: 'number',label:'Purifier Black',role:'interval'},
    //   {type: 'number',label:'Purifier Small',role:'interval'},
    //   {type: 'number',label:'Heater',role:'interval'},
    //   {type: 'number',label:'Dryer',role:'interval'},
  ]);
  if(demo_day===null){
    data.push(['2022-01-24 00:10:00','0','0','0','0','0']);
  }
  else{
    var range = seconds;
    if(range>=144) range = 143;
    var i =0;
    for( i =0;i<=range;i++){
        data.push([demo_day[i]['timestamp'],demo_day[i]['pot'],demo_day[i]['purifier_white'],demo_day[i]['purifier_black'],demo_day[i]['purifier_small'],demo_day[i]['heater'],demo_day[i]['dryer']])
        electricity = demo_day[i]['pot']+demo_day[i]['purifier_white']+demo_day[i]['purifier_black']+demo_day[i]['purifier_small']+demo_day[i]['heater']+demo_day[i]['dryer'];
    }
    var time = i*10/60;
  }
  electricity = electricity.toFixed(2);
  bill = electricity/1000*5;
  bill = bill.toFixed(2);
  
 console.log(data);

  const column = [
      {title:'device',field:'device'},
      {
        title:'priority',field:'priority'
      }
    ]
    var table =[ ];
    if(priority_list!=null){table = [
        {
            'device':'heater',
            'priority':priority_list['heater']
        },
        {
            'device':'pot',
            'priority':priority_list['pot']
        },
        {
            'device':'dryer',
            'priority':priority_list['dryer']
        },
        {
            'device':'purifier_white',
            'priority':priority_list['purifier_white']
        },
        {
            'device':'purifier_black',
            'priority':priority_list['purifier_black']
        },
        {
            'device':'purifier_small',
            'priority':priority_list['purifier_small']
        },
        
    ]}
    
  
  if(device === "各種電器" ||device === "---請選擇電器---" ){
    drawingData = data;
  }
  else if(device ==='全部電器'){
    drawingData.push(['x','Electricity']);
    for(var i = 1;i<data.length;i++){
      drawingData.push([data[i][0],data[i][1]+data[i][2]+data[i][3]+data[i][4]+data[i][5]+data[i][6]]);
      electricity +=data[i][1]+data[i][2]+data[i][3]+data[i][4]+data[i][5]+data[i][6]
    }
    // console.log(drawingData);
  }
  else if(device ==='電鍋'){
    drawingData.push(['x','Pot']);
    for( i = 1;i<data.length;i++){
      drawingData.push([data[i][0],data[i][1]]);
    }
    // console.log(drawingData);
  }
  else if(device ==='暖氣'){
    drawingData.push(['x','Heater']);
    for(i = 1;i<data.length;i++){
      drawingData.push([data[i][0],data[i][5]]);
    }
    // console.log(drawingData);
  }
  else if(device ==='空氣清淨機-白'){
    drawingData.push(['x','Purifier-white']);
    for(i = 1;i<data.length;i++){
      drawingData.push([data[i][0],data[i][2]]);
    }
    // console.log(drawingData);
  }
  else if(device ==='空氣清淨機-黑'){
    drawingData.push(['x','Purifier-black']);
    for(i = 1;i<data.length;i++){
      drawingData.push([data[i][0],data[i][3]]);
    }
    // console.log(drawingData);
  }
  else if(device ==='空氣清淨機-小'){
    drawingData.push(['x','Purifier-small']);
    for(i = 1;i<data.length;i++){
      drawingData.push([data[i][0],data[i][4]])
    }
    // console.log(drawingData);
  }
  else if(device ==='吹風機'){
    drawingData.push(['x','Dryer']);
    for(i = 1;i<data.length;i++){
      drawingData.push([data[i][0],data[i][6]])
    }
    // console.log(drawingData);
  }
  
  return (
    //<Select  add = {setDevice} />
    <Container fluid className='pos'>
        <Row style={{height:'100px'}}>
            <Col xs = '12' lg = '12' sm = '12' md='12' >
                
            </Col>
        </Row>
        <Row>
            <Col  sm = '2' md = '2' lg = '1'><p> </p>
            </Col>
            <Col xs = '12' lg = '11' sm = '12' md='12'>
                <Card  bg='transparent'>
                    <Card.Header >
                        <Card.Title as="h1" className='title'>DashBoard</Card.Title>
                    </Card.Header>
                    <Card.Body  >
                        <Row>
                        <Col lg = '4' sm = '6' xs = '12' md = '6'>
                            <Card className="card-stats">
                                <Card.Body>
                                    <Row>
                                    <Col xs="12">
                                        <div className="icon-big text-center icon-warning">
                                        <i className="nc-icon nc-chart text-warning"></i>
                                        </div>
                                    </Col>
                                    <Col xs="12">
                                        <div className="numbers">
                                        <p className="header" >Electricity</p>
                                        <Card.Title as="h4">{electricity} Wattage</Card.Title>
                                        </div>
                                    </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Footer>
                                    <hr></hr>
                                    <div className="stats">
                                    <i className="fas fa-redo mr-1"></i>
                                    Update Now
                                    </div>
                                </Card.Footer>
                            </Card>
                            <Row style={{height:'5px'}}></Row>
                        </Col>
                        <Col lg = '4' sm = '6' xs = '12' md = '6'>
                            <Card className="card-stats">
                            <Card.Body>
                                <Row>
                                    <Col xs="12">
                                        <div className="icon-big text-center icon-warning">
                                        <i className="nc-icon nc-light-3 text-success"></i>
                                        </div>
                                    </Col>
                                    <Col xs="12">
                                        <div className="numbers">
                                        <p className="header">Average Usage</p>
                                        <Card.Title as="h4">{(electricity/time).toFixed(2) } Wattage/Hr</Card.Title>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                    <hr></hr>
                                    <div className="stats">
                                    <i className="far fa-calendar-alt mr-1"></i>
                                    Last day
                                    </div>
                            </Card.Footer>
                            </Card>
                            <Row style={{height:'5px'}}></Row>
                        </Col>
                        <Col lg = '4' sm = '6' xs = '12' md = '6'>
                            <Card className="card-stats">
                            <Card.Body>
                                <Row>
                                    <Col xs="12">
                                        <div className="icon-big text-center icon-warning">
                                        <i className="nc-icon nc-light-3 text-success"></i>
                                        </div>
                                    </Col>
                                    <Col xs="12">
                                        <div className="numbers">
                                        <p className="header">Electricity Bill</p>
                                        <Card.Title as="h4">$ {bill}</Card.Title>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                    <hr></hr>
                                    <div className="stats">
                                    <i className="far fa-calendar-alt mr-1"></i>
                                    Last day
                                    </div>
                            </Card.Footer>
                            </Card>
                            <Row style={{height:'5px'}}></Row>
                        </Col>
                    
                    </Row>
                            
                    <Row>
                            <Col><p> </p></Col>
                    </Row>    
                    <Row>
            
                        <Col md="6" lg = '6' sm = '12' xs='12'>
                            <Card>
                                
                                <Card.Body>
                                    <Row mg = '1'>
                                        <Col ><Card.Title as="h4"><p className="header">Electricity Consumption</p></Card.Title></Col>
                                        
                                    </Row>
                                    <Row>
                                        
                                        <Col lg = '1'></Col>
                                        <Col>
                                            <Select add = {setDevice}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div className="ct-chart" id="chartHours">
                                        <Linechart LineData = {drawingData}/>
                                        </div>
                                    </Row>
                            
                                </Card.Body>
                                
                            </Card>
                            <Row style={{height:'5px'}}></Row>
                        </Col>
                        <Col md="6" lg = '6' xs='12' sm='12' >
                            <Card >
                                
                                <Card.Body>
                                <Card.Title as="h4"> <p className="header">Pie Chart</p></Card.Title>
                                    <div className="ct-chart" id="chartHours">
                                        <Piechart PieData = {data}/>
                                    </div>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                        
                    </Row>
                    <Row>
                    <Col md="6" lg = '6' xs='12' sm='12' >
                            <Card >
                                
                                <Card.Body>
                                
                                    <div className="ct-chart" id="chartHours">
                                        {(priority_list!=null)?(<MaterialTable columns={column} data={table} title={'Priority List'}></MaterialTable>):(<></>)}
                                    </div>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                        
                        
                    </Row>
                    </Card.Body>
                </Card>
            </Col>

        </Row>

        {/* <Row >
            <Col ><p> </p>
            </Col>
        </Row>
        <Row >
            <Col><p> </p>
            </Col>
            
        </Row >
        <Row >
            <Col><p> </p>
            </Col>
            
        </Row>
        <Row >
            <Col><p> </p>
            </Col>
            
        </Row>
        <Row className = 'pos'>
            <Col lg = '1' sm = '5'>
            </Col>
            <Col lg = '3' sm = '7' className = 'pos'>
                <Card className="card-stats">
                    <Card.Body>
                        <Row>
                        <Col xs="5">
                            <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-chart text-warning"></i>
                            </div>
                        </Col>
                        <Col xs="12">
                            <div className="numbers">
                            <p className="text" >Electricity</p>
                            <Card.Title as="h4">{electricity} Wattage</Card.Title>
                            </div>
                        </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <hr></hr>
                        <div className="stats">
                        <i className="fas fa-redo mr-1"></i>
                        Update Now
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
            <Col lg="3" sm="6" className = 'pos'>
                <Card className="card-stats">
                <Card.Body>
                    <Row>
                    <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-light-3 text-success"></i>
                        </div>
                    </Col>
                    <Col xs="12">
                        <div className="numbers">
                        <p className="text">Electricity Bill</p>
                        <Card.Title as="h4">$ {bill}</Card.Title>
                        </div>
                    </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                    <i className="far fa-calendar-alt mr-1"></i>
                    Last day
                    </div>
                </Card.Footer>
                </Card>
            </Col>
        </Row>
        <Row >
            <Col lg='3'> <p> </p></Col>
        </Row>
        <Row  >
            <Col md='1'></Col>
            
            <Col md="6">
                <Card>
                <Card.Header>
                    <Col>
                        <Card.Title as="h4">Electricity Consumption</Card.Title>

                    </Col>
                    
                </Card.Header>
                <Card.Body>
                    <Row mg = '1'>
                        <Col><p> </p></Col>
                    </Row>
                    <Row>
                        
                        <Col lg = '1'></Col>
                        <Col>
                            <Select add = {setDevice}/>
                        </Col>
                    </Row>
                    <Row>
                        <div className="ct-chart" id="chartHours">
                        <Linechart LineData = {drawingData}/>
                        </div>
                    </Row>
                    
                </Card.Body>
                
                </Card>
            </Col>
            <Col md="5" >
                <Card >
                    <Card.Header>
                        <Card.Title as="h4"> PieChart</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="ct-chart" id="chartHours">
                            <Piechart PieData = {LineData}/>
                        </div>
                    </Card.Body>
                    
                  </Card>
            </Col>
        </Row> */}
        
        
    </Container>
  );
}

export default DashBoard;