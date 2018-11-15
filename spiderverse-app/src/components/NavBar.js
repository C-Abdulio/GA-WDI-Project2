import React from 'react';
import NavImage from './Shape1.png';

export default function NavBar(props){
  return(
    <nav className = "navBar">
      <button className = "button" onClick= {() => props.handleChangeView('Intro')}>
        INTRO
      </button>
      <button className = "button" onClick= {() => props.handleChangeView('Heroes')}>
        THE MAIN CHARACTERS
      </button>

      <div className = "imgBtn" onClick ={() => props.handleChangeView('Welcome')}>
      <img alt= "homeButton" src= {NavImage} />
      </div>

      <button className = "button" onClick= {() => props.handleChangeView('Index')}>
        VAULT OF SPIDERS
      </button>
      <button className = "button" onClick= {() => props.handleChangeView('Create')}>
        CREATE-A-SPIDER
      </button>
    </nav>
  )
}
