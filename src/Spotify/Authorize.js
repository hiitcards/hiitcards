import React, {Component} from 'react'
import uuidv4 from 'uuid/v4'


class Authorize extends Component {

  state = {
    authorizeURL: ''
  }

  componentDidMount() {
    const redirectUri = 'http://localhost:3000/spotify/callback'
    const clientId = 'ee75a3f66c5b4550af2af8de8d06038c'
    const state = uuidv4()
    const scopes = 'streaming%20user-read-birthdate%20user-read-email%20user-modify-playback-state%20user-read-private'

    const authorizeURL = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes}&response_type=token&state=${state}`
    this.setState({authorizeURL: authorizeURL})
  }

  render() {
    return (
      <div>
        <div>PLAYLISTS</div>
        <div>
          <a href={this.state.authorizeURL}>Login with Spotify</a>
        </div>
      </div>
    )
  }
}

export default Authorize