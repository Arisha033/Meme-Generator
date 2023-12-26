import React, { useEffect, useState } from "react";

export const Meme = () => {
    // state to hold default data
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // state to hold memes data from API
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);


  // get random url for the image
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const imgUrl = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: imgUrl,
    }));
  }

  // to handle form input
  function handleInputChange(event) {
    const { name, value } = event.target;
    setMeme((prevMemeData) => {
      return {
        ...prevMemeData,
        [name]: value,
      };
    });
  }


  return (
    <>
      <div className="form">
        <input
          type="text"
          className="input-field"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-btn">
        <button className="btn" onClick={getMemeImage}>
          Get a new meme image🖼️
        </button>
        <div className="meme">
          <img src={meme.randomImage} alt="memeImage" className="memeImage" />
          <h2 className="memeText top">{meme.topText}</h2>
          <h2 className="memeText bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </>
  );
};
