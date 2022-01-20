import './Header.css';

import { Navbar, Container } from 'react-bootstrap';

function Header() {


  return (
    <Container fluid>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <Navbar.Brand>Careerhack</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}
export default Header;