import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    const [isLoggedin, setIsLoggedin] = useState(false);
    return (
        <Navbar bg="light" expand="lg" className='mb-5'>
            <Container>
                <Navbar.Brand href="/">Solutions Center</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {!isLoggedin && (
                        <>
                            <Nav.Link href="login">Login</Nav.Link>
                            <Nav.Link href="register-user">Register</Nav.Link>
                        </>
                    )}
                    {isLoggedin && (
                        <Nav.Link href="login">Log Out</Nav.Link>
                    )}
                    <NavDropdown title="language/Framework" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/language/java">
                        Java
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/language/javascript">
                        JavaScript
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/language/react">
                        React
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/language/node">
                        Node
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
