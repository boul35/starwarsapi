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

const starWarsServicePeople = new StarWarsServicePeople();

const PeopleCard = ({}) => 


{ const [data,setData] = useState([]);

    const getPeople = async () => {
        const data  = await starWarsServicePeople.getPeople();
        console.log(data);
        console.log("test");
        
        setData(data);


       
    }

  

    useEffect (( ) =>{
        getPeople();
        
    }, []);
    
    return (
        
 

    <Container>
        
        


        

        <Link to={`/people/${ data.url.split('/')[5]}`}>
        <CardGroup className="cards" >
 {data.map(data => <div className="cards2"> <h2>{data.name}</h2>  <h3>{data.birth_year}</h3>    <Link to={`/vehicles/${ data.url.split('/')[5]}`}><h2>Lien vers le Vehicules</h2></Link></div> 
            
            
            )}
 
 </CardGroup>   
        
 </Link>
            
        
    </Container>
    
    );
  
};

export default PeopleCard