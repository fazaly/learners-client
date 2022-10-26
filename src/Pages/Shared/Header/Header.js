import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { HiBookOpen } from "react-icons/hi";
import './Header.css';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then( () => {})
        .catch( error => console.error(error))
    }

    return (
        <Navbar className='pe-5 ps-5 p-3 header' expand="lg">
            <Container fluid>
                <Link className='text-decoration-none fs-3 fw-bold title' to='/'><HiBookOpen className='me-1 fs-1'/>Learners.</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="justify-content-end align-items-center flex-grow-1 pe-3"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='me-5 text-decoration-none title' to='/'>Home</Link>
                        <Link className='me-5 text-decoration-none title' to='/course'>Course</Link>
                        <Link className='me-5 text-decoration-none title' to='/faq'>FAQ</Link>
                        <Link className='me-5 text-decoration-none title' to='/blog'>Blog</Link>
                        <>
                            {
                                user?.uid ? 
                                <>
                                    <span>{user?.displayName}</span>
                                    <Link onClick={handleLogOut} className='me-5 text-decoration-none title' to='/login'>Log Out</Link>
                                </>
                                :
                                <>
                                    <Link className='me-5 text-decoration-none title' to='/login'>Login</Link>
                                    <Link className='me-5 text-decoration-none title' to='/register'>Register</Link>
                                </>
                            }
                        </>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;