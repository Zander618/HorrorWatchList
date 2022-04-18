import React, { useState, useEffect } from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyWatchList from "./MyWatchList";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import AdditionalMovieInfo from "./AdditionalMovieInfo";


const App = () => {
  const [movies, setMovies] = useState(null);
  const [myMovies, setMyMovies] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
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

  const handleMoreInfo = (movie) => {
    console.log("Show info", movie);
    return (
      <AdditionalMovieInfo
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        movie={movie}
      ></AdditionalMovieInfo>
    );
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route
          path="/MovieList"
          element={
            <MovieList
              movies={movies}
              handleClick={addToWatch}
              handleMoreInfo={handleMoreInfo}
              setButtonPopup={setButtonPopup}
            />
          }
        />
        {handleMoreInfo}
        <Route
          path="/MyWatchList"
          element={<MyWatchList movies={myMovies} handleClick={handleRemove} />}
        />
        <Route path="/AddMovie" element={<AddMovie />} />
      </Routes>
    </Router>
  );
};

export default App;
