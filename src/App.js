import React, {Component} from 'react';
import './App.css';
import HiitCard from "./HiitCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HiitCard image="matthew.png" name="Matthew" description="Matthew is a musician living in Nashville."></HiitCard>
      </div>
    );
  }
}

export default App;
