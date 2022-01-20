import './SideBar.css';
import { Container, Col } from 'react-bootstrap';

function SideBar() {
    return (
      <Container fluid>
        <p>SideBar</p>
        <Col>
          <a href="/">Home</a>
        </Col>
        <Col>
          <a href="/dashboard">Dashboard</a>
        </Col>
      </Container>
    );
}

export default SideBar;