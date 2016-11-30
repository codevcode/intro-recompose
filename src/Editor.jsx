import React from 'react'

export default class Editor extends React.Component {
  render () {
    return (
      <div>
        name: <input value="Charles" /> <br />
        age: <input type="number" /> <br />
        note: <textarea />
      </div>
    )
  }
}
