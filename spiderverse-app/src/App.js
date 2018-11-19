import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
// import TestData from './marvelTest.json';
import BigList from './components/BigList';
import Intro from './components/Intro';
import HeroList from './components/HeroList';
import Excelsior from './components/Stan';
// import CreateASpider from './components/Create';


/* The URL that you will be calling from...until you get a better API*/
const KEY = process.env.REACT_APP_API_KEY;
const URL = 'http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=spider';
// //////////////////////////
/* The App component in total*/
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      listData: [],
      newData: [],
      currentView: ''
    }
    /* Binding the functions to a prop - this - whatever */
    this.setView = this.setView.bind(this);
  }

  async fetchData(){
    const opts = {
      params:{
        apikey: KEY
      }
    };

    try{

      const resp = await axios(URL, opts);
      const list = resp.data.data.results;
      this.setState({
        listData:list
      })
      const listData = this.state.listData;
      const newArray = [
        listData[4],
        listData[13],
        listData[6],
        listData[1]
      ]
      this.setState({
        selectData: newArray
      })
    }
    catch(error){
      console.log(error);
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  changeView(){
    const view = this.state.currentView;
    switch(view){
      case 'Index':
        return <BigList listData = {this.state.listData} />
      case 'Intro':
        return <Intro />
      case 'Heroes':
        return <HeroList heroData = {this.state.selectData} />
      case 'TheMan':
      return <Excelsior />
      default:
        return <Welcome />
    }
  }

  setView(view){
    this.setState({
      currentView: view
    });
  }

  handleObj(){

  }

  render() {
    return (
      <div className="App">
        <NavBar handleChangeView= {this.setView} />
        <div className = "view">
          {this.changeView()}
        </div>
      </div>
    );
  }
}

export default App;
