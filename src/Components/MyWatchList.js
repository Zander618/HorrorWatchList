import React from "react";

const MyMovies = ({ movies }) => {
  const myWatchList = movies.map((movie) => {
    return (
      <li key={movie.id}>
        <h3>{movie.title}</h3>
        <img src={movie.cover} alt={movie.title} />
        <p>Release: {movie.release}</p>
        <p>Runtime: {movie.length}</p>
        <button>Add to my watch list</button>
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
