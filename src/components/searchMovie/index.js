import React, { useState } from "react";
import "./style.css";

const SearchMovie = ({ searchMovies }) => {
  const [query, setQuery] = useState("");
  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          searchMovies(query);
        }}
      >
        <label className="label" htmlFor="query"></label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Nome do filme"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchMovie;
