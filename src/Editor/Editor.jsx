import React from 'react'

import handleOnChangeEvent from './handleOnChangeEvent'
import parseNumber from './parseNumber'


const Input = handleOnChangeEvent('input')
const NumberInput = parseNumber(handleOnChangeEvent('input'))
const Textarea = handleOnChangeEvent('textarea')


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
        <NumberInput
          type="number"
          value={this.state.age}
          onChange={value => this.setState({ age: value })}
        /> type: {typeof this.state.age} <br />
        note:
        <Textarea
          value={this.state.note}
          onChange={value => this.setState({ note: value })}
        />
      </div>
    )
  }
}
