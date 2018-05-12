import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const HiitCard = () => (
  <HiitCard>
    <Image src='/assets/matthew.png' />
    <Card.Content>
      <Card.Header>
        Matthew
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </HiitCard>
)

export default HiitCard