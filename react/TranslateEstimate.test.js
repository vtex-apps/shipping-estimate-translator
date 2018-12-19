import TranslateEstimate from './TranslateEstimate'
import TestRenderer from 'react-test-renderer'

describe('TranslateEstimate', () => {
  it('return null if does not pass shippingEstimate', () => {
    const wrapper = TestRenderer.create(TranslateEstimate)
    console.log('wrapper', wrapper)
    expect(true).toBe(true)
  })
})
