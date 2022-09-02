import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import StarWarsServiceStarShips from "./Service/star-wars-service-starships";

const starWarsServiceStarShips = new StarWarsServiceStarShips();

const StarShipsCard = ({}) => {
  const [data, setData] = useState([]);

  const getStarships = async () => {
    const data = await starWarsServiceStarShips.getStarships();
    console.log(data);
    console.log("test");

    setData(data);
  };

  useEffect(() => {
    getStarships();
  }, []);

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
