import React from "react";
import MovieCard from "../movieCard";
import "./style.css";

const MoviesList = ({ moviesList }) => {
  const movies = moviesList;

  return (
    <div className="card-list">
      {movies
        .filter((movie) => movie.poster_path)
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default MoviesList;
