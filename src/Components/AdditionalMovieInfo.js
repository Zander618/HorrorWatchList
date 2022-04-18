import React from 'react'
import "/home/zander618/Development/code/phase-2/horror-movies/src/PopUp.css"

const AdditionalMovieInfo = (props) => {
  return (props.trigger) ? (
    <div className="popup">
      <div className='popup-inner'>
        <button className="close-btn">close</button>
        </div>
    </div>
  ) : "";
}

export default AdditionalMovieInfo