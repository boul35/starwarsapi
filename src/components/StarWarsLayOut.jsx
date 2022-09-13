import React, { useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useSignout from "../auth/hooks/UseSignout";

const StarWarsLayOut = () => {
  const navbarId = "navbar";
  const disconnect = useSignout();

  return (
    <Container fluid>
      <Navbar>
        <Nav.Link as={Button} onClick={disconnect}>
          Déconnexion
        </Nav.Link>
        <Navbar.Brand as={Link} to="/people">
          <h3>People</h3>
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/film">
          <h3>Films</h3>
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/vehicles">
          <h3>Vehicles</h3>
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/starships">
          <h3>StarShips</h3>
        </Navbar.Brand>
      </Navbar>
      <Outlet />
    </Container>
  );
};

export default StarWarsLayOut;
