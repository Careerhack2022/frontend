import './Header.css';
import image from '../Image/logo.png';
import { Navbar, Container,Nav } from 'react-bootstrap';
//import {BrowserRouter as Router} from 'react-router-dom';
//import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer } from 'mdbreact';
function Header() {


  return (
    <>

      <Navbar fixed='top' expand = 'sm'bg='dark' variant = 'dark'>
        <Container  >
            
            <Navbar.Brand>
              
              Careerhack
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>

            <Navbar.Collapse>
              {(window.innerWidth<450)?(<><Nav.Link href = '/' style = {{color:'white'}}>Home</Nav.Link>
            <Nav.Link href = '/DashBoard' style = {{color:'white'}}>DashBoard</Nav.Link>
            <Nav.Link href = '/Analysis' style = {{color:'white'}}>Analysis</Nav.Link>
            <Nav.Link href = '/Settings' style = {{color:'white'}}>Settings</Nav.Link></>):(<div><p> </p></div>)}
            
            <Nav.Link href = '/Aboutus' style = {{color:'white'}}>About  Us</Nav.Link>
            </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
    // <Container fluid>
    //   <Navbar bg='light' expand='lg' variant = 'dark'S>
    //     <Container fluid>
    //       <Navbar.Brand  >Careerhack</Navbar.Brand>
    //     </Container>
    //   </Navbar>
    //   {/* <header>
    //         <MDBNavbar color="default-color" dark expand="md">
    //           <MDBNavbarBrand href="/">
    //             <strong>Navbar</strong>
    //           </MDBNavbarBrand>
    //           <MDBNavbarToggler  />
    //           <MDBCollapse  navbar>
    //             <MDBNavbarNav left>
    //               <MDBNavItem active>
    //                 <MDBNavLink to="#">Home</MDBNavLink>
    //               </MDBNavItem>
    //               <MDBNavItem>
    //                 <MDBNavLink to="#">Features</MDBNavLink>
    //               </MDBNavItem>
    //               <MDBNavItem>
    //                 <MDBNavLink to="#">Pricing</MDBNavLink>
    //               </MDBNavItem>
    //               <MDBNavItem>
    //                 <MDBNavLink to="#">Opinions</MDBNavLink>
    //               </MDBNavItem>
    //             </MDBNavbarNav>
    //             <MDBNavbarNav right>
    //               <MDBNavItem>
    //                 <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
    //               </MDBNavItem>
    //               <MDBNavItem>
    //                 <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
    //               </MDBNavItem>
    //               <MDBNavItem>
    //                 <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
    //               </MDBNavItem>
    //             </MDBNavbarNav>
    //           </MDBCollapse>
    //         </MDBNavbar>
    //       </header> */}
    // </Container>
    // <div>
    //   <Router>
    //     <header>
    //       <MDBNavbar color="black" fixed="top">
    //         <MDBContainer>

    //           <MDBNavbarBrand >
    //             <strong>Careerhack</strong>
    //           </MDBNavbarBrand>
    //         </MDBContainer>

            
    //       </MDBNavbar>
    //     </header>
    //   </Router>
    // </div>
  );
}
export default Header;