import React from "react";
import "./App.css";
import Movie from "./Movie";

//ternary replace movie cover with addtional details

const Movies = ({ movies, handleClick }) => {

  const movieList = movies.map((movie) => {
    return (
      <Movie movie={movie} handleClick={handleClick}/>
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

export default Movies;
