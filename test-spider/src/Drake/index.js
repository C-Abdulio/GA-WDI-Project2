import React from 'react';
// import axios from 'axios';
// import getSpiders from './spiders.js';

export default function TestList(props){
  // const path = images.thumbnail.path;
  // const ext = images.thumbnail.extension;
    return (
        <div className= "bigIndex">
           {props.render.map(images => {
              const path = images.thumbnail.path;
              const ext = images.thumbnail.extension;
              return (
              <div key = {images.id} className = "pics">
                <h3>{images.name}</h3>
                <img src={`${path}.${ext}`} className = "pics" />
              </div>
            )
          })}
          </div>
        )
      }
    //--------------------------//
      // <div className = "index">
      //     <getSpiders />
      //   </div>
