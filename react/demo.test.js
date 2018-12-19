import Demo from './demo'
import TestRenderer from 'react-test-renderer'
import React from 'react'
import { IntlProvider } from 'react-intl'
import messages from '../messages/pt.json'

describe('Demo', () => {
  it('Save demo strings', () => {
    const wrapper = TestRenderer.create(
      <IntlProvider locale="pt" messages={messages}>
        <Demo />
      </IntlProvider>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
