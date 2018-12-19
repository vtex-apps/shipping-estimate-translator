import TranslateEstimate from './TranslateEstimate'
import TestRenderer from 'react-test-renderer'
import React from 'react'
import { IntlProvider } from 'react-intl'
import messages from '../messages/pt.json'

describe('TranslateEstimate', () => {
  it('should return empty string if does not pass shippingEstimate', () => {
    const wrapper = TestRenderer.create(
      <IntlProvider locale="pt" messages={messages}>
        <TranslateEstimate />
      </IntlProvider>
    )

    expect(wrapper.toJSON()).toBe('')
  })

  it('should return empty string if passes only number', () => {
    const wrapper = TestRenderer.create(
      <IntlProvider locale="pt" messages={messages}>
        <TranslateEstimate shippingEstimate="0" />
      </IntlProvider>
    )

    expect(wrapper.toJSON()).toBe('')
  })

  it('should return empty string if passes only string', () => {
    const wrapper = TestRenderer.create(
      <IntlProvider locale="pt" messages={messages}>
        <TranslateEstimate shippingEstimate="bd" />
      </IntlProvider>
    )

    expect(wrapper.toJSON()).toBe('')
  })

  it('should return translated string if passes the right parameter', () => {
    const wrapper = TestRenderer.create(
      <IntlProvider locale="pt" messages={messages}>
        <TranslateEstimate shippingEstimate="0bd" />
      </IntlProvider>
    )

    expect(wrapper.toJSON()).toBe('No mesmo dia')
  })
})
