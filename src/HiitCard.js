import React, {Component} from 'react'
import {Button, Card, Container, Divider, Grid, Icon, Image, Segment} from 'semantic-ui-react'
import NoSleep from "../node_modules/nosleep.js/dist/NoSleep.min.js"
import _ from 'lodash'

class HiitCard extends Component {
  cards = [
    {
      "image": "back-kick.jpg",
      "name": "Back Walking",
      "description": "On your back. Knees up. One leg rising at a time."
    },
    {
      "image": "bench-bells.jpg",
      "name": "Bench Bells",
      "description": "On your back. Both arms and legs up together."
    },
    {
      "image": "bench-lift.jpg",
      "name": "Bench Lifts",
      "description": "In a kneeling position lifting your weight from a bench."
    },
    {
      "image": "birds-lifts.jpg",
      "name": "Bird Lifts",
      "description": "Rising into a bird position."
    },
    {
      "image": "bridge-lift.jpg",
      "name": "Bridge Lifts",
      "description": "Rising into an extended bridge position."
    },
    {
      "image": "bridge-reaches.jpg",
      "name": "Bridge Reaches",
      "description": "Facing upwards. One arm and one leg extending."
    },
    {
      "image": "burpy-twists.jpg",
      "name": "Burpy Twists",
      "description": "Rolling backwards onto your back. Lying down into a twist."
    },
    {
      "image": "burpy.jpg",
      "name": "Burpies",
      "description": "Jumping down into a push up."
    },
    {
      "image": "butt-pops.jpg",
      "name": "Butt Pops",
      "description": "Head down and arms still. Legs jumping continuously."
    },
    {
      "image": "cat-presses.jpg",
      "name": "Cat Presses",
      "description": "Pending down into a cat posture with one leg rising."
    },
    {
      "image": "climb.jpg",
      "name": "Climbing",
      "description": "Climbing up on to a bench."
    },
    {
      "image": "crunches.jpg",
      "name": "Crunches",
      "description": "Butt on the floor. Lifting lower and upper body together."
    },
    {
      "image": "cycling.jpg",
      "name": "Lifted Cycling",
      "description": "Upper body lift. Cycling with legs."
    },
    {
      "image": "dog-lifts.jpg",
      "name": "Dog Lifts",
      "description": "Head lowered. Lifting one leg."
    },
    {
      "image": "downward-walk.jpg",
      "name": "Downward Walk",
      "description": "Walk out into a downward dog position."
    },
    {
      "image": "floor-cycle.jpg",
      "name": "Floor Cycling",
      "description": "Lying on back. Legs cycling."
    },
    {
      "image": "forward-lift.jpg",
      "name": "Forward Lift",
      "description": "Arms out front. One leg lifted."
    },
    {
      "image": "handstand.jpg",
      "name": "Handstand",
      "description": "Arms down. Legs up."
    },
    {
      "image": "hip-floor.jpg",
      "name": "Floored Hips",
      "description": "Face down. Alternating arms and legs rising."
    },
    {
      "image": "knee-squat.jpg",
      "name": "Knee Squats",
      "description": "Lifting one leg. Lowering down onto a bench."
    },
    {
      "image": "leg-up.jpg",
      "name": "Legs Ups",
      "description": "Arms up. Raising one leg."
    },
    {
      "image": "leg-wipers.jpg",
      "name": "Leg Wipers",
      "description": "On your back. Lowering legs to one side."
    },
    {
      "image": "lifted-cycling.jpg",
      "name": "Lifted Cycling",
      "description": "Propped up on elbows. Cycling."
    },
    {
      "image": "lunges.jpg",
      "name": "Lunges",
      "description": "Lowering down onto one knee."
    },
    {
      "image": "over-lifts.jpg",
      "name": "Bent lifts",
      "description": "Remaining bent over. Alternating lifting."
    },
    {
      "image": "overhead-lifts.jpg",
      "name": "Overhead Lifts",
      "description": "Lunging and raising an arm from behind your head."
    },
    {
      "image": "planking.jpg",
      "name": "Planking",
      "description": "Body stationary. Propped up on elbows."
    },
    {
      "image": "push-lifts.jpg",
      "name": "Push Lifts",
      "description": "Upper body lifted. Raising one arm."
    },
    {
      "image": "push-up.jpg",
      "name": "Pushups",
      "description": "Raising upper body on both arms."
    },
    {
      "image": "push-walk.jpg",
      "name": "Push Walk",
      "description": "Upper body raised. One leg out the side."
    },
    {
      "image": "skating.jpg",
      "name": "Skating",
      "description": "Body lowered with one leg out the side."
    },
    {
      "image": "squat-punches.jpg",
      "name": "Squat Punches",
      "description": "Body lowered with arms punching out front."
    },
    {
      "image": "squats.jpg",
      "name": "Squats",
      "description": "Body lowered with arms out front."
    },
    {
      "image": "star-bends.jpg",
      "name": "Star Bends",
      "description": "Bending over to the side. One arm up."
    },
    {
      "image": "star-jumps.jpg",
      "name": "Star Jumps",
      "description": "Jumping into the air with arms and legs spread out."
    },
    {
      "image": "sun-salutions.jpg",
      "name": "Sun Salutations",
      "description": "Rising and falling into a sun salutation pose."
    },
    {
      "image": "twist-jumps.jpg",
      "name": "Twist Jumps",
      "description": "Jumping into the air with arms and legs swinging in opposite directions."
    },
    {
      "image": "upward-reach.jpg",
      "name": "Upward Bridge",
      "description": "Facing upwards. Upper body raised. One leg raising."
    },
    {
      "image": "upward_bridge.jpg",
      "name": "Upward Reaching",
      "description": "Facing upwards. Upper body raised. One arm raising."
    },
    {
      "image": "walk-bells.jpg",
      "name": "Walking Bells",
      "description": "Alternating arms and legs raising."
    },
    {
      "image": "wide-step.jpg",
      "name": "Wide Steps",
      "description": "Bending over the side with a wide stance."
    }
  ]

  shuffledCards = _.shuffle(this.cards)

  state = {
    repetitionSeconds: 5,
    currentSecond: 0,
    repetitions: 40,
    repetitionIndex: 0,
    cardIndex: 0,
    isPaused: true
  }

  remainingSeconds() {
    return this.state.repetitionSeconds - this.state.currentSecond
  }

  remainingRepetitions() {
    return this.state.repetitions - this.state.repetitionIndex
  }

  componentDidMount() {
    new NoSleep().enable()
  }

  start() {
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

  end() {
    this.pause();
    this.setState({
      currentSecond: 0
    })
  }

  tick() {
    if (this.remainingRepetitions() <= 0 && this.remainingSeconds() <= 1)
      this.end()
    else if (this.remainingSeconds() <= 1)
      this.nextRepetition()
    else {
      this.setState({
        currentSecond: this.state.currentSecond + 1,
        repetitionIndex: this.state.repetitionIndex + 1
      })

      if (this.remainingSeconds() <= 3)
        this.beep()
    }
  }

  nextRepetition() {
    let nextCardIndex = this.state.cardIndex + 1
    if (nextCardIndex >= this.shuffledCards.length) {
      nextCardIndex = 0
    }

    this.setState({
      currentSecond: 1,
      repetitionIndex: this.state.repetitionIndex + 1,
      cardIndex: nextCardIndex
    });
  }

  handleClick = () => {
    if (this.state.isPaused)
      this.start()
    else
      this.pause()
  }

  beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=")
    snd.play()
  }

  render() {
    let card = this.shuffledCards[this.state.cardIndex]
    return (
      <Container>
        <Grid>
          <Grid.Column>
            <Grid.Row>
              <Card centered>
                <Image src={`./assets/${card.image}`}/>
                <Card.Content>
                  <Card.Header>
                    {card.name}
                  </Card.Header>
                  <Card.Description>
                    {card.description}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='clock'/>
                    {this.remainingSeconds()}
                  </a> | <a>
                  <Icon name='sort amount down'/>
                  {this.remainingRepetitions()}
                </a>
                </Card.Content>
              </Card>
            </Grid.Row>
            <Divider hidden></Divider>
            <Grid.Row>
              <Button icon toggle active={this.state.isPaused} labelPosition='left' onClick={this.handleClick}>
                <Icon name='pause'/>
                {this.state.isPaused ? "Start" : "Pause"}
              </Button>
            </Grid.Row>
            <Divider hidden></Divider>
            <Grid.Row>
              <Segment basic className="right aligned">
                <a href="http://www.kahneraja.com">@kahneraja</a>
              </Segment>

            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default HiitCard