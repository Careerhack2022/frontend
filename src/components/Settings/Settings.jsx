
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

const Settings =()=>{
    return(
        <Container>
            <Row style={{height:'100px'}}>
                <Col xs = '12' lg = '12' sm = '12' md='12' >
                    
                </Col>
            </Row>
            <Row>
                <Col xs = '3' sm = '2' md = '2' lg = '1'><p> </p>
                </Col>
                <Col xs = '9' lg = '11' sm = '12' md='12'>
                   <Card style={{height:'100rem'}}>
                   <Card.Header>
                            <Card.Title as="h1" style={{fontWeight:'600'}}>Settings</Card.Title>
                        </Card.Header>
                    </Card>
                </Col>
                
            </Row>
        </Container>
    );
}

export default Settings;