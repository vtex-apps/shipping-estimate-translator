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

    const expectedLabel = 'em até 1 dia útil'

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

      const expectedLabel = 'Em alguns instantes'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for 1 minute', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="1m" />
      )

      const expectedLabel = 'Em até 1 minuto'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for multiple minutes', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="3m" />
      )

      const expectedLabel = 'Em até 3 minutos'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })

  describe('Hours', () => {
    afterEach(cleanup)

    it('should return correct for 0 hour', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="0h" />
      )

      const expectedLabel = 'Em alguns instantes'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for 1 hours', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="1h" />
      )

      const expectedLabel = 'Em até 1 hora'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for multiple hours', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="3h" />
      )

      const expectedLabel = 'Em até 3 horas'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })

  describe('Days', () => {
    afterEach(cleanup)

    it('should return correct for 0 day', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="0d" />
      )

      const expectedLabel = 'No mesmo dia'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for 1 days', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="1d" />
      )

      const expectedLabel = 'Em até 1 dia'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for multiple days', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="3d" />
      )

      const expectedLabel = 'Em até 3 dias'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })

  describe('Business Days', () => {
    afterEach(cleanup)

    it('should return correct for 0 business day', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="0bd" />
      )

      const expectedLabel = 'No mesmo dia'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for 1 business days', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="1bd" />
      )

      const expectedLabel = 'Em até 1 dia útil'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for multiple business days', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="3bd" />
      )

      const expectedLabel = 'Em até 3 dias úteis'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })

  describe('Pickup Minutes', () => {
    afterEach(cleanup)

    it('should return correct for 0 minute', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="0m" isPickup />
      )

      const expectedLabel = 'Em alguns instantes'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for 1 minute', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="1m" isPickup />
      )

      const expectedLabel = 'Pronto em até 1 minuto'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for multiple minutes', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="3m" isPickup />
      )

      const expectedLabel = 'Pronto em até 3 minutos'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })

  describe('Pickup Hours', () => {
    afterEach(cleanup)

    it('should return correct for 0 hour', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="0h" isPickup />
      )

      const expectedLabel = 'Em alguns instantes'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for 1 hours', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="1h" isPickup />
      )

      const expectedLabel = 'Pronto em até 1 hora'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for multiple hours', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="3h" isPickup />
      )

      const expectedLabel = 'Pronto em até 3 horas'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })

  describe('Pickup Days', () => {
    afterEach(cleanup)

    it('should return correct for 0 day', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="0d" isPickup />
      )

      const expectedLabel = 'Pronto no mesmo dia'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for 1 days', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="1d" isPickup />
      )

      const expectedLabel = 'Pronto em até 1 dia'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for multiple days', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="3d" isPickup />
      )

      const expectedLabel = 'Pronto em até 3 dias'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })

  describe('Pickup Business Days', () => {
    afterEach(cleanup)

    it('should return correct for 0 business day', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="0bd" isPickup />
      )

      const expectedLabel = 'Pronto no mesmo dia'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for 1 business days', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="1bd" isPickup />
      )

      const expectedLabel = 'Pronto em até 1 dia útil'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })

    it('should return correct for multiple business days', () => {
      const { getByText } = renderWithIntl(
        <TranslateEstimate shippingEstimate="3bd" isPickup />
      )

      const expectedLabel = 'Pronto em até 3 dias úteis'

      expect(getByText(expectedLabel).textContent).toBe(expectedLabel)
    })
  })
})
