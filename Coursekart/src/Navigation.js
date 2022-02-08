import React from "react";
import {Navbar, Nav, Form, Container, Button, FormControl} from 'react-bootstrap'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">CourseKart</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Categories</Nav.Link>
              <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search For Anything"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            </Nav>
            <Nav.Link href="#action2">Teach on CourseKart</Nav.Link>
            <Button variant="light"><Link to='/signup'>SignUp</Link></Button>
            <Button variant="dark">LogIN</Button>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation