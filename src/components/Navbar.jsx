import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

function MyNavbar() {
  return ( 
    <>
      <Navbar bg="dark" text="light" data-bs-theme="dark" fixed="top" className='mb-auto text-light' opacity="50" >
        <Container>
          <Navbar.Brand href="#home" className='fs-6 fst-italic'>Fuji Portofolio 2024</Navbar.Brand>
          <Nav className="mx-auto fw-semibold" >
            <Nav.Link href="#home" className='hover-zoom'>Home</Nav.Link>
            <Nav.Link href="#about" className='hover-zoom mx-2'>About</Nav.Link> {/* Updated Link */}
            <Nav.Link href="#portofolio" className='hover-zoom'>Portofolio</Nav.Link> {/* Example update */}
            <Nav.Link href="#contact" className='hover-zoom'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
