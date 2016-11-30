import withHandlers from 'recompose/withHandlers'

export default withHandlers({
  onChange: ({ onChange }) => event => onChange(event.target.value),
})
