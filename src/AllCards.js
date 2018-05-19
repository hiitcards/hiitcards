import React, {Component} from 'react'
import Cards from './Cards.json'

class AllCards extends Component {

  render() {

    const imageStyle = {
      width: 100,
      height: 100,
      display: "inline-block"
    }

    const cardItems = Cards.map((card, i) =>
      <img src={`/assets/${card.image}`} style={imageStyle}/>
    )

    return (
      <div>
        <div>{cardItems}</div>
      </div>
    )
  }
}

export default AllCards