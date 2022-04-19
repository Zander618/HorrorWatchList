import React from "react";
import "./PopUp.css";

const AdditionalMovieInfo = ({trigger, setTrigger, movie}) => {
  return (trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <h3 style={{color: "black"}}>{movie.title}</h3>
        <img src={movie.cover} alt={movie.title} style={{width: 250, height: 350}} className="border"/>
        <p style={{color: "black"}}>Year Released: {movie.release}</p>
        <p style={{color: "black"}}>Runtime: {movie.length}</p>
        <p style={{color: "black"}}>Rotten Tomato Critic Score: {movie.rtScoreCritics}%</p>
        <p style={{color: "black"}}>Rotten Tomato Audience Score: {movie.rtScoreAudience}%</p>
        <p style={{color: "black"}}>Director: {movie.director}</p>
        <p style={{color: "black"}}>Summary: {movie.summary}</p>
        <button className="close-btn" onClick={() => setTrigger(false)}>close</button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default AdditionalMovieInfo;
