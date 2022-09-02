import FilmCard from "./Film/FilmsCard";
import Container from "react-bootstrap/Container";
import React from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import IndividualFilm from "./Film/IndividualFilms";
import PeopleCard from "./People/PeopleCard"

import StarWars from "./StarWars";
import VehiclesCard from "./Vehicle/VehiclesCard";
import IndividualVehicles from "./Vehicle/IndividualVehicles";
import StarWarsLayOut from "./StarWarsLayOut";
import IndividualPeople from "./People/IndividualPeople";
import StarShipsCard from "./Starship/StarShipsCard"
import IndividualStarShips from "./Starship/IndividualStarShips"

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
