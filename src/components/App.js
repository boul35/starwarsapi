import FilmCard from "./FilmsCard";
import Container from "react-bootstrap/Container";
import React from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import IndividualFilm from "./IndividualFilms";

import PokeCard from "./test";
import StarWars from "./StarWars";

function App() {
  return (

    <BrowserRouter>
    <Container>
 
      <Routes>
      
        <Route>
        
        <Route path="/film/" element={<FilmCard />} />
          <Route path="/test" element={<StarWars />} />
          <Route path="/film/:id" element={<IndividualFilm />} />
        </Route>
     
      </Routes>
    </Container>
  </BrowserRouter>
  );
}

export default App;
