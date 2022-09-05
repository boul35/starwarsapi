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

const IndividualPeople = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  const getPeopleById = async () => {
    if (params.id) {
      setData(await starWarsServicePeople.getPeopleById(params.id));
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
    getPeopleById();
  }, [params]);
  if (data) {
    return (
      <div>
        <CardGroup className="cards">
          <Card className="cards2">
            <h1>{data.name}</h1>
            <p>Birth Year : {data.birth_year}</p>
            <p>Eye Color : {data.eye_color}</p>
            <p>Hair Color : {data.hair_color}</p>
            <p>Mass : {data.mass}</p>
            <p>Skin Color : {data.skin_color}</p>
          </Card>
        </CardGroup>
        <h1>StarShips</h1>
        <CardGroup className="cards">
          {starships.map((starship) => (
            <Card className="cards2" style={{ width: "18rem" }}>
              {" "}
              <Card.Body>
                <Link to={`/starships/${starship.url.split("/")[5]}`}>
                  {" "}
                  <Card.Title>
                    <h1>{starship.name}</h1>
                  </Card.Title>
                  <h2>{starship.model}</h2>{" "}
                  <h2>Made By : {starship.manufacturer}</h2>
                </Link>{" "}
              </Card.Body>{" "}
            </Card>
          ))}
        </CardGroup>
        <h1>Films</h1>
        <CardGroup className="cards">
          {films.map((film) => (
            <Card className="cards2" style={{ width: "18rem" }}>
              {" "}
              <Card.Body>
                <Link to={`/film/${film.url.split("/")[5]}`}>
                  {" "}
                  <Card.Title>
                    <h1>{film.title}</h1>
                  </Card.Title>
                  <h2>Released on: {film.release_date}</h2>
                  <h2>{film.episode_id}th film</h2>
                </Link>
              </Card.Body>{" "}
            </Card>
          ))}
        </CardGroup>
        <h1>Vehicles</h1>
        <CardGroup className="cards">
          {vehicles.map((vehicle) => (
            <Card className="cards2" style={{ width: "18rem" }}>
              {" "}
              <Card.Body>
                <Link to={`/vehicles/${vehicle.url.split("/")[5]}`}>
                  {" "}
                  <Card.Title>
                    <h1>{vehicle.name}</h1>
                  </Card.Title>
                  <h2>{vehicle.model}</h2>
                </Link>
              </Card.Body>{" "}
            </Card>
          ))}
        </CardGroup>
      </div>
    );
  } else {
    return null;
  }
};

export default IndividualPeople;
