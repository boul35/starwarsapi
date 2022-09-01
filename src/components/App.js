import FilmCard from "./FilmsCard";
import Container from "react-bootstrap/Container";
import React from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import IndividualFilm from "./IndividualFilms";

import PokeCard from "./test";
import StarWars from "./StarWars";
import VehiclesCard from "./VehiclesCard";
import IndividualVehicles from "./IndividualVehicles";

function App() {
  return (

    <BrowserRouter>
    <Container>
 
      <Routes>
      
        <Route>
        
        <Route path="/film/" element={<FilmCard />} />
        <Route path="/vehicles/" element={<VehiclesCard />} />
        <Route path="/vehicles/:id" element={<IndividualVehicles />} />
          <Route path="/test" element={<StarWars />} />
          <Route path="/film/:id" element={<IndividualFilm />} />
        </Route>
     
      </Routes>
    </Container>
  </BrowserRouter>
  );
}

export default App;
