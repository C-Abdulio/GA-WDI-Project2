import React from "react";
import headerImage from './spiderverse_dellottobanner.jpg';

export default function Intro(){
  return(
    <div className = "intro">
      <img className = "introImg" src = {headerImage} />
      <div className = "captions" id = "beginning" >
        <p>In the beggining...</p>
      </div>

      <article>blah blah blah...lorem...blah blah...this is what happened in Spider-Verse</article>
    </div>
  )
}
