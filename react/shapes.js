import PropTypes from 'prop-types'

export const deliveryWindowShape = PropTypes.shape({
  startDateUtc: PropTypes.string,
  endDateUtc: PropTypes.string,
})
