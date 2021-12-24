import react from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const navbar = () => {
    return( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Dokter</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Konsultasi</Nav.Link>
      <Nav.Link href="#pricing">Jenis Hewan</Nav.Link>
      <NavDropdown title="Kontak dokter" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Augesvina</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Andrean</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Bancar</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Farhanang</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More Info</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Hewan
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
}

export default navbar
