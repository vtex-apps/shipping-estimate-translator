import React from 'react'

import TranslateEstimate from './TranslateEstimate'
import { renderWithIntl, cleanup } from '../test-utils' // eslint-disable-line import/named

describe('TranslateEstimate - Empty Values', () => {
  afterEach(cleanup)

  it('should return empty string if does not pass shippingEstimate', () => {
    const { getByText } = renderWithIntl(<TranslateEstimate />)

    const expectedLabel = ''

    expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
  })

  it('should return empty string if passes only number', () => {
    const { getByText } = renderWithIntl(
      <TranslateEstimate shippingEstimate="0" />
    )

    const expectedLabel = ''

    expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
  })

  it('should return empty string if passes only string', () => {
    const { getByText } = renderWithIntl(
      <TranslateEstimate shippingEstimate="bd" />
    )

    const expectedLabel = ''

    expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
  })

  it('should return value in lowerCase if the prop is passed', () => {
    const { getByText } = renderWithIntl(
      <TranslateEstimate shippingEstimate="1bd" lowerCase />
    )

    const expectedLabel = 'in 1 business day'

    expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
  })
})

describe('TranslateEstimate - Valid Values', () => {
  describe('Minutes', () => {
    afterEach(cleanup)

    it('should return correct for 0 minute', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="0m" />
      )

      const expectedLabel = 'Now'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for 1 minute', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="1m" />
      )

      const expectedLabel = 'In 1 minute'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for multiple minutes', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="3m" />
      )

      const expectedLabel = 'Up to 3 minutes'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })

  describe('Hours', () => {
    afterEach(cleanup)

    it('should return correct for 0 hour', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="0h" />
      )

      const expectedLabel = 'Now'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for 1 hours', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="1h" />
      )

      const expectedLabel = 'In 1 hour'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for multiple hours', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="3h" />
      )

      const expectedLabel = 'Up to 3 hours'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })

  describe('Days', () => {
    afterEach(cleanup)

    it('should return correct for 0 day', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="0d" />
      )

      const expectedLabel = 'Today'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for 1 days', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="1d" />
      )

      const expectedLabel = 'In 1 day'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for multiple days', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="3d" />
      )

      const expectedLabel = 'Up to 3 days'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })

  describe('Business Days', () => {
    afterEach(cleanup)

    it('should return correct for 0 business day', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="0bd" />
      )

      const expectedLabel = 'Today'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for 1 business days', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="1bd" />
      )

      const expectedLabel = 'In 1 business day'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for multiple business days', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="3bd" />
      )

      const expectedLabel = 'Up to 3 business days'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })

  describe('Pickup Minutes', () => {
    afterEach(cleanup)

    it('should return correct for 0 minute', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="0m" isPickup />
      )

      const expectedLabel = 'Ready for pickup'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for 1 minute', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="1m" isPickup />
      )

      const expectedLabel = 'Ready in up to 1 minute'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for multiple minutes', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="3m" isPickup />
      )

      const expectedLabel = 'Ready in up to 3 minutes'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })

  describe('Pickup Hours', () => {
    afterEach(cleanup)

    it('should return correct for 0 hour', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="0h" isPickup />
      )

      const expectedLabel = 'Ready for pickup'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for 1 hours', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="1h" isPickup />
      )

      const expectedLabel = 'Ready in up to 1 hour'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for multiple hours', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="3h" isPickup />
      )

      const expectedLabel = 'Ready in up to 3 hours'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })

  describe('Pickup Days', () => {
    afterEach(cleanup)

    it('should return correct for 0 day', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="0d" isPickup />
      )

      const expectedLabel = 'Ready today'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for 1 days', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="1d" isPickup />
      )

      const expectedLabel = 'Ready in up to 1 day'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for multiple days', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="3d" isPickup />
      )

      const expectedLabel = 'Ready in up to 3 days'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })

  describe('Pickup Business Days', () => {
    afterEach(cleanup)

    it('should return correct for 0 business day', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="0bd" isPickup />
      )

      const expectedLabel = 'Ready today'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for 1 business days', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="1bd" isPickup />
      )

      const expectedLabel = 'Ready in up to 1 business day'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for multiple business days', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="3bd" isPickup />
      )

      const expectedLabel = 'Ready in up to 3 business days'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })

  describe('Scheduled delivery/pickup', () => {
    afterEach(cleanup)

    it('should return correct for a given delivery window', () => {
      const deliveryWindow = {
        startDateUtc: '2019-01-21T12:00:00+00:00',
        endDateUtc: '2019-01-21T13:00:00+00:00',
      }

      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="0bd" scheduled={deliveryWindow} />
      )

      const expectedLabel = '1/21/2019, between 12:00 PM and 1:00 PM'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })

  describe('Scheduled delivery', () => {
    afterEach(cleanup)

    it('should return correct for a scheduled delivery with no delivery window', () => {
      const deliveryWindow = {
        startDateUtc: null,
        endDateUtc: null,
      }

      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="0bd" scheduled={deliveryWindow} />
      )

      const expectedLabel = 'Scheduled'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })
})
