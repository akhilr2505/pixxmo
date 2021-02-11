import React from "react";
import "./Header.css";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import Dialog from "@material-ui/core/Dialog";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import MediaQuery, { useMediaQuery } from "react-responsive";
import SignupForm from "./SignupForm";

const Header = () => {
  return (
    <>
      <div>
        <Navbar className="header" bg="dark" variant="dark">
          <Navbar.Brand href="home">
            <video className="logo" autoPlay loop muted>
              <source src="Gamify.mp4" type="video/mp4" />
            </video>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="tournaments">Tournaments</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
