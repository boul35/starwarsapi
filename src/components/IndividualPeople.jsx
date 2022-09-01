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
import CardGroup from 'react-bootstrap/CardGroup';
import useGetData from "../useGetData"
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
const starWarsService = new StarWarsService();
const starWarsServiceStarShips = new StarWarsServiceStarShips();
const starWarsServicePlanets = new StarWarsServicePlanets();
const starWarsServicePeople = new StarWarsServicePeople();
const starWarsServiceVehicles = new StarWarsServiceVehicles();

const IndividualPeople = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  const getPeopleById = async () => {
    if (params.id) {
      setData(await starWarsServiceVehicles.getPeopleById(params.id));
        
    }
  };
  
  const films = useGetData(
    starWarsService.getFilmsById.bind(starWarsService),
    data?.films
  )

  const starships = useGetData(
    starWarsServiceStarShips.getStarshipsById.bind(starWarsServiceStarShips),
    data?.starships
  )

  const planets = useGetData(
    starWarsServicePlanets.getPlanetsById.bind(starWarsServicePlanets),
    data?.planets
  )

  const pilots = useGetData(
    starWarsServicePeople.getPeopleById.bind(starWarsServicePeople),
    data?.pilots
  )

  const vehicles = useGetData(
    starWarsServiceVehicles.getVehiclesById.bind(starWarsServiceVehicles),
    data?.vehicles
  )

  useEffect(() => {
    getPeopleById();
  }, [params]);
  if (data) {
    return (
      <div>
    <h1>{data.name}</h1>
    <p>{data.birth_year}</p>
    <h1>{data.eye_color}</h1>
    <p>{data.hair_color}</p>
    <p>{data.mass}</p>
    <p>{data.skin_color}</p>
    <Card className="cards2">
        <h4>Cargo Capacity: {data.cargo_capacity}</h4>
        <h4>Consumables: {data.consumables}</h4>
        <h4>Cost in credits: {data.cost_in_credits}</h4>
        <h4>Crew: {data.crew}</h4>
        <h4>Max Atmosphering Speed: {data.max_atmosphering_speed}</h4>
        <h4>Passengers: {data.passengers}</h4>

    </Card>
    <CardGroup className="cards" >
    
    {starships.map(starship => <Card className="cards2" style={{ width: '18rem' }}> <Card.Body> <Card.Title>{starship.name}</Card.Title><h2>{starship.model}</h2> <h2>Made By :  {starship.manufacturer}</h2> </Card.Body> </Card> )}
            
    </CardGroup>
    <h1>Films</h1>
    <CardGroup className="cards" >



    
    
    {films.map(film =><Link to={`/film/${ data.url.split('/')[5]}`}> <Card className="cards2" style={{ width: '18rem' }}> <Card.Body> <Card.Title>{film.title}</Card.Title><h2>{film.release_date}</h2><h2>{film.episode_id}th film</h2></Card.Body> </Card></Link> )}
            
    </CardGroup>    
    <h1>Pilots</h1>  
    <CardGroup className="cards" >
    {pilots.map(character => <Card className="cards2" style={{ width: '18rem' }}> <Card.Body> <Card.Title>{character.name}</Card.Title><h2>{character.birth_year}</h2></Card.Body> </Card> )}
            
            </CardGroup>             
                
    </div>
    );
  } else {
    return null;
  }
 
  
  
};

export default IndividualPeople;