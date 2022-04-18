import React from "react";
import "./App.css";

const MyMovies = ({ movies, handleClick }) => {
  const myWatchList = movies.map((movie) => {
    return (
      <div key={movie.id} >
        <h3>{movie.title}</h3>
        <img
          className="border"
          src={movie.cover}
          alt={movie.title}
          style={{ width: 350, height: 550 }}
        />
        <p>Year Released: {movie.release}</p>
        <p>Runtime: {movie.length}</p>
        <button onClick={() => handleClick(movie)}>Remove From List</button>
      </div>
    );
  });

  return (
    <div className="App">
      <br></br>
      <br></br>
      <h1>My Watch List</h1>
      <br></br>
      {myWatchList}
      <br></br>
      <br></br>
    </div>
  );
};

export default MyMovies;
