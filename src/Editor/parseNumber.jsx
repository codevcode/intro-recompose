import withProps from 'recompose/withProps'

function parseNumber (value) {
  return +value
}

export default withProps(({ onChange }) => ({
  onChange: value => onChange(parseNumber(value)),
}))
