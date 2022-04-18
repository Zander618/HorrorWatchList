import React from 'react'
import AdditionalMovieInfo from "./AdditionalMovieInfo";

const MovieList = ({ movies, handleClick }) => {
 
  const movieList = movies.map((movie) => {
    return(
      <li key={movie.id}>
        <AdditionalMovieInfo trigger={false}>
          <h3>Popup</h3>
        </AdditionalMovieInfo>
        <h3>{movie.title}</h3>
        <img src={movie.cover} alt={movie.title}/>
        <p>Year Released: {movie.release}</p>
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