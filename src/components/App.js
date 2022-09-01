import FilmCard from "./FilmsCard";
import Container from "react-bootstrap/Container";
import React from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import IndividualFilm from "./IndividualFilms";
import PeopleCard from "./PeopleCard"
import PokeCard from "./test";
import StarWars from "./StarWars";
import VehiclesCard from "./VehiclesCard";
import IndividualVehicles from "./IndividualVehicles";
import StarWarsLayOut from "./StarWarsLayOut";
import IndividualPeople from "./IndividualPeople";
import StarShipsCard from "./StarShipsCard"
import IndividualStarShips from "./IndividualStarShips"

function App() {
  return (

    <BrowserRouter>
    <Container>
 
      <Routes>
      
        
        <Route path="/" element={<StarWarsLayOut />}>
        <Route path="/film/" element={<FilmCard />} />
        <Route path="/vehicles/" element={<VehiclesCard />} />
        <Route path="/vehicles/:id" element={<IndividualVehicles />} />
          <Route path="/test" element={<StarWars />} />
          <Route path="/film/:id" element={<IndividualFilm />} />

          <Route path="/people/" element={<PeopleCard />} />
          <Route path="/people/:id" element={<IndividualPeople />} />

          <Route path="/starships/" element={<StarShipsCard />} />
          <Route path="/starships/:id" element={<IndividualStarShips />} />
          
        </Route>
     
      </Routes>
    </Container>
  </BrowserRouter>
  );
}

export default App;
