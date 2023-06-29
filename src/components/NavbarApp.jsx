import { Navbar as NavBarBT ,Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const Navbar = () =>{
    return(
        <NavBarBT bg="success" variant="light" >
        <Container>
          <Nav className="me-auto ">
          <Link to="/" className="text-white ms-3 text-decoration-none">
              Home
          </Link>
          <Link to="/Favoritos" className="text-white ms-3 text-decoration-none">
              Favoritos
          </Link>
          <Container className="d-flex">
            
          </Container>
          </Nav>   
        <Link to="/" className="text-white ms-3 text-decoration-none">
        <h2>Natural Pic</h2>
        </Link>  
        </Container>
      </NavBarBT>
    )
}

export default Navbar