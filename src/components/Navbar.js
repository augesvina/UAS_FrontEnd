// Navbar.js
import react from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Content from './Content';
import Dokter from '../comments/Dokter';
import Artikel from "../comments/Artikel";

const navbar = () => {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="./Footer.js">Wunderbar</Navbar.Brand>
            {/* <Nav.Link as={Link} to={"/home"}>Wunderbar</Nav.Link> */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/doctor"}>Doctor</Nav.Link>
                <Nav.Link as={Link} to={"/article"}>Article</Nav.Link>
                {/* <Link to="/home">Ahayy</Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
            <Routes>
              <Route exact path="/home" element={<Content/>} />
              <Route exact path="/doctor" element={<Dokter/>} />
              <Route exact path="/article" element={<Artikel/>}/>
            </Routes>
      </div>
    </Router>
  );
};

export default navbar;
