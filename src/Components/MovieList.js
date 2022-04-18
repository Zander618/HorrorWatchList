import React from "react";
import "./App.css";
import Movies from "./Movies";

const MovieList = ({ movies, handleClick }) => {

  const movieList = movies.map((movie) => {
    return (
      <Movies movie={movie} handleClick={handleClick}/>
    );
  });

  return (
    <div className="App">
      <br></br>
      <br></br>
      <h1>Movie List</h1>
      <br></br>
      {movieList}
      <br></br>
    </div>
  );
};

export default MovieList;
