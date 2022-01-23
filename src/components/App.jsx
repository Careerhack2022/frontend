import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Home from './Home/Home';
import DashBoard from './DashBoard/DashBoard';
import Analysis from './Analysis/Analysis';
import Settings from './Settings/Settings';
import Aboutus from './Aboutus/Aboutus';
import { Container, Row, Col } from 'react-bootstrap';
import background from './Image/background4.jpeg';
function App() {
  return (
    <div  style ={{backgroundImage:`url(${background})`}}>
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
            <BrowserRouter>
              <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/Analysis" element={<Analysis />} />
                <Route path="/Aboutus" element={<Aboutus/>} />
                <Route path="/Settings" element={<Settings />} />
              </Routes>
            </BrowserRouter>
          </Row>
        </Col>
      </Row>
    </Container>

    </div>
    
  );
}

export default App;
