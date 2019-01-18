import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import { deliveryWindowShape } from './shapes'

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

const getScheduledWindow = (scheduled, intl) => {
  return {
    date: intl.formatDate(scheduled.startDate, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }),
    startDate: intl.formatTime(scheduled.startDateUtc),
    endDate: intl.formatTime(scheduled.endDateUtc),
  }
}

const TranslateEstimate = ({
  intl,
  isPickup,
  lowerCase,
  shippingEstimate,
  scheduled,
}) => {
  let id, date, startDate, endDate, timeAmount

  if (scheduled) {
    id = 'shippingEstimate-scheduled'(
      ({ date, startDate, endDate } = getScheduledWindow(scheduled, intl))
    )
  } else {
    id = getTranslateId(shippingEstimate, isPickup)
    timeAmount = getTimeAmount(shippingEstimate)
  }

  let translatedEstimate = ''

  if (id && timeAmount && intl) {
    translatedEstimate = intl.formatMessage({ id }, { timeAmount })
  }

  if (id && date && startDate && endDate) {
    translatedEstimate = intl.formatMessage(
      { id },
      { date, startDate, endDate }
    )
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
  scheduled: deliveryWindowShape,
}

export default injectIntl(TranslateEstimate)
