import React from 'react'

import Input from './Input'
import NumberInput from './NumberInput'
import Textarea from './Textarea'

function getSubProps (value, updateValue) {
  return key => ({
    value: value[key],
    onChange: subValue => updateValue({ [key]: subValue })
  })
}

export default function Editor ({ form, updateForm }) {
  const subProps = getSubProps(form, updateForm)
  return (
    <div>
      name: <Input {...subProps('name')} /> <br />
      age: <NumberInput {...subProps('age')} /> type: {typeof form.age} <br />
      note: <Textarea {...subProps('note')} />
    </div>
  )
}
