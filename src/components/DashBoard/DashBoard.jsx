import './DashBoard.css';
import {useState} from 'react';
import Select from './Select';
import Linechart from './Linechart';
import Piechart from './Piechart';
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

const LineData = [
    ['x', '電視', '電風扇','空氣清淨機','烤箱','吹風機'],
    ['01/23/13:30', 0, 0,25,56,235],
    ['01/23/13:45', 10, 5,33,84,351],
    ['01/23/14:00', 2, 15,1,77,238],
    ['01/23/14:15', 17, 9,23,80,211],
    ['01/23/14:30', 18, 10,231,52,125],
    ['01/23/14:45', 56, 5,56,66,121],
    ['01/23/15:00', 82, 3,82,25,64],
    ['01/23/15:15', 11, 19,32,43,87],
    ['01/23/15:30', 10, 5,33,84,351],
    ['01/23/15:45', 56, 5,56,66,121],
    ['01/23/16:00', 82, 3,82,25,64],
    ['01/23/16:15', 11, 19,32,43,87],
    ['01/23/16:30', 10, 5,33,84,351],
    ['01/23/16:45', 10, 5,33,84,351],
    ['01/23/17:00', 2, 15,1,77,238],
    ['01/23/17:15', 17, 9,23,80,211],
    ['01/23/17:30', 18, 10,231,52,125],
    ['01/23/17:45', 56, 5,56,66,121],
    ['01/23/18:00', 82, 3,82,25,64],
    ['01/23/18:15', 11, 19,32,43,87],
    ['01/23/18:30', 10, 5,33,84,351],
    ['01/23/18:45', 10, 5,33,84,351],
    ['01/23/19:00', 2, 15,1,77,238],
    ['01/23/19:15', 17, 9,23,80,211],
    ['01/23/19:30', 18, 10,231,52,125],
    ['01/23/19:45', 56, 5,56,66,121],
    ['01/23/20:00', 82, 3,82,25,64],
    ['01/23/21:15', 11, 19,32,43,87],
    ['01/23/21:30', 10, 5,33,84,351],
    ['01/23/21:45', 56, 5,56,66,121],
    ['01/23/22:00', 82, 3,82,25,64],
    ['01/23/22:15', 11, 19,32,43,87],
    ['01/23/22:30', 10, 5,33,84,351],
    ['01/23/22:45', 10, 5,33,84,351],
    ['01/23/23:00', 2, 15,1,77,238],
    ['01/23/23:15', 17, 9,23,80,211],
    ['01/23/23:30', 18, 10,231,52,125],
    ['01/23/23:45', 56, 5,56,66,121],
    ['01/24/00:00', 82, 3,82,25,64],
    ['01/24/00:15', 11, 19,32,43,87],
    ['01/24/00:30', 10, 5,33,84,351],
    ['01/24/00:45', 10, 5,33,84,351],
    ['01/24/01:00', 2, 15,1,77,238],
    ['01/24/01:15', 17, 9,23,80,211],
    ['01/24/01:30', 18, 10,231,52,125],
    ['01/24/01:45', 56, 5,56,66,121],
    ['01/24/02:00', 82, 3,82,25,64],
    ['01/24/02:15', 11, 19,32,43,87],
    ['01/24/02:30', 10, 5,33,84,351],
    ['01/24/02:45', 10, 5,33,84,351],
    ['01/24/03:00', 2, 15,1,77,238],
    ['01/24/03:15', 17, 9,23,80,211],
    ['01/24/03:30', 18, 10,231,52,125],
    ['01/24/03:45', 56, 5,56,66,121],
    ['01/24/04:00', 82, 3,82,25,64],
    ['01/24/04:15', 11, 19,32,43,87],
    ['01/24/04:30', 10, 5,33,84,351],
    ['01/24/04:45', 10, 5,33,84,351],
    ['01/24/05:00', 2, 15,1,77,238],
    ['01/24/05:15', 17, 9,23,80,211],
    ['01/24/05:30', 18, 10,231,52,125],
    ['01/24/05:45', 56, 5,56,66,121],
    ['01/24/06:00', 82, 3,82,25,64],
    ['01/24/06:15', 11, 19,32,43,87],
    ['01/24/06:30', 10, 5,33,84,351],
    ['01/24/06:45', 10, 5,33,84,351],
    ['01/24/07:00', 2, 15,1,77,238],
    ['01/24/07:15', 17, 9,23,80,211],
    ['01/24/07:30', 18, 10,231,52,125],
    ['01/24/07:45', 56, 5,56,66,121],
    ['01/24/08:00', 82, 3,82,25,64],
    ['01/24/08:15', 11, 19,32,43,87],
  ]
function DashBoard() {
    const [device,setDevice] = useState('各種電器');
    const electricity = 15325;
    const bill  = 1234;
    var drawingData  =[];
    if(device === "各種電器" ||device === "---請選擇電器---" ){
        drawingData = LineData;
    }
    else if(device ==='全部電器'){
        drawingData.push(['x','總電量']);
        for(var i = 1;i<LineData.length;i++){
            drawingData.push([LineData[i][0],LineData[i][1]+LineData[i][2]+LineData[i][3]+LineData[i][4]+LineData[i][5]]);
        }
        console.log(drawingData);
    }
    else if(device ==='電視'){
        drawingData.push(['x','電視']);
        for( i = 1;i<LineData.length;i++){
            drawingData.push([LineData[i][0],LineData[i][1]]);
        }
        console.log(drawingData);
    }
    else if(device ==='電風扇'){
        drawingData.push(['x','電風扇']);
        for(i = 1;i<LineData.length;i++){
            drawingData.push([LineData[i][0],LineData[i][2]]);
        }
        console.log(drawingData);
    }
    else if(device ==='烤箱'){
        drawingData.push(['x','烤箱']);
        for(i = 1;i<LineData.length;i++){
            drawingData.push([LineData[i][0],LineData[i][4]]);
        }
        console.log(drawingData);
    }
    else if(device ==='空氣清淨機'){
        drawingData.push(['x','空氣清淨機']);
        for(i = 1;i<LineData.length;i++){
            drawingData.push([LineData[i][0],LineData[i][3]]);
        }
        console.log(drawingData);
    }
    else if(device ==='吹風機'){
        drawingData.push(['x','吹風機']);
        for(i = 1;i<LineData.length;i++){
            drawingData.push([LineData[i][0],LineData[i][5]])
        }
        console.log(drawingData);
    }
    
    return (
        //<Select  add = {setDevice} />
        <Container fluid className='pos'>
            <Row style={{height:'100px'}}>
                <Col xs = '12' lg = '12' sm = '12' md='12' >
                    
                </Col>
            </Row>
            <Row>
                <Col xs = '3' sm = '2' md = '2' lg = '1'><p> </p>
                </Col>
                <Col xs = '9' lg = '11' sm = '12' md='12'>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h1" style={{fontWeight:'600'}}>DashBoard</Card.Title>
                        </Card.Header>
                        <Card.Body>
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
                                
                        <Row>
                                <Col><p> </p></Col>
                        </Row>    
                        <Row>
                
                            <Col md="6" lg = '6' sm = '12' xs='12'>
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
                            <Col md="6" lg = '6' xs='12' sm='12' >
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