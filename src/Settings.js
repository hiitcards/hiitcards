import React, {Component} from 'react'
import {Button, Form, Segment} from 'semantic-ui-react'

class Settings extends Component {

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Form.Field>
          <label>Workout Seconds</label>
          <Form.Input
            placeholder='Workout Seconds'
            name="repetitionSeconds"
            type='number'
            value={this.props.repetitionSeconds}
            onChange={this.props.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Break Seconds</label>
          <Form.Input
            placeholder='Break Seconds'
            name="breakSeconds"
            type='number'
            value={this.props.breakSeconds}
            onChange={this.props.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Repetitions</label>
          <Form.Input
            placeholder='Repetitions'
            name="repetitions"
            type='number'
            value={this.props.repetitions}
            onChange={this.props.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Volume</label>
          <Form.Input
            placeholder='Volume'
            name="volume"
            type='number'
            step="0.05"
            value={this.props.volume}
            onChange={this.props.handleChange}/>
        </Form.Field>
        <Button type='submit'>Done</Button>
        <Segment basic className="right aligned">
          <div className="">v1.0.9</div>
          <div><a href="http://www.kahneraja.com">@kahneraja</a></div>
        </Segment>
      </Form>
    );
  }
}

export default Settings