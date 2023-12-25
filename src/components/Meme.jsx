import React, { useState } from "react";
import MemesData from "../MemesData.jsx";

export const Meme = () => {
  // const [memeImage, setmemeImage] = useState("")

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setMeme((prevMemeData) => {
      return {
        ...prevMemeData,
        [name]: value,
      };
    });
  }

  const [allMemeImage, setAllMemeImage] = useState(MemesData);

  function getMemeImage() {
    const memeArray = allMemeImage.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const imgUrl = memeArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: imgUrl,
    }));
    // console.log(imgUrl)
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
