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
const Aboutus =()=>{
    return(
        <Container>
            <Row>
                <Col xs = '12' lg = '12' sm = '12' md='12' >
                    <Card>
                            <Card.Body>
                               <p> </p>
                            </Card.Body>
                        </Card>
                </Col>
            </Row>
            <Row>
                <Col xs = '3' sm = '2' md = '2' lg = '1'><p> </p>
                </Col>
                <Col xs = '9' lg = '11' sm = '12' md='12' style={{height:'80rem'}}>
                    <Row style={{height:'100px'}}><Col><p> </p></Col></Row>
                    <big className='title'>About Us</big> 
                   {/* <Card style={{height:'100rem'}}>
                        
                    </Card> */}
                </Col>
                
            </Row>
        </Container>
    );
}

export default Aboutus;