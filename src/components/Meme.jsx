import React, { useState } from "react";
import MemesData from '../MemesData.jsx'


export const Meme = () => {

  let imgUrl;
const [memeImage, setmemeImage] = useState("")

function getMemeImage(){
  const memeArray = MemesData.data.memes
  const randomNumber = Math.floor(Math.random() * memeArray.length)
   imgUrl = memeArray[randomNumber].url;
   setmemeImage(imgUrl);
  // console.log(imgUrl)
}
  
  return (
    <>
      <div className="form">
        <input type="text" className="input-field" placeholder="Top Text"/>
        <input type="text" className="input-field" placeholder="Bottom Text "/>
      </div>

      <div className="form-btn">
        <button className="btn" onClick={getMemeImage}>
          Get a new meme image🖼️
        </button>
        <img src={memeImage} alt="memeImage"  className="memeImage"/>
      </div>
    </>
  );
};
