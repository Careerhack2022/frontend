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
import {useEffect,useState} from 'react';
import { getDeviceDataAll, getDeviceDataOne } from '../api/device';
import Line from "./Linechart";
const Analysis =()=>{
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
      console.log('analysis',demo_day);
      var data = [];
      data.push([
        'x', 'Pot', 'Purifier White','Purifier Black','Purifier Small','Heater','Dryer'
        
      ]);
      if(demo_day!=null){
        for(var i =0;i<demo_day.length;i++){
            data.push([demo_day[i]['timestamp'],demo_day[i]['pot'],demo_day[i]['purifier_white'],demo_day[i]['purifier_black'],demo_day[i]['purifier_small'],demo_day[i]['heater'],demo_day[i]['dryer']])
           
        }
      }
      
    console.log('analysis',data);

    return(
        <Container>
            <Row style={{height:'100px'}}>
                <Col xs = '12' lg = '12' sm = '12' md='12' >
                    
                </Col>
            </Row>
            <Row>
                <Col  sm = '2' md = '2' lg = '1'><p> </p>
                </Col>
                <Col xs = '12' lg = '11' sm = '12' md='12'>
                   <Card style={{height:'100rem'}} bg = 'transparent'>
                        <Card.Header>
                            <Card.Title ><big className='title'>Analysis</big> </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Col xs='12' md='12' sm='12' lg='12'>
                                <Card style={{height:'1000px'}}>
                                    {(demo_day!=null)?(<Line LineData={data}/>):(<></>)}
                                </Card>
                            </Col>
                        </Card.Body>
                    
                    </Card>
                </Col>
                
            </Row>
        </Container>
    );
}

export default Analysis;