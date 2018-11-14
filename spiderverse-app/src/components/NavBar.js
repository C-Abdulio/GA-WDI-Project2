import React from 'react';

export default function NavBar(props){
  return(
    <nav className = "navBar">
      <button className = "button" onClick= {() => props.handleChangeView('Intro')}>
        INTRO
      </button>
      <button className = "button" onClick= {() => props.handleChangeView('Heroes')}>
        THE MAIN CHARACTERS
      </button>

      <img className = "imgBtn" src= "url(.../Media/Shape 1.png)" onClick ={() => props.handleChangeView('Welcome')} />

      <button className = "button" onClick= {() => props.handleChangeView('Index')}>
        VAULT OF SPIDERS
      </button>
      <button className = "button" onClick= {() => props.handleChangeView('Create')}>
        CREATE-A-SPIDER
      </button>
    </nav>
  )
}
