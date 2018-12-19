import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

class TranslateEstimate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.getTranslateId(props.shippingEstimate, props.isPickup),
      timeAmount: this.getTimeAmount(props.shippingEstimate),
    }
  }

  componentDidUpdate() {
    const { shippingEstimate, isPickup } = this.props

    this.setState({
      id: this.getTranslateId(shippingEstimate, isPickup),
      timeAmount: this.getTimeAmount(shippingEstimate),
    })
  }

  getTranslateId(shippingEstimate, isPickup) {
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

  getTimeAmount(shippingEstimate) {
    return shippingEstimate && shippingEstimate.split(/\D+/)[0]
  }

  render() {
    const { intl } = this.props
    const { id, timeAmount } = this.state

    return id && timeAmount && intl
      ? intl.formatMessage({ id }, { timeAmount })
      : ''
  }
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
