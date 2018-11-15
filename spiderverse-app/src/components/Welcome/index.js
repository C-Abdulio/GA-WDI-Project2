import React from 'react';
import logo from "./Spider-Verse_logo.png"

export default function Welcome(){
  return(
    <div>
      <div className= "mainModule">
        <p className = "smallText">Greetings True Believer!</p>
        <p className = "smallText">Prepare to Enter The</p>
          <img className = "logo" src={logo} />
        <h3 className = "regText">
          Get the 411 on all your favorite
          Spider-Men (& Women,..and Robots, Pigs, Etc)
          from across The MultiVerse,
          as they face their greatest threat yet!
        </h3>
      </div>
    </div>
  )
}
