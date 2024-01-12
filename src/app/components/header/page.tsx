"use client"
import { Badge, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

export default function Header() {
  return (
    <>
      <Navbar expand="md" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/"><img
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top logo"
            alt="LOGO"
          /></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className='bg-light' />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            className="text-light bg-black"
          >
            <Offcanvas.Header closeButton closeVariant='white'>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <img
                  src="/logo.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top logo"
                  alt="React Bootstrap logo"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <Badge pill className='button'><Nav.Link href="/">HOME</Nav.Link></Badge>
                <Badge pill className='button'><Nav.Link href="/portfolio">PORTFOLIO</Nav.Link></Badge>
                <Badge pill className='button'><NavDropdown
                  title="ABOUT"
                  id={`offcanvasNavbarDropdown-expand-md`} menuVariant='dark'
                >
                    <NavDropdown.Item href="/skills">SKILLS</NavDropdown.Item>
                    <NavDropdown.Item href="/education">
                      EDUCATION
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/educational_journey">
                      EDUCATIONAL JOURNEY
                    </NavDropdown.Item>
                </NavDropdown>
                </Badge>
                <Badge pill className='button'><Nav.Link href="/contact">CONTACT</Nav.Link></Badge>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
