import React from "react";

const MyMovies = ({ movies, handleClick }) => {
  const myWatchList = movies.map((movie) => {
    return (
      <li key={movie.id}>
        <h3>{movie.title}</h3>
        <img src={movie.cover} alt={movie.title} />
        <p>Year Released: {movie.release}</p>
        <p>Runtime: {movie.length}</p>
        <button onClick={handleClick}>Remove From List</button>
      </li>
    );
  });

  return (
    <div>
      <ul>{myWatchList}</ul>
    </div>
  );
};

export default MyMovies;
