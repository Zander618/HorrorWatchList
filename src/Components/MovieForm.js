import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"

const MovieForm = ({movies, setMovies}) => {
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    cover: "",
    release: "",
    length: "",
    rtScoreCritics: "",
    rtScoreAudience: "",
    director: "",
    summary: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    fetch("http://localhost:3001/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          title: formData.title,
          cover: formData.cover,
          release: formData.release,
          length: formData.length,
          rtScoreCritics: formData.rtScoreCritics,
          rtScoreAudience: formData.rtScoreAudience,
          director: formData.director,
          summary: formData.summary,
      }),
    })
    .then(resp => resp.json())
    .then(data => addMovie(data))
    setFormData({
      title: "",
      cover: "",
      release: "",
      length: "",
      rtScoreCritics: "",
      rtScoreAudience: "",
      director: "",
      summary: "",
    })
    navigate("/Movies")
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }


  const addMovie = (movie) => {
      const updateMyMovies = [...movies, movie];
      setMovies(updateMyMovies);
  }

  return (
    <div >
      <h1>Have a movie suggestion. Well add it to the list here.</h1>
      <p>
        Here at Horror Watcher we are always looking for the next great horror
        movie. Please provide your suggestion in the form below. Enter as much
        of the data as you can.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Movie Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Movie Cover (copy the image address from the web):
          <input
            type="text"
            name="cover"
            value={formData.cover}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Release Year:
          <input
            type="number"
            name="release"
            value={formData.release}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Length of Movie (enter _h _m format):
          <input
            type="text"
            name="length"
            value={formData.length}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Rotten Tomatoes (Critics Score):
          <input
            type="number"
            name="rtScoreCritics"
            value={formData.rtScoreCritics}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Rotten Tomatoes (Audience Score):
          <input
            type="number"
            name="rtScoreAudience"
            value={formData.rtScoreAudience}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Rotten Tomatoes (Director):
          <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Rotten Tomatoes (Summary):
          <input
            type="text"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MovieForm;
