import React from 'react'

function Editor () {
  return (
    <div>
      name: <input value="Charles" /> <br />
      age: <input type="number" /> <br />
      note: <textarea />
    </div>
  )
}

export default function App () {
  return (
    <div>
      <h1>Recompose Introduction</h1>
      <h3>by Hsieh, Chang-Hsi @codev_</h3>
      <Editor />
    </div>
  )
}
