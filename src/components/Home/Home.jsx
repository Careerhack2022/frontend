import './Home.css';
import background from '../Image/background4.jpeg';
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
const Home =()=> {
    return (
        <Container>
            <Row>
                <Col xs = '12' lg = '12' sm = '12' md='12' >
                    
                </Col>
            </Row>
            <Row>
                <Col xs = '1' sm = '2' md = '2' lg = '2'><p> </p>
                </Col>
                <Col xs = '9' lg = '10' sm = '10' md='10' style={{height:'80rem'}}>
                    <Row style={{height:'100px'}}><Col><p> </p></Col></Row>
                    <Card bg='transparent'>
                        <big className='title'>Welcome to Careerhack</big> 
                        <Card.Body>
                            <big style={{color:'white'}}>Realize your energy&nbsp;&nbsp;X&nbsp;&nbsp;Save your energy</big>
                            
                            
                        </Card.Body>
                    </Card>
                    
                    
                </Col>
                
            </Row>
        </Container>
    );
}

export default Home;