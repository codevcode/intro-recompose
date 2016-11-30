import React from 'react'

function parseNumber (value) {
  return +value
}

export default function handleOnChangeEvent (Component) {
  return props => (
    <Component
      {...props}
      onChange={value => props.onChange(parseNumber(value))}
    />
  )
}
