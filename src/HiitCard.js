import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'

class HiitCard extends Component {
  reloadCardImage(target) {
    const src = `/assets/${this.props.image}`
    setTimeout(() => {
      target.onerror = null
      target.src = src
    }, 2000)
  }

  render() {
    const src = `/assets/${this.props.image}`
    return (
      <Card centered>
        <Image
          src={src}
          onError={(e) => {
            this.reloadCardImage(e.target)
          }}
        />
      </Card>
    );
  }
}

export default HiitCard