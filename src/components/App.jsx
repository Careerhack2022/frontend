import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Home from './Home/Home';
import DashBoard from './DashBoard/DashBoard';

import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={2} lg={2}>
          <SideBar />
        </Col>
        <Col md={10} lg={10}>
          <Row>
            <Header />
          </Row>
          <Row>
            <HashRouter>
              <Routes>
                <Route exact path="/" element={ <Home/> } />
                <Route exact path="/dashboard" element={ <DashBoard/> } />
              </Routes>
            </HashRouter>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
