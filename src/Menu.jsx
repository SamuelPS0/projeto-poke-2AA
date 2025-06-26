import { Navbar, Nav, Container } from 'react-bootstrap';
import './Menu.css'; // onde você colocará a cor rosa customizada

const Menu = () => {
  return (
    <Navbar className="bg-pink" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/home">PokeApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="poke-navbar" />
        <Navbar.Collapse id="poke-navbar">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/pokeflex">PokeFlex</Nav.Link>
            <Nav.Link href="/pokegrid">PokeGrid</Nav.Link>
            <Nav.Link href='/viacep' >ViaCep</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
