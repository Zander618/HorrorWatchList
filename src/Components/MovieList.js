import React, { useState } from "react";
import "./App.css";
import AdditionalMovieInfo from "./AdditionalMovieInfo";
import { Button } from "@mui/material";

const MovieList = ({ movies, handleClick }) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleMoreInfo = (movie) => {
    console.log("Show info", movie);
  };

  const movieList = movies.map((movie) => {
    return (
      <div key={movie.id}>
        <h3>{movie.title}</h3>
        <img
          className="border"
          src={movie.cover}
          alt={movie.title}
          style={{ width: 350, height: 550 }}
        />
        <p>Year Released: {movie.release}</p>
        <p>Runtime: {movie.length}</p>

        <Button onClick={() => handleClick(movie)}>Add to my watch list</Button>
        <Button
          onClick={() => {
            handleMoreInfo(movie);
            setButtonPopup(true);
          }}
        >
          More info
        </Button>
        <AdditionalMovieInfo
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          movie={movie}
        />
      </div>
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
