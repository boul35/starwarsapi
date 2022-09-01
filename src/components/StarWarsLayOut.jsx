import React, { useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";

const StarWarsLayOut = () => {
  const navbarId = "navbar";

  return (
    <Container fluid>
      <Navbar>
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
