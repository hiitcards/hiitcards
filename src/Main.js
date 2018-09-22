import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom"
import HiitScheduler from "./HiitScheduler"
import Settings from "./Settings"
import AllCards from "./AllCards"
import CreateToken from "./Spotify/CreateToken";
import Authorize from "./Spotify/Authorize";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={HiitScheduler}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/all-cards' component={AllCards}/>
          <Route path='/spotify/authorize' component={Authorize}/>
          <Route path='/spotify/create-token/:accessToken' component={CreateToken}/>
        </Switch>
      </main>
    )
  }
}

export default Main