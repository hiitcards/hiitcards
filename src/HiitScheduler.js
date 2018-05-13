import React, {Component} from 'react'
import {Button, Container, Grid, Icon, Segment} from 'semantic-ui-react'
import _ from 'lodash'
import HiitCard from "./HiitCard"
import Cards from './Cards.json'
import Settings from "./Settings";

class HiitScheduler extends Component {

  state = {
    repetitionSeconds: 115,
    breakSeconds: 15,
    currentSecond: 0,
    repetitions: 30,
    repetitionIndex: 0,
    cardIndex: 0,
    isPaused: true,
    isBreak: false,
    showSettings: false,
    shuffledCards: []
  }

  componentWillMount() {
    this.shuffle()
  }

  shuffle() {
    this.setState({shuffledCards: _.shuffle(Cards)})
  }

  remainingSeconds() {
    return this.state.repetitionSeconds - this.state.currentSecond
  }

  remainingRepetitions() {
    return this.state.repetitions - this.state.repetitionIndex
  }

  start() {
    this.beepShort.play()
    document.noSleep.enable()
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.setState({isPaused: false})
  }

  pause() {
    clearInterval(this.timerID)
    this.setState({isPaused: true})
  }

  reset() {
    this.pause();
    this.setState({
      currentSecond: 0,
      repetitionIndex: 0
    })
  }

  end() {
    this.reset()
    this.beepLong.play()
  }

  tick() {
    if (this.remainingRepetitions() <= 1 && this.remainingSeconds() <= 1)
      this.end()
    else if (this.remainingSeconds() <= 1)
      this.break()
    else {
      this.setState({
        currentSecond: this.state.currentSecond + 1
      })

      if (this.remainingSeconds() <= 3)
        this.beepShort.play()
    }
  }

  break() {
    this.beepShort.play()
    clearInterval(this.timerID)

    this.setState({
      isBreak: true
    })
    this.timerID = setInterval(
      () => this.continue(),
      this.state.breakSeconds * 1000
    )

    this.prepareNextRepetition()
  }

  continue() {
    this.beepShort.play()
    clearInterval(this.timerID)

    this.nextRepetition()
    this.setState({
      isBreak: false
    })
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  prepareNextRepetition() {
    let nextCardIndex = this.state.cardIndex + 1
    if (nextCardIndex >= this.state.shuffledCards.length) {
      nextCardIndex = 0
    }

    this.setState({
      currentSecond: 0,
      repetitionIndex: this.state.repetitionIndex + 1,
      cardIndex: nextCardIndex
    })
  }

  nextRepetition() {
    this.beepShort.play()
  }

  // #### UI EVENTS

  handleClick = () => {
    if (this.state.isPaused)
      this.start()
    else
      this.pause()
  }

  toggleSettings = () => {
    this.reset()
    this.setState({showSettings: !this.state.showSettings})
  }

  handleSubmit = (e, v) => {
    this.toggleSettings()
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
  }

  onCardClick = () => {
    if (this.state.isPaused)
      this.shuffle()
  }

  onBreakClick = () => {
    this.setState({isBreak: false})
    this.pause()
  }

  render() {
    let card = this.state.shuffledCards[this.state.cardIndex]
    return (
      <Container>
        <audio ref={(beepShort) => { this.beepShort = beepShort; }}><source src="./beep-short.mp3" type="audio/mpeg" ></source></audio>
        <audio ref={(beepLong) => { this.beepLong = beepLong; }}><source src="./beep-long.mp3" type="audio/mpeg" ></source></audio>
        <div className={this.state.isBreak ? 'hidden' : ''}>
          <Segment className={!this.state.showSettings ? 'hidden' : ''}>
            <Settings
              repetitions={this.state.repetitions}
              breakSeconds={this.state.breakSeconds}
              repetitionSeconds={this.state.repetitionSeconds}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </Segment>
          <div className={this.state.showSettings ? 'hidden' : ''}>
            <Grid>
              <Grid.Column>
                <Grid.Row onClick={this.onCardClick}>
                  <HiitCard
                    name={card.name}
                    description={card.description}
                    image={card.image}
                  >
                  </HiitCard>
                </Grid.Row>
                <Grid.Row>
                  <Segment basic onClick={this.toggleSettings}>
                    <h1>
                      <span>
                        <Icon name='clock'/> {this.remainingSeconds()}
                      </span>
                      <span> | </span>
                      <span>
                        {this.remainingRepetitions()}
                      </span>
                    </h1>
                  </Segment>
                </Grid.Row>
                <Grid.Row>
                  <Segment basic>
                    <Button
                      icon toggle
                      active={this.state.isPaused}
                      labelPosition='left'
                      onClick={this.handleClick}>
                      <Icon name='pause'/>
                      {this.state.isPaused ? "Start" : "Pause"}
                    </Button>
                  </Segment>
                </Grid.Row>
              </Grid.Column>
            </Grid>
          </div>
        </div>
        <div className={!this.state.isBreak ? 'hidden' : ''}>
          <Icon className="massive orange time" onClick={this.onBreakClick}/>
          <p>Break</p>
        </div>
      </Container>
    );
  }
}

export default HiitScheduler