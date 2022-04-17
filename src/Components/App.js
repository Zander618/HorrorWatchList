import React, {useState, useEffect} from "react"
import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyWatchList from "./MyWatchList";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

const App = () => {
  
  const [movies, setMovies] = useState(null)
  const [myMovies, setMyMovies] = useState([])

  useEffect(() => {
    fetch ("http://localhost:3001/movies")
    .then(resp => resp.json())
    .then((data) => setMovies(data))
  }, [])
  
  if(!movies) {
    return <h2>LOADING......</h2>
  }

  const addToWatch = (movie) => {
    if (!myMovies.includes(movie)) {
      const updateMyMovies = [...myMovies, movie];
      setMyMovies(updateMyMovies);
    } else {
      alert("In List Already");
    }
  };

function addToList(e){
    e.preventDefault()
    console.log(e)
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home movies={movies}/>}/>
        <Route path="/MovieList" element={<MovieList movies={movies} handleClick={addToWatch}/>}/>
        <Route path="/MyWatchList" element={<MyWatchList movies={myMovies}/>}/>
        <Route path="/AddMovie" element={<AddMovie  handleSubmit={addToList}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
