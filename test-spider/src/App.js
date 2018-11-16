import React, { Component } from 'react';
import axios from 'axios';
// import TestList from './Drake';

const KEY = process.env.REACT_APP_API_KEY;
const URL = 'http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=spider';
//the main component
class App extends Component {
//constructor
  constructor(props) {
    super(props);
//the main state
    this.state = {
      data: []
    };
  }
//function that fetches
  async fetchData() {
    const opts = {
      params: {
        apikey: KEY
      }
    };

    try {
      const resp = await axios(URL, opts);
      const data = resp.data.data.results;
      console.log('this is data', data)
      this.setState({data: data})

    } catch(e) {
      console.log(e);
    }
  }
   componentDidMount() {
     this.fetchData();
  }

  render() {
    return (
      <div className="App">
        {/* <TestList render={this.state.data} /> */}
          <code>{JSON.stringify(this.state.data)}</code>
      </div>
    );
  }
}

export default App;
