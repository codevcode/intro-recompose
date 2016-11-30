import compose from 'recompose/compose'

import handleOnChangeEvent from './handleOnChangeEvent'
import parseNumber from './parseNumber'

export default compose(
  parseNumber,
  handleOnChangeEvent,
)('input')
