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

const IndividualStarShips = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  const getStarshipsById = async () => {
    if (params.id) {
      setData(await starWarsServiceStarShips.getStarshipsById(params.id));
    }
  };

  const films = useGetData(
    starWarsService.getFilmsById.bind(starWarsService),
    data?.films
  );

  const planets = useGetData(
    starWarsServicePlanets.getPlanetsById.bind(starWarsServicePlanets),
    data?.planets
  );

  const pilots = useGetData(
    starWarsServicePeople.getPeopleById.bind(starWarsServicePeople),
    data?.pilots
  );

  const vehicles = useGetData(
    starWarsServiceVehicles.getVehiclesById.bind(starWarsServiceVehicles),
    data?.vehicles
  );

  useEffect(() => {
    getStarshipsById();
  }, [params]);
  if (data) {
    return (
      <div>
        <CardGroup className="cards">
          <Card className="cards2">
            <h1>{data.name}</h1>
            <h2>{data.model}</h2>
          </Card>
        </CardGroup>

        <h1>Films</h1>
        <CardGroup className="cards">
          {films.map((film) => (
            <Card className="cards2" style={{ width: "18rem" }}>
              {" "}
              <Card.Body>
                <Link to={`/film/${film.url.split("/")[5]}`}>
                  {" "}
                  <Card.Title>{film.title}</Card.Title>
                  <h2>Released on :{film.release_date}</h2>
                  <h2>{film.episode_id}th film</h2>
                </Link>
              </Card.Body>{" "}
            </Card>
          ))}
        </CardGroup>
        <h1>Characters</h1>

        <CardGroup className="cards">
          {pilots.map((character) => (
            <Link to={`/people/${character.url.split("/")[5]}`}>
              {" "}
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
      </div>
    );
  } else {
    return null;
  }
};

export default IndividualStarShips;
