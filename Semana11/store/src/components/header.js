import { useContext, useRef } from "react";
import { AuthContext } from "../context/authContext";
import { Navbar, Container, Nav, NavLink, NavDropdown } from "react-bootstrap";
export default function header() {
   
 return(
  <div class="heade">
    <div>
    <i class="far fa-envelope"></i> TortasYa@tortasYa.com.pe &nbsp;<a><i class="fas fa-phone-alt"></i>987 541 364 &nbsp;</a><a><i class="fab fa-whatsapp"></i>987 541 364</a>
   </div>
   <div>
   
   </div>
   <div>
   Encuentranos en: <a href="#login"><i class="fab fa-facebook-square">&nbsp;</i><i class="fab fa-twitter-square">&nbsp;</i></a>
   </div>
 </div>
  //   <Navbar bg="warning" class="navt">
  //   <Container>
  //     <Navbar.Brand  ><i class="far fa-envelope"></i> TortasYa@tortasYa.com.pe &nbsp; <a><i class="fas fa-phone-alt"></i>987 541 364</a> </Navbar.Brand>
  
  //     <Navbar.Toggle />
 
  //     <Navbar.Collapse className="justify-content-end">
  //       <Navbar.Text>
  //       Encuentranos en: <a href="#login"><i class="fab fa-facebook-square">&nbsp;</i><i class="fab fa-twitter-square">&nbsp;</i></a>
  //       </Navbar.Text>
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>
 );
}
