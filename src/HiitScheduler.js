import React, {Component} from 'react'
import {Button, Container, Grid, Icon, Segment} from 'semantic-ui-react'
import _ from 'lodash'
import HiitCard from "./HiitCard"
import Cards from './Cards.json'
import JsonStore from "./JsonStore";

class HiitScheduler extends Component {

  beepA = new Audio('beep-a.mp3')
  beepB = new Audio('beep-b.mp3')

  state = {
    repetitionSeconds: 0,
    breakSeconds: 0,
    currentSecond: 0,
    repetitions: 0,
    repetitionIndex: 0,
    cardIndex: 0,
    isPaused: true,
    isBreak: false,
    shuffledCards: [],
    volume: 0
  }

  jsonStore = new JsonStore()

  componentWillMount() {
    this.setState({...this.jsonStore.get()})
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
    this.doubleBeep(1)
    document.noSleep.enable()
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
    this.setState({isPaused: false})
  }

  pause() {
    clearInterval(this.timerID)
    this.setState({isPaused: true})
  }

  reset() {
    this.pause()
    this.setState({
      currentSecond: 0,
      repetitionIndex: 0
    })
  }

  end() {
    this.reset()
    this.doubleBeep(3)
  }

  beep(times) {
    this.beepA.volume = this.state.volume
    for (let i = 0; i < times; i++) {
      setTimeout(() => {
        this.beepA.play()
      }, i * 1000)
    }
  }

  doubleBeep(times) {
    this.beepA.volume = this.state.volume
    this.beepB.volume = this.state.volume
    for (let i = 0; i < times; i++) {
      setTimeout(() => {
        this.beepA.play()
        this.beepB.play()
      }, i * 1000)
    }
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
        this.beep(1)
    }
  }

  break() {
    clearInterval(this.timerID)
    this.setState({isBreak: true})

    setTimeout(() => this.endBreak(), (this.state.breakSeconds - 3) * 1000)
    this.timerID = setInterval(() => this.continue(), this.state.breakSeconds * 1000)

    this.beep(1)
    this.prepareNextRepetition()
  }

  endBreak() {
    this.beep(3)
    this.setState({isBreak: false})
  }

  continue() {
    this.beep(1)
    clearInterval(this.timerID)

    this.nextRepetition()
    this.timerID = setInterval(() => this.tick(), 1000)
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
    this.beep(1)
  }

  // #### UI EVENTS

  handleClick = () => {
    if (this.state.isPaused)
      this.start()
    else
      this.pause()
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
    const card = this.state.shuffledCards[this.state.cardIndex]

    let percent = ((this.state.repetitionIndex + 1) / this.state.repetitions) * 100
    let progress = {
      backgroundColor: '#21ba45',
      width: percent + '%',
      height: 10,
      display: "block"
    }

    return (
      <Container>
        <div className={this.state.isBreak ? 'hidden' : ''}>
          <div>
            <Grid>
              <Grid.Column>
                <Grid.Row onClick={this.onCardClick}>
                  <HiitCard
                    name={card.name}
                    description={card.description}
                    image={card.image}
                  >
                  </HiitCard>
                  <div style={progress}></div>
                </Grid.Row>
                <Grid.Row>
                  <Segment basic>
                    <a href="/#/settings">
                      <h1>
                      <span>
                        <Icon name='clock'/> {this.remainingSeconds()}
                      </span>
                        <span> | </span>
                        <span>
                        {this.remainingRepetitions()}
                      </span>
                      </h1>
                    </a>
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
    )
  }
}

export default HiitScheduler