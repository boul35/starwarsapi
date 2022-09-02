import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StarWarsService from "../Film/Service/star-wars-service";
import StarWarsServiceStarShips from "../Starship/Service/star-wars-service-starships";
import StarWarsServicePeople from "../People/Service/star-wars-service-people";
import StarWarsServiceVehicles from "../Vehicle/Service/star-wars-service-vehicule";
import { Link } from "react-router-dom";
import CardGroup from "react-bootstrap/CardGroup";
import useGetData from "../../useGetData";
import Card from "react-bootstrap/Card";
const starWarsService = new StarWarsService();
const starWarsServiceStarShips = new StarWarsServiceStarShips();
const starWarsServicePeople = new StarWarsServicePeople();
const starWarsServiceVehicles = new StarWarsServiceVehicles();

const IndividualVehicles = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  const getVehiclesById = async () => {
    if (params.id) {
      setData(await starWarsServiceVehicles.getVehiclesById(params.id));
    }
  };

  const films = useGetData(
    starWarsService.getFilmsById.bind(starWarsService),
    data?.films
  );

  const starships = useGetData(
    starWarsServiceStarShips.getStarshipsById.bind(starWarsServiceStarShips),
    data?.starships
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
    getVehiclesById();
  }, [params]);
  if (data) {
    return (
      <div>
        <h1>{data.name}</h1>
        <h2>{data.model}</h2>
        <h3>{data.manufacturer}</h3>
        <Card className="cards2">
          <h4>Cargo Capacity: {data.cargo_capacity}</h4>
          <h4>Consumables: {data.consumables}</h4>
          <h4>Cost in credits: {data.cost_in_credits}</h4>
          <h4>Crew: {data.crew}</h4>
          <h4>Max Atmosphering Speed: {data.max_atmosphering_speed}</h4>
          <h4>Passengers: {data.passengers}</h4>
        </Card>
        <CardGroup className="cards">
          {starships.map((starship) => (
            <Card className="cards2" style={{ width: "18rem" }}>
              {" "}
              <Card.Body>
                {" "}
                <Card.Title>{starship.name}</Card.Title>
                <h2>{starship.model}</h2>{" "}
                <h2>Made By : {starship.manufacturer}</h2>{" "}
              </Card.Body>{" "}
            </Card>
          ))}
        </CardGroup>
        <h1>Films</h1>
        <CardGroup className="cards">
          {films.map((film) => (
            <Link to={`/film/${film.url.split("/")[5]}`}>
              {" "}
              <Card className="cards2" style={{ width: "18rem" }}>
                {" "}
                <Card.Body>
                  {" "}
                  <Card.Title>
                    <h1>{film.title}</h1>
                  </Card.Title>
                  <h2>Released on: {film.release_date}</h2>
                  <h2>{film.episode_id}th film</h2>
                </Card.Body>{" "}
              </Card>
            </Link>
          ))}
        </CardGroup>
        <h1>Pilots</h1>

        <CardGroup className="cards">
          {pilots.map((character) => (
            <Link to={"`/people/${character.url.split(" / ")[5]}` "}>
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

export default IndividualVehicles;
