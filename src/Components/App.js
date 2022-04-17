import React, {useState, useEffect} from "react"
import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyWatchList from "./MyWatchList";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

const App = () => {
  
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    fetch ("http://localhost:3001/movies")
    .then(resp => resp.json())
    .then((data) => setMovies(data))
  }, [])
  
  if(!movies) {
    return <h2>LOADING......</h2>
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home movies={movies}/>}/>
        <Route path="/MovieList" element={<MovieList movies={movies}/>}/>
        <Route path="/MyWatchList" element={<MyWatchList movies={movies}/>}/>
        <Route path="/AddMovie" element={<AddMovie />}/>
      </Routes>
    </Router>
  );
}

export default App;
