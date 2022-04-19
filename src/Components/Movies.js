import React, { useState } from 'react'
import AdditionalMovieInfo from "./AdditionalMovieInfo";
import { Button } from "@mui/material";

const Movies = ({movie, handleClick}) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div key={movie.id}>
    <h3>{movie.title}</h3>
    <img
      className="border"
      src={movie.cover}
      alt={movie.title}
      style={{ width: 200, height: 300 }}
    />
    <p>Year Released: {movie.release}</p>
    <p>Runtime: {movie.length}</p>
    <Button onClick={() => handleClick(movie)}>Add to my watch list</Button>
    <Button
      onClick={() => {
        setButtonPopup(true);
      }}
    >
      More info
    </Button>
    <AdditionalMovieInfo
      trigger={buttonPopup}
      setTrigger={setButtonPopup}
      movie={movie}
    />
  </div>
  )
}

export default Movies