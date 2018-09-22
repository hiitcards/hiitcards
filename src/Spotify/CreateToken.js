import React, {Component} from 'react'

class Authorize extends Component {

  beepA = new Audio('beep-a.mp3')

  constructor (props){
    super(props);

    this.state = {
      token: "",
      deviceId: "",
      loggedIn: false,
      error: "",
      trackName: "Track Name",
      artistName: "Artist Name",
      albumName: "Album Name",
      playing: false,
      position: 0,
      duration: 1,
    };

    this.onPlay = this.onPlay.bind(this);
  }

  createEventHandlers() {
    // problem setting up the player
    this.player.on('initialization_error', e => { console.error(e); });
    // problem authenticating the user.
    // either the token was invalid in the first place,
    // or it expired (it lasts one hour)
    this.player.on('authentication_error', e => {
      console.error(e);
      this.setState({ loggedIn: false });
    });
    // currently only premium accounts can use the API
    this.player.on('account_error', e => { console.error(e); });
    // loading/playing the track failed for some reason
    this.player.on('playback_error', e => { console.error(e); });

    // Ready
    this.player.on('ready', async data => {
      let { device_id } = data;
      console.log("Let the music play on!");
      // set the deviceId variable, then let's try
      // to swap music playback to *our* player!
      await this.setState({ deviceId: device_id });
      this.transferPlaybackHere();
    });
  }

  transferPlaybackHere() {
    const token = this.props.match.params.accessToken

    const { deviceId } = this.state
    fetch("https://api.spotify.com/v1/me/player", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "device_ids": [ deviceId ],
        "play": true,
      }),
    });
  }

  onPlay() {
    this.beepA.play()

    const token = this.props.match.params.accessToken

    this.player = new window.Spotify.Player({
      name: "Matt's Spotify Player",
      getOAuthToken: cb => { cb(token); },
    });
    // set up the player's event handlers
    this.createEventHandlers()

    // finally, connect!
    this.player.connect()

    this.start()
  }

  start() {
    this.timerID = setInterval(
      () => this.tick(),
      5000
    )
  }

  tick() {
    console.log("clock")
    this.beepA.play()
  }

  render() {
    return (
      <div>
        <div>
          Token: {this.props.match.params.accessToken}
        </div>
        <div onClick={this.onPlay}>
          PLAY!
        </div>
      </div>
    )
  }
}

export default Authorize