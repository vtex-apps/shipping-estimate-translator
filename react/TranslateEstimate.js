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

const getTimeAmount = shippingEstimate => {
  return shippingEstimate && shippingEstimate.split(/\D+/)[0]
}

const TranslateEstimate = ({ intl, isPickup, lowerCase, shippingEstimate }) => {
  const id = getTranslateId(shippingEstimate, isPickup)
  const timeAmount = getTimeAmount(shippingEstimate)
  let translatedEstimate = ''

  if (id && timeAmount && intl) {
    translatedEstimate = intl.formatMessage({ id }, { timeAmount })
  }

  if (lowerCase) {
    translatedEstimate = translatedEstimate.toLowerCase()
  }

  return translatedEstimate
}

TranslateEstimate.defaultProps = {
  shippingEstimate: '',
  lowerCase: false,
}

TranslateEstimate.propTypes = {
  intl: intlShape,
  isPickup: PropTypes.bool,
  lowerCase: PropTypes.bool,
  shippingEstimate: PropTypes.string.isRequired,
}

export default injectIntl(TranslateEstimate)
