import React, { useEffect, useState } from "react";
import StarWarsService from "../service/star-wars-service";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";

const starWarsService = new StarWarsService();

const FilmCard = ({ starwars }) => {
  const [data, setData] = useState([]);

  const getFilms = async () => {
    const data = await starWarsService.getFilms();

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
