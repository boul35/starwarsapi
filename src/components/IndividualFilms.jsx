import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StarWarsService from "../service/star-wars-service";
import StarWarsServiceStarShips from "../service/star-wars-service-starships";
import StarWarsServicePlanets from "../service/star-wars-service-planets";
import StarWarsServicePeople from "../service/star-wars-service-people";
import StarWarsServiceVehicles from "../service/star-wars-service-vehicule";
import StarWars from "./StarWars";
import { Link } from "react-router-dom";
import CardGroup from "react-bootstrap/CardGroup";
import useGetData from "../useGetData";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const starWarsService = new StarWarsService();
const starWarsServiceStarShips = new StarWarsServiceStarShips();
const starWarsServicePlanets = new StarWarsServicePlanets();
const starWarsServicePeople = new StarWarsServicePeople();
const starWarsServiceVehicles = new StarWarsServiceVehicles();

const IndividualFilm = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  const getFilmsById = async () => {
    if (params.id) {
      setData(await starWarsService.getFilmsById(params.id));
    }
  };

  const starships = useGetData(
    starWarsServiceStarShips.getStarshipsById.bind(starWarsServiceStarShips),
    data?.starships
  );

  const planets = useGetData(
    starWarsServicePlanets.getPlanetsById.bind(starWarsServicePlanets),
    data?.planets
  );

  const characters = useGetData(
    starWarsServicePeople.getPeopleById.bind(starWarsServicePeople),
    data?.characters
  );

  const vehicles = useGetData(
    starWarsServiceVehicles.getVehiclesById.bind(starWarsServiceVehicles),
    data?.vehicles
  );

  useEffect(() => {
    getFilmsById();
  }, [params]);
  if (data) {
    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.opening_crawl}</p>
        <h1>Starships</h1>
        <CardGroup className="cards">
          {starships.map((starship) => (
            <Link to={`/starships/${starship.url.split("/")[5]}`}>
              <Card className="cards2" style={{ width: "18rem" }}>
                {" "}
                <Card.Body>
                  {" "}
                  <Card.Title>{starship.name}</Card.Title>
                  <h2>{starship.model}</h2>{" "}
                  <h2>Made By : {starship.manufacturer}</h2>{" "}
                </Card.Body>{" "}
              </Card>
            </Link>
          ))}
        </CardGroup>
        <h1>People</h1>
        <CardGroup className="cards">
          {characters.map((character) => (
            <Link to={`/people/${character.url.split("/")[5]}`}>
              <Card className="cards2" style={{ width: "18rem" }}>
                {" "}
                <Card.Body>
                  {" "}
                  <Card.Title>{character.name}</Card.Title>
                  <h2>{character.birth_year}</h2>
                </Card.Body>{" "}
              </Card>
            </Link>
          ))}
        </CardGroup>
        <h1>Vehicles</h1>
        <CardGroup className="cards">
          {vehicles.map((vehicle) => (
            <Link to={`/vehicle/${vehicle.url.split("/")[5]}`}>
              <Card className="cards2" style={{ width: "18rem" }}>
                {" "}
                <Card.Body>
                  {" "}
                  <Card.Title>{vehicle.name}</Card.Title>
                  <h2>{vehicle.model}</h2>
                  <h2>{vehicle.manufacturer}</h2>
                </Card.Body>{" "}
              </Card>
            </Link>
          ))}
        </CardGroup>
      </div>
    );
  } else {
    return null;
  }
};

export default IndividualFilm;
