import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar.js';
import Welcome from './components/Welcome.js';


/* The URL that you will be calling from...until you get a better API*/
// const MAHVEL_URL = ``;
// //////////////////////////
/* The App component in total*/
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      listData: [],
      name: '',
      fullName:'',
      universe: '',
      bio: '' ,
      firstAppear: '',
      currentView: ''
    }
  }

  // async componentDidMount(){
  //   try{
  //     await
  //   }
  // }

  render() {
    return (
      <div className="App">
        <NavBar handleChangeView = {this.setView} />
        <Welcome />
        {/* {this.changeView()} */}
      </div>
    );
  }
}

export default App;
