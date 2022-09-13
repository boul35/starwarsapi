import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import StarWarsServicePeople from "./Service/star-wars-service-people";
import useFetchPeople from "../hooks/useFetchPeople";

const PeopleCard = ({}) => {
  const data = useFetchPeople();

  return (
    <Container>
      <CardGroup className="cards">
        {data.map((data) => (
          <Link to={`/people/${data.url.split("/")[5]}`}>
            <div className="cards2">
              {" "}
              <h2>{data.name}</h2> <h3>{data.birth_year}</h3>{" "}
            </div>{" "}
          </Link>
        ))}
      </CardGroup>
    </Container>
  );
};

export default PeopleCard;
