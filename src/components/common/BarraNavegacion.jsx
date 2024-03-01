import { Container, Nav, Navbar } from "react-bootstrap"

const BarraNavegacion = () => {
  return (
    <Navbar expand='lg' bg="dark" data-bs-theme="dark" className="py-3">
      <Container>
        <Navbar.Brand href="/">WebNews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/">Último momento</Nav.Link>
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/">Registro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BarraNavegacion