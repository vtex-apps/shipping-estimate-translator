import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

import { getEstimateTranslation } from './getEstimateTranslation'
import { deliveryWindowShape } from './shapes'

const TranslateEstimate = ({
  intl,
  isPickup,
  lowerCase,
  shippingEstimate,
  scheduled,
}) => {
  return getEstimateTranslation({
    intl,
    isPickup,
    lowerCase,
    shippingEstimate,
    scheduled,
  })
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
  scheduled: deliveryWindowShape,
}

export default injectIntl(TranslateEstimate)
