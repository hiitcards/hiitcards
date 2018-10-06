import React, {Component} from 'react'
import Cards from './Cards.json'
import JsonStore from "./JsonStore"
import _ from 'lodash'
import {Segment} from 'semantic-ui-react'

class AllCards extends Component {

  state = {
    disabledCardIds: []
  }

  jsonStore = new JsonStore()

  componentWillMount() {
    this.setState({...this.jsonStore.get()})
  }

  onClick = (card) => {
    this.toggleCard(card)
  }

  toggleCard(card) {
    if (_.includes(this.state.disabledCardIds, card.id)) {
      this.enableCard(card)
    } else {
      this.disableCard(card)
    }
  }

  disableCard(card) {
    const state = this.state
    const ids = state.disabledCardIds
    ids.push(card.id)
    state.disabledCardIds = ids
    this.setState(state)
    this.jsonStore.set('config', state)
  }

  enableCard(card) {
    const state = this.state
    _.remove(state.disabledCardIds, (id) => {
      return id === card.id
    })
    this.setState(state)
    this.jsonStore.set('config', state)
  }

  render() {
    const disabledCardsIds = this.state.disabledCardIds
    const cardItems = Cards.map((card, i) => {
        let background = 'green'
        if (_.includes(disabledCardsIds, card.id)) {
          background = 'orange'
        }
        const imageStyle = {
          width: 100,
          height: 100,
          display: "inline-block",
          padding: '2px',
          margin: '2px',
          background: background
        }
        return (
          <img
            alt={''}
            key={i} onClick={() => {
            this.onClick(card)
          }}
            src={`/assets/${card.image}`}
            style={imageStyle}/>
        )
      }
    )

    return (
      <div>
        <Segment basic>
          <div><a href="/#/settings">Settings</a></div>
        </Segment>
        <Segment basic>
          <div>Select the cards you'd like to include:</div>
        </Segment>
        <div>{cardItems}</div>
      </div>
    )
  }
}

export default AllCards