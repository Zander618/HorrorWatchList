import React, { useState, useEffect } from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyWatchList from "./MyWatchList";
import Movies from "./Movies";
import MovieForm from "./MovieForm";

const App = () => {
  const [movies, setMovies] = useState(null);
  const [myMovies, setMyMovies] = useState([]);
  

  useEffect(() => {
    document.title = "Horror Watcher"
    fetch("http://localhost:3001/movies")
      .then((resp) => resp.json())
      .then((data) => setMovies(data));
  }, []);

  if (!movies) {
    return <h2>LOADING......</h2>;
  }

  const addToWatch = (movie) => {
    if (!myMovies.includes(movie)) {
      const updateMyMovies = [...myMovies, movie];
      setMyMovies(updateMyMovies);
      alert("Added to My Watch List");
    } else {
      alert("In List Already");
    }
  };

  const handleRemove = (movie) => {
    const remover = [...myMovies].filter((myMovie) => myMovie.id !== movie.id);
    setMyMovies(remover);
  };



  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route
          path="/Movies"
          element={
            <Movies
              movies={movies}
              handleClick={addToWatch}
            />
          }
        />
        <Route
          path="/MyWatchList"
          element={<MyWatchList movies={myMovies} handleClick={handleRemove} />}
        />
        <Route path="/MovieForm" element={<MovieForm movies={movies} setMovies={setMovies}/>} />
      </Routes>
    </Router>
  );
};

export default App;
