import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StarWarsService from "../service/star-wars-service";
import StarWars from "./StarWars";
import { Link } from "react-router-dom";
const starWarsService = new StarWarsService();

const IndividualFilm = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  const getFilmsById = async () => {
    if (params.id) {
      setData(await starWarsService.getFilmsById(params.id));
        
    }
  };

  useEffect(() => {
    getFilmsById();
  }, [params]);
  if (data) {
    return (
      <>
    <h1>{data.title}</h1>
    <p>{data.opening_crawl}</p>
    
    </>
    );
  } else {
    return null;
  }
 
  
  
};

export default IndividualFilm;
