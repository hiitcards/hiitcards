import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'

class HiitCard extends Component {
  render() {
    return (
      <Card centered>
        <Image src={`/assets/${this.props.image}`}/>
        <Card.Content>
          <Card.Header>
            {this.props.name}
          </Card.Header>
          <Card.Description>
            {this.props.description}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default HiitCard