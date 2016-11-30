import compose from 'recompose/compose'

import withProps from 'recompose/withProps'

import handleOnChangeEvent from './handleOnChangeEvent'
import parseNumber from './parseNumber'

export default compose(
  withProps({ type: 'number' }),
  parseNumber,
  handleOnChangeEvent,
)('input')
