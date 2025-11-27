// ...existing code...
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="fw-bold">
            🎣 React 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>

              <NavDropdown title="Components" id="components-dropdown">
                <NavDropdown.Item as={NavLink} to="/functional">Functional Component</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/class">Class Component</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/lifecycle">Lifecycle Methods</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Hooks" id="hooks-dropdown">
                <NavDropdown.Item as={NavLink} to="/hooks/useState">useState</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/hooks/useEffect">useEffect</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/hooks/useRef">useRef</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/hooks/useContext">useContext</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/hooks/useReducer">useReducer</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/hooks/useMemoAndCallback">useMemo & useCallback</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/hooks/useImperativeHandle">useImperativeHandle</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Custom Hooks" id="custom-hooks-dropdown">
                <NavDropdown.Item as={NavLink} to="/custom/counter">Custom Hooks IMP Examples</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/custom/post-list">useFetch</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/custom/debounced-input">useDebounce</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
// ...existing code...