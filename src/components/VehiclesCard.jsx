import React, { useEffect, useState } from "react";
import StarWarsService from "../service/star-wars-service";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import StarWars from "./StarWars";
import StarWarsServiceStarVehicles from "../service/star-wars-service-vehicule";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import useGetData from "../useGetData";
import CardGroup from "react-bootstrap/CardGroup";
const starWarsServiceStarVehicles = new StarWarsServiceStarVehicles();

const VehiclesCard = ({}) => {
  const [data, setData] = useState([]);

  const getVehicles = async () => {
    const data = await starWarsServiceStarVehicles.getVehicles();

    setData(data);
  };

  useEffect(() => {
    getVehicles();
  }, []);

  return (
    <Container>
      <Col className="my-3">
        <h1>Vehicles</h1>
        <CardGroup className="cards">
          {data.map((data) => (
            <Link to={`/vehicles/${data.url.split("/")[5]}`}>
              <div className="cards2">
                {" "}
                <h2>{data.name}</h2> <h3>{data.model}</h3>{" "}
                <h4>{data.manufacturer}</h4>{" "}
              </div>
            </Link>
          ))}
        </CardGroup>
      </Col>
    </Container>
  );
};

export default VehiclesCard;
