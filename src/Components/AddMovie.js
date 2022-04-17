import React from "react";

const AddMovie = () => {
  return (
    <div>
      <h1>Have a movie suggestion. Well add it to the list here.</h1>
      <p>
        Here at Horror Watcher we are always looking for the next great horror
        movie. Please provide your suggestion in the form below. Enter as much
        of the data as you can.
      </p>
      <form>
        <label>
          Movie Title:
          <input type="text" name="name" />
        </label>
        <br></br>
        <br></br>
        <label>
          Movie Cover
          (copy the image address from the web):
          <input type="text" name="name" />
        </label>
        <br></br>
        <br></br>
        <label>
          Release Date:
          <input type="text" name="name" />
        </label>
        <br></br>
        <br></br>
        <label>
          Length of Movie:
          <input type="text" name="name" />
        </label>
        <br></br>
        <br></br>
        <label>
          Rotten Tomatoes (Critics Score):
          <input type="text" name="name" />
        </label>
        <br></br>
        <br></br>
        <label>
          Rotten Tomatoes (Audience Score):
          <input type="text" name="name" />
        </label>
        <br></br>
        <br></br>
        <label>
          Rotten Tomatoes (Director):
          <input type="text" name="name" />
        </label>
        <br></br>
        <br></br>
        <label>
          Rotten Tomatoes (Summary):
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddMovie;
