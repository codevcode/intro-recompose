import React from 'react'

import Input from './Input'
import NumberInput from './NumberInput'
import Textarea from './Textarea'


export default function Editor ({ form: { name, age, note }, updateForm }) {
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
