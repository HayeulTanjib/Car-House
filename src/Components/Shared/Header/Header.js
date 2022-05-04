import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../FireBase/firebase-config';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth);
        navigate('/');
    }

    return (
        <div className='header__section'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Car House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/">Home</Link>
                            <Link to="/addinventory">Add Car</Link>
                            <Link to="/manage-inventory">Manage Car</Link>
                            <Link to="/mycar">My Car</Link>
                            {user ?
                            <>
                            <Button className='py-0' onClick={handleSignOut} variant='danger'>Logout</Button>
                            <p>{user?.email}</p>
                            </>
                            :
                            <>
                            <Link to="/blogs">Blogs</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                            </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;