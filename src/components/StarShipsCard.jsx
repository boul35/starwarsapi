import React, { useEffect, useState } from 'react'
import StarWarsService from '../service/star-wars-service';
import { Link, useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';
import StarWars from "./StarWars";
import CardGroup from 'react-bootstrap/CardGroup';
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import useGetData from '../useGetData';
import StarWarsServicePeople from "../service/star-wars-service-people";
import StarWarsServiceStarShips from "../service/star-wars-service-starships";

const starWarsServiceStarShips = new StarWarsServiceStarShips();

const StarShipsCard = ({}) => 


{ const [data,setData] = useState([]);

    const getStarships = async () => {
        const data  = await starWarsServiceStarShips.getStarships();
        console.log(data);
        console.log("test");
        
        setData(data);


       
    }

  

    useEffect (( ) =>{
        getStarships();
        
    }, []);
    
    return (
        
 

    <Container>
        
        


        

        
        <CardGroup className="cards" >
 {data.map(data =><Link to={`/starships/${data.url.split('/')[5]}`}>  <div className="cards2"> <h2>{data.name}</h2>  <h3>{data.model}</h3> <h4>Made By : {data.manufacturer}</h4>  </div>  </Link>
            
            
            )}
 
 </CardGroup>   
        
 
            
        
    </Container>
    
    );
  
};

export default StarShipsCard