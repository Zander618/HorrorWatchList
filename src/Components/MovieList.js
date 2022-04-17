import React from 'react'

const MovieList = ({ movies, handleClick }) => {
 
  const movieList = movies.map((movie) => {
    return(
      <li key={movie.id}>
        <h3>{movie.title}</h3>
        <img src={movie.cover} alt={movie.title}/>
        <p>Release: {movie.release}</p>
        <p>Runtime: {movie.length}</p>
        <button onClick={() => handleClick(movie)}>Add to my watch list</button>
        <button >More info</button>
      </li>
    )
  })
  
  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movieList}
      </ul>
    </div>
  )
}

export default MovieList