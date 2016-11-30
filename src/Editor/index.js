import compose from 'recompose/compose'

import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

import Editor from './Editor'


const enhancer = compose(
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
)

export default enhancer(Editor)
