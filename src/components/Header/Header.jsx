import './Header.css';

import { Navbar, Container,Nav } from 'react-bootstrap';
import {BrowserRouter as Router} from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer } from 'mdbreact';
function Header() {


  return (
    <>

      <Navbar fixed='top' expand = 'sm'bg='dark' variant = 'dark'>
        <Container collapseOnSelect >
            <Navbar.Brand>
              Careerhack
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>

            <Navbar.Collapse>
              <Nav.Link href = '/'>Home</Nav.Link>
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