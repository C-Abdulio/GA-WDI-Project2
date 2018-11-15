import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import TestData from './marvelTest.json';
import BigList from './components/BigList';
import Intro from './components/Intro';

/* The URL that you will be calling from...until you get a better API*/
// const MAHVEL_URL = `http://gateway.marvel.com/v1/public/characters/`;
// const KEY = process.env.MAHVEL_API_SHIT;
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
    /* Binding the functions to a prop - this - whatever */
    this.setView = this.setView.bind(this);
  }

  async componentDidMount(){
    try{
      const list = TestData.data.results;
      // const list = await axios(`${MAHVEL_URL}/1011334/${KEY}`);
      console.log(`this ${list} is a componentDidMount`);
      this.setState({
        listData:list
      })
    }
    catch(error){
      console.log(error);
    }
  }

  changeView(){
    const view = this.state.currentView;
    switch(view){
      // case 'Heroes':
        // return <HeroList />
      case 'Index':
        return <BigList listData = {this.state.listData} />
      case 'Intro':
        return <Intro />
      default:
        return <Welcome />
    }
  }

  setView(view){
    this.setState({
      currentView: view
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar handleChangeView= {this.setView} />
        {this.changeView()}
      </div>
    );
  }
}

export default App;
