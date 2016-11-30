import React from 'react'

function Input (props) {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={event => props.onChange(event.target.value)}
    />
  )
}

function Textarea (props) {
  return (
    <textarea
      value={props.value}
      onChange={event => props.onChange(event.target.value)}
    />
  )
}

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
        <Input
          value={this.state.name}
          onChange={value => this.setState({ name: value })}
        /> <br />
        age:
        <Input
          type="number"
          value={this.state.age}
          onChange={value => this.setState({ age: value })}
        /> <br />
        note:
        <Textarea
          value={this.state.note}
          onChange={value => this.setState({ note: value })}
        />
      </div>
    )
  }
}
