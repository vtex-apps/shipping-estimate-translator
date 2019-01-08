import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

const getTranslateId = (shippingEstimate, isPickup) => {
  const shippingEstimateString =
      shippingEstimate && shippingEstimate.split(/[0-9]+/)[1]

  return (
    shippingEstimate &&
      shippingEstimateString &&
      `shippingEstimate${isPickup ? 'Pickup' : ''}-${
        shippingEstimate.split(/[0-9]+/)[1]
      }`
  )
}

const getTimeAmount = (shippingEstimate) => {
  return shippingEstimate && shippingEstimate.split(/\D+/)[0]
}

const TranslateEstimate = ({ intl, shippingEstimate, isPickup }) => {
  const id = getTranslateId(shippingEstimate, isPickup)
  const timeAmount = getTimeAmount(shippingEstimate)

  return id && timeAmount && intl
    ? intl.formatMessage({ id }, { timeAmount })
    : ''
}

TranslateEstimate.defaultProps = {
  shippingEstimate: '',
}

TranslateEstimate.propTypes = {
  intl: intlShape,
  isPickup: PropTypes.bool,
  shippingEstimate: PropTypes.string.isRequired,
}

export default injectIntl(TranslateEstimate)
