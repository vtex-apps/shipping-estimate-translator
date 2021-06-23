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

export function getEstimateTranslation({
  intl,
  shippingEstimate,
  isPickup = false,
  lowerCase = false,
  scheduled = false,
}) {
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

export default { getEstimateTranslation }
