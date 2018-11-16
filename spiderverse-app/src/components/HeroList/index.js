import React from 'react';
// import axios from 'axios';
// import TestData from './marvelTest.json';

export default function HeroList(props){
  const list = props.heroData;
  const images = list.map(image => {
    const path = image.thumbnail.path;
    const ext = image.thumbnail.extension;
  return(
      <div key= {image.id} className = "hero" id = "jack" >
            <h2>{image.name}</h2>
            <img className = "listImg" src={`${path}.${ext}`} />
            {/* <h3>First Appearence:{image.}</h3> */}
        </div>
        )
      });
  return (
    <div>
    {images}
    </div>
  )
}
