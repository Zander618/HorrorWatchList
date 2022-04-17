import React from "react";

const Home = ({ movies }) => {
  return (
  <div >
    <h1>Horror Movies</h1>
    <p>A website for listing top horror movies and highly reccomended lesser seen horrors. </p>
    <p>👻 This months's top spooky pick 👻</p>
    <ul>
      <li>
      <h3>{movies[15].title}</h3>
        <img src={movies[15].cover} alt={movies[15].title}/>
        <p>Release: {movies[15].release}</p>
        <p>Runtime: {movies[15].length}</p>
      </li>
    </ul>
  </div>
  )
}

export default Home