import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

class TranslateEstimate extends React.Component {
  getTranslateId = (shippingEstimate, isPickup) => {
    return `shippingEstimate${isPickup ? 'Pickup' : ''}-${
      shippingEstimate.split(/[0-9]+/)[1]
    }`
  }

  getTimeAmount = shippingEstimate => {
    return shippingEstimate && shippingEstimate.split(/\D+/)[0]
  }

  render() {
    const { intl, shippingEstimate, isPickup } = this.props

    const id = this.getTranslateId(shippingEstimate, isPickup)

    const timeAmount = this.getTimeAmount(shippingEstimate)

    return (
      id && timeAmount && intl && intl.formatMessage({ id }, { timeAmount })
    )
  }
}

TranslateEstimate.propTypes = {
  intl: intlShape,
  isPickup: PropTypes.bool,
  shippingEstimate: PropTypes.string.isRequired,
}

export default injectIntl(TranslateEstimate)
