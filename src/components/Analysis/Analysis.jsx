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

const Analysis =()=>{
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
                                <Card style={{height:'800px'}}>

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