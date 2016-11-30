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
        name: <input value={this.state.name} /> <br />
        age: <input type="number" value={this.state.age} /> <br />
        note: <textarea value={this.state.note} />
      </div>
    )
  }
}
