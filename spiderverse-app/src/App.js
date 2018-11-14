import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      listData: [],
      name: '',
      fullName:'',
      bio: '',
      firstAppear: ''
    }
  }

  render() {
    return (
      <div className="App">
        {/* {this.changeView()} */}
      </div>
    );
  }
}

export default App;
