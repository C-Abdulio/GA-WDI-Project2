import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar.js';
import Welcome from './components/Welcome.js';
import TestData from './marvelTest.json';

/* The URL that you will be calling from...until you get a better API*/
const MAHVEL_URL = `http://gateway.marvel.com/v1/public/characters/`;
// const process.env = `${MAHVEL_API_SHIT}`;
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

  async componentDidMount(){
    try{
      const list = (`${TestData.data.results[0].name}`);
      // const list = await axios(`${MAHVEL_URL}/1011334/process.env`);
      console.log(`this ${list} is a componentDidMount`);
    }
    catch(error){
      console.log(error);
    }
  }

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
