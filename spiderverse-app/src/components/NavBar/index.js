import React from 'react';
import NavImage from './Shape1.png';

export default function NavBar(props){
  return(
    <nav>
      <button className = "button" onClick= {() => props.handleChangeView('Intro')}>
        INTRO
      </button>
      <button className = "button" onClick= {() => props.handleChangeView('Heroes')}>
        THE MAIN CHARACTERS
      </button>

      <div className = "imgBtn" onClick ={() => props.handleChangeView('Welcome')}>
      </div>

      <button className = "button" onClick= {() => props.handleChangeView('Index')}>
        VAULT OF SPIDERS
      </button>
      <button className = "button" onClick= {() => props.handleChangeView('TheMan')}>
        THE LEGEND
      </button>

      <div className = "navBar">
       <img
       className = "spiderBtn"
       alt= "homeButton"
       src= {NavImage}
       onClick ={() => props.handleChangeView('Welcome')} />
       </div>
    </nav>
  )
}
