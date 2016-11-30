import withHandlers from 'recompose/withHandlers'

function parseNumber (value) {
  return +value
}

export default withHandlers({
  onChange: ({ onChange }) => value => onChange(parseNumber(value)),
})
