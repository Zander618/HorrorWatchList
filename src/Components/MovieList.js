import React from "react";
import "./App.css";

const MovieList = ({ movies, handleClick, handleMoreInfo, setButtonPopup }) => {
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
        <button onClick={() => handleClick(movie)}>Add to my watch list</button>
        <button
          onClick={() => {
            handleMoreInfo(movie);
            setButtonPopup(true);
          }}
        >
          More info
        </button>
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
