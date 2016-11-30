import React from 'react'

export default class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Charles',
      age: 35,
      note: 'working at codev_',
    }
  }
  render () {
    return (
      <div>
        name:
        <input
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })}
        /> <br />
        age:
        <input
          type="number"
          value={this.state.age}
          onChange={event => this.setState({ age: event.target.value })}
        /> <br />
        note:
        <textarea
          value={this.state.note}
          onChange={event => this.setState({ note: event.target.value })}
        />
      </div>
    )
  }
}
