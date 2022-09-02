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
