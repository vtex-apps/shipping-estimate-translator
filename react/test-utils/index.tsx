import React, { ReactNode } from 'react'
import { IntlProvider } from 'react-intl'
import { render } from 'react-testing-library'
import messages from '../../messages/pt.json'

const renderWithIntl = (node: ReactNode) => {
  return render(
    <IntlProvider locale="pt" messages={messages}>
      {node}
    </IntlProvider>
  )
}

export * from 'react-testing-library'

export { renderWithIntl }
