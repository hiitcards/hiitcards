import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'

class HiitCard extends Component {
  render() {
    return (
      <Card centered>
        <Image src={`/assets/${this.props.image}`}/>
      </Card>
    );
  }
}

export default HiitCard