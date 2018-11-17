import React from 'react';

export function getSpiders(props){
  return(
    <div className = "index" />
    {props.render.map(images =>{
      const path = images.thumbnail.path;
      const ext = images.thumbnail.extension;
      const main = [1009157, 100969];
      for (let i = 0; i < images.length; i++){
        if (images[i].id === main){
          return (
            <h2>{images.name}</h2>
            <img src={`${path}.${ext}`} className = "pics" />
          )
        }
        else {
          return null;
        }
      }
    })}
  )
}
