import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";
import HiitScheduler from "./HiitScheduler";
import Settings from "./Settings";
import AllCards from "./AllCards";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={HiitScheduler}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/all-cards' component={AllCards}/>
        </Switch>
      </main>
    )
  }
}

export default Main