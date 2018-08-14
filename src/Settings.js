import React, {Component} from 'react'
import {Button, Form, Segment} from 'semantic-ui-react'
import JsonStore from "./JsonStore";

class Settings extends Component {

  constructor (props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  jsonStore = new JsonStore()

  state = {
    repetitionSeconds: 0,
    breakSeconds: 0,
    repetitions: 0,
    volume: 0
  }

  componentWillMount() {
    this.setState({...this.jsonStore.get()})
  }

  onSubmit() {
    this.jsonStore.set('config', this.state)
    this.props.history.push("/")
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: parseFloat(value)})
  }

  render() {
    let repetitionSeconds = this.state.repetitionSeconds
    let breakSeconds = this.state.breakSeconds
    let repetitions = this.state.repetitions
    let volume = this.state.volume

    return (
      <Form>
        <Form.Field>
          <label>Workout Seconds</label>
          <Form.Input
            placeholder='Workout Seconds'
            name="repetitionSeconds"
            type='number'
            value={repetitionSeconds}
            onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Break Seconds</label>
          <Form.Input
            placeholder='Break Seconds'
            name="breakSeconds"
            type='number'
            value={breakSeconds}
            onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Repetitions</label>
          <Form.Input
            placeholder='Repetitions'
            name="repetitions"
            type='number'
            value={repetitions}
            onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Volume</label>
          <Form.Input
            placeholder='Volume'
            name="volume"
            type='number'
            step="0.05"
            value={volume}
            onChange={this.handleChange}/>
        </Form.Field>
        <Button onClick={this.onSubmit}>Done</Button>
        <Segment basic className="right aligned">
          <div className="">v1.1.11</div>
          <div><a href="http://www.kahneraja.com">@kahneraja</a></div>
        </Segment>
      </Form>
    );
  }
}

export default Settings