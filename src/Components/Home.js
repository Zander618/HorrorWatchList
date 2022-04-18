import React from "react";
import "./App.css"

const Home = ({ movies }) => {
  return (
  <div className="App">
    <h1>Horror Movies</h1>
    <p>A website for listing top horror movies and highly reccomended lesser seen horrors. </p>
    <p>👻 This months's top spooky pick 👻</p>
      <div className="w3-container">
        <h3>{movies[15].title}</h3>
        <img src={movies[15].cover} alt={movies[15].title} style={{width: 350, height: 550}} className="border"/>
        <p>Release: {movies[15].release}</p>
        <p>Runtime: {movies[15].length}</p>
        <br></br>
        <br></br>
      </div>
  </div>
  )
}

export default Home