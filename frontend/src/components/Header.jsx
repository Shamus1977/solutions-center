import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {user} = useSelector((state) => state.auth);


    const onLogOut = () => {
        dispatch(logout());
        navigate("/");
        toast.success("You are now logged out.");
    }

    return (
        <Navbar bg="light" expand="lg" className='mb-5'>
            <Container>
                <Navbar.Brand href="/">Solutions Center</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {!user && (
                        <>
                            <Nav.Link href="login">Login</Nav.Link>
                            <Nav.Link href="register-user">Register</Nav.Link>
                        </>
                    )}
                    {user && (
                        <Nav.Link onClick={onLogOut}>Log Out</Nav.Link>
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
