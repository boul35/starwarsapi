import React, { useEffect, useState } from "react";
import StarWarsService from "../service/star-wars-service";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import StarWars from "./StarWars";
import CardGroup from "react-bootstrap/CardGroup";

import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import useGetData from "../useGetData";

const starWarsService = new StarWarsService();

const FilmCard = ({ starwars }) => {
  const [data, setData] = useState([]);

  const getFilms = async () => {
    const data = await starWarsService.getFilms();
    console.log(data);
    console.log("test");

    setData(data);
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <Container>
      <Col className="my-3">
        <CardGroup className="cards">
          {data.map((data) => (
            <Link to={`/film/${data.url.split("/")[5]}`}>
              <div className="cards2">
                {" "}
                <h2>{data.title}</h2> <h3>Released on : {data.release_date}</h3>{" "}
                <h4>{data.episode_id}th film</h4>{" "}
              </div>
            </Link>
          ))}
        </CardGroup>
      </Col>
    </Container>
  );
};

export default FilmCard;
