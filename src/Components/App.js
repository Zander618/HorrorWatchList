import React from "react"
import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyWatchList from "./MyWatchList";
import MovieList from "./MovieList";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/MovieList" element={<MovieList />}/>
        <Route path="/MyWatchList" element={<MyWatchList />}/>
      </Routes>
    </Router>
  );
}

export default App;
