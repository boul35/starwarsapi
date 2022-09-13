import FilmCard from "./Film/FilmsCard";
import Container from "react-bootstrap/Container";
import React from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import IndividualFilm from "./Film/IndividualFilms";
import PeopleCard from "./People/PeopleCard"
import AppContainer from '../auth/components/AppContainer';

import AuthLayout from '../auth/components/AuthLayout';
import StarWars from "./StarWars";
import VehiclesCard from "./Vehicle/VehiclesCard";
import IndividualVehicles from "./Vehicle/IndividualVehicles";
import StarWarsLayOut from "./StarWarsLayOut";
import IndividualPeople from "./People/IndividualPeople";

import IndividualStarShips from "./Starship/IndividualStarShips"
import User from "../auth/components/User";
import Starship from "./Starship/StarShip";

function App() {
  return (

    <BrowserRouter>
      <AppContainer>
        <Container>
          <User />
          <Routes>
            <Route path='login' element={<AuthLayout />} />

            <Route path="/" element={<StarWarsLayOut />}>
              <Route path="/film/" element={<FilmCard />} />
              <Route path="/vehicles/" element={<VehiclesCard />} />
              <Route path="/vehicles/:id" element={<IndividualVehicles />} />
              <Route path="/test" element={<StarWars />} />
              <Route path="/film/:id" element={<IndividualFilm />} />

              <Route path="/people/" element={<PeopleCard />} />
              <Route path="/people/:id" element={<IndividualPeople />} />

              <Route path="/starships/" element={<Starship />} />
              <Route path="/starships/:id" element={<IndividualStarShips />} />

            </Route>

          </Routes>
        </Container>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
