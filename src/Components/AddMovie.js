import React from "react";

const AddMovie = () => {
  const [formData, setFormData] = useState({
    title: "",
    cover: "",
    release: 0,
    rtScoreCritics: 0,
    rtScoreAudience: 0,
    director: "",
    summary:"",
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
    prompt: formData.prompt,
    answers:[
      formData.title,
      formData.cover,
      formData.release,
      formData.rtScoreCritics,
      formData.rtScoreAudience,
      formData.director,
      formData.summary,
    ],
  }),
  })
}

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
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
            name="prompt"
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
            name="prompt"
            value={formData.cover}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Release Date:
          <input
            type="text"
            name="prompt"
            value={formData.release}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Length of Movie:
          <input
            type="text"
            name="prompt"
            value={formData.length}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Rotten Tomatoes (Critics Score):
          <input
            type="text"
            name="prompt"
            value={formData.rtScoreCritics}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Rotten Tomatoes (Audience Score):
          <input
            type="text"
            name="prompt"
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
            name="prompt"
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
            name="prompt"
            value={formData.summary}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddMovie;
