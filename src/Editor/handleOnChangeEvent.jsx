import React from 'react'

export default function handleOnChangeEvent (Component) {
  return props => (
    <Component
      {...props}
      onChange={event => props.onChange(event.target.value)}
    />
  )
}
