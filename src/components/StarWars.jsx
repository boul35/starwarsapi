import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import StarWarsService from "../service/star-wars-service";
import FilmCard from "./FilmsCard";

const starWarsService = new StarWarsService();

const StarWars = () => {
  const [next, setNext] = useState(null);
  const [initial, setInitial] = useState([]);
  const [data, setData] = useState([]);

  const fetchNext = throttle(async () => {
    if (
      window.scrollY + window.innerHeight ===
      document.body.getBoundingClientRect().height
    ) {
      if (next) {
        const starwars = await starWarsService.getStarWarsWithReturnedUrl(next);

        if (starwars) {
          setInitial([...initial, ...starwars.results]);
          setNext(starwars.next);
        }
      }
    }
  });

  const initialGetStarWars = async () => {
    const { results: starwars, next } = await starWarsService.getStarWars();

    setInitial(starwars);
    setNext(next);
  };

  const getStarWars = async () => {
    if (initial.length) {
      setData(
        await Promise.all(
          initial.map((starwars) =>
          starWarsService.getStarWarsWithReturnedUrl(starwars.url)
          )
        )
      );
    }
  };

  useEffect(() => {
    initialGetStarWars();
  }, []);

  useEffect(() => {
    getStarWars();
  }, [initial]);

  useEffect(() => {
    window.addEventListener("scroll", fetchNext);

    return () => {
      window.removeEventListener("scroll", fetchNext);
    };
  }, [next]);

  return starwars={data}
  
  
};

export default StarWars;
