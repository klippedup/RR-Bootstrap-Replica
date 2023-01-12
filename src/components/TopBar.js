import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Burger, Menu } from './components';

function TopBar() {
const [open, setOpen] = useState(false);

return (    
<Navbar bg="light" expand="lg" >
    <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <Image src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
        </Nav>
        <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{' '}
        </Nav>
        <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        <Nav className="">

        </Nav>
    </Navbar.Collapse>
</Navbar> 
)
}

export default TopBar;
