import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";

import useFetchStarships from "../hooks/useFetchStarships";

const StarShipsCard = () => {
  const data = useFetchStarships();

  return (
    <Container>
      <CardGroup className="cards">
        {data.map((data) => (
          <Link to={`/starships/${data.url.split("/")[5]}`}>
            {" "}
            <div className="cards2">
              {" "}
              <h2>{data.name}</h2> <h3>{data.model}</h3>{" "}
              <h4>Made By : {data.manufacturer}</h4>{" "}
            </div>{" "}
          </Link>
        ))}
      </CardGroup>
    </Container>
  );
};

export default StarShipsCard;
