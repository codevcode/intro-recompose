import React from 'react'

import compose from 'recompose/compose'

import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

import Input from './Input'
import NumberInput from './NumberInput'
import Textarea from './Textarea'


function Editor ({ form: { name, age, note }, updateForm }) {
  return (
    <div>
      name:
      <Input
        value={name}
        onChange={value => updateForm({ name: value })}
      /> <br />
      age:
      <NumberInput
        value={age}
        onChange={value => updateForm({ age: value })}
      /> type: {typeof age} <br />
      note:
      <Textarea
        value={note}
        onChange={value => updateForm({ note: value })}
      />
    </div>
  )
}


export default compose(
  withState(
    'form',
    'setForm',
    {
      name: 'Charles',
      age: 35,
      note: 'working at codev_',
    },
  ),
  withHandlers({
    updateForm: ({ setForm }) => v => setForm(s => ({ ...s, ...v })),
  }),
)(Editor)
