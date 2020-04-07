import React, { ReactNode } from 'react'
import { IntlProvider } from 'react-intl'
import { render } from 'react-testing-library'
import messages from '../../messages/en.json'

const renderWithIntl = (node: ReactNode) => {
  return render(
    <IntlProvider locale="en" defaultLocale="en" messages={messages}>
      {node}
    </IntlProvider>
  )
}

export * from 'react-testing-library'

export { renderWithIntl }
