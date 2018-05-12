import React, {Component} from 'react';
import './App.css';
import HiitCard from "./HiitCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <HiitCard></HiitCard>
        </p>
      </div>
    );
  }
}

export default App;
