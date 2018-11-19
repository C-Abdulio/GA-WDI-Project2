import React from 'react';
// import axios from 'axios';
// import TestData from './marvelTest.json';
import Gwen from './gwen.jpg';
import Kaine from './kaine.jpg';
import Ham from './Ham.jpg';
import Otto from './Spock.jpg';

export default function HeroList(props){
  const list = props.heroData;
  const images = list.map(image => {
    const path = image.thumbnail.path;
    const ext = image.thumbnail.extension;
  return(
      <div
        key= {image.id}
        className = "hero"
        id = "jack" >
        <img
          className = "listImg"
          src={`${path}.${ext}`} />
        <h2>{image.name}</h2>
            {/* <h3>First Appearence:{image.}</h3> */}
        </div>


        )
      });
  return (
<div className = "mainChar">
    <div>
    {images}
    </div>

    <div
      className = "hero"
      id = "gwen">
      <img className = "listImg" src = {Gwen} />
      <h2>Spider-Gwen</h2>
    </div>

    <div
      className = "hero"
      id = "kaine">
      <img className = "listImg" src = {Kaine} />
      <h2>Scarlet Spider</h2>
    </div>

    <div
      className = "hero"
      id = "ham">
      <img className = "listImg" src = {Ham} />
      <h2>Spider-Ham</h2>
    </div>

    <div
      className = "hero"
      id = "spOck">
      <img className = "listImg" src = {Otto} />
      <h2>Superior Spider-Man/Octopus</h2>
    </div>

  </div>
  )
}
