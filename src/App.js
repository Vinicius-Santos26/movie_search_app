import React, { useState } from "react";
import "./App.css";
import SearchMovie from "./components/searchMovie";
import MoviesList from "./components/moviesList";
import { fetchData } from "./services/api";

const App = () => {
  const [movies, setMovies] = useState([]);
  const searchMovies = async (query) => {
    try {
      const fetchedData = await fetchData(query);
      setMovies(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovie searchMovies={searchMovies} />
      <MoviesList moviesList={movies} />
    </div>
  );
};

export default App;
