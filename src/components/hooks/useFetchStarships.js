// src/pokemons/hooks/useFetchPokemons.js
import StarWarsServiceStarShips from "../Starship/Service/star-wars-service-starships";
import { useEffect, useState } from "react";



const starWarsServiceStarShips = new StarWarsServiceStarShips();
const useFetchStarships = () => {
    const [data, setData] = useState([]);
    const getStarships = async () => {
        const data = await starWarsServiceStarShips.getStarships();

        setData(data);
    }
    useEffect(() => {
        getStarships();
    }, []);
    return data;
}
export default useFetchStarships;
