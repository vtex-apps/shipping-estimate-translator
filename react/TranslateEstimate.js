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
  return scheduled.startDateUtc && scheduled.endDateUtc
    ? {
      date: intl.formatDate(scheduled.startDateUtc, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      }),
      startDate: intl.formatTime(scheduled.startDateUtc, {
        timeZone: 'UTC',
      }),
      endDate: intl.formatTime(scheduled.endDateUtc, {
        timeZone: 'UTC',
      }),
    }
    : {
      date: null,
      startDate: null,
      endDate: null,
    }
}

const TranslateEstimate = ({
  intl,
  isPickup,
  lowerCase,
  shippingEstimate,
  scheduled,
}) => {
  if (scheduled) {
    const { date, startDate, endDate } = getScheduledWindow(scheduled, intl)
    const hasDeliveryWindow = !!(startDate && endDate)
    const translatedEstimate = hasDeliveryWindow
      ? intl.formatMessage(
        {
          id: 'shippingEstimate-scheduled',
        },
        { date, startDate, endDate }
      )
      : intl.formatMessage({
        id: 'shippingEstimate-scheduled-no-dates',
      })
    return lowerCase ? translatedEstimate.toLowerCase() : translatedEstimate
  }

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
  scheduled: deliveryWindowShape,
}

export default injectIntl(TranslateEstimate)
