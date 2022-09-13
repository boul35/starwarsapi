// src/pokemons/hooks/useFetchPokemons.js
import StarWarsServicePeople from "../People/Service/star-wars-service-people";
import { useEffect, useState } from "react";



const starWarsServicePeople = new StarWarsServicePeople();
const useFetchPeople = () => {
    const [data, setData] = useState([]);
    const getPeople = async () => {
        const data = await starWarsServicePeople.getPeople();

        setData(data);
    }
    useEffect(() => {
        getPeople();
    }, []);
    return data;
}
export default useFetchPeople;
