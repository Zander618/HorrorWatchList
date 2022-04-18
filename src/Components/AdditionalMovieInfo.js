import React from "react";
import "./PopUp.css";

const AdditionalMovieInfo = ({trigger, setTrigger, movie}) => {
  return (trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <h3>{movie.title}</h3>
        <img src={movie.cover} alt={movie.title} style={{width: 150, height: 225}} />
        <p>Year Released: {movie.release}</p>
        <p>Runtime: {movie.length}</p>
        <p>Rotten Tomato Critic Score: {movie.rtScoreCritics}</p>
        <p>Rotten Tomato Audience Score: {movie.rtScoreAudience}</p>
        <p>Director: {movie.director}</p>
        <p>Summary: {movie.summary}</p>
        <button className="close-btn" onClick={() => setTrigger(false)}>close</button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default AdditionalMovieInfo;
