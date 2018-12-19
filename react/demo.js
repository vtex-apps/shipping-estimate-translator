import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import TranslateEstimate from './TranslateEstimate'

class Demo extends Component {
  render() {
    return (
      <Fragment>
        <p>Minutos</p>
        <p>
          <TranslateEstimate shippingEstimate="0m" />
        </p>
        <p>
          <TranslateEstimate shippingEstimate="1m" />
        </p>
        <p>
          <TranslateEstimate shippingEstimate="3m" />
        </p>
        <br />

        <p>Horas</p>
        <p>
          <TranslateEstimate shippingEstimate="0h" />
        </p>
        <p>
          <TranslateEstimate shippingEstimate="1h" />
        </p>
        <p>
          <TranslateEstimate shippingEstimate="3h" />
        </p>
        <br />

        <p>Dias</p>
        <p>
          <TranslateEstimate shippingEstimate="0d" />
        </p>
        <p>
          <TranslateEstimate shippingEstimate="1d" />
        </p>
        <p>
          <TranslateEstimate shippingEstimate="3d" />
        </p>
        <br />

        <p>Dias Úteis</p>
        <p>
          <TranslateEstimate shippingEstimate="0bd" />
        </p>

        <p>
          <TranslateEstimate shippingEstimate="1bd" />
        </p>
        <p>
          <TranslateEstimate shippingEstimate="3bd" />
        </p>
        <br />

        <p>Pickup Minutos</p>
        <p>
          <TranslateEstimate shippingEstimate="0m" isPickup />
        </p>

        <p>
          <TranslateEstimate shippingEstimate="1m" isPickup />
        </p>
        <p>
          <TranslateEstimate shippingEstimate="3m" isPickup />
        </p>
        <br />

        <p>Pickup Horas</p>
        <p>
          <TranslateEstimate shippingEstimate="0h" isPickup />
        </p>
        <p>
          <TranslateEstimate shippingEstimate="1h" isPickup />
        </p>
        <p>
          <TranslateEstimate shippingEstimate="3h" isPickup />
        </p>

        <p>Pickup Dias</p>
        <p>
          <TranslateEstimate shippingEstimate="0d" isPickup />
        </p>
        <p>
          <TranslateEstimate shippingEstimate="1d" isPickup />
        </p>
        <p>
          <TranslateEstimate shippingEstimate="3d" isPickup />
        </p>
        <br />

        <p>Pickup Dias Úteis</p>
        <p>
          <TranslateEstimate shippingEstimate="0bd" isPickup />
        </p>
        <p>
          <TranslateEstimate shippingEstimate="1bd" isPickup />
        </p>
        <p>
          <TranslateEstimate shippingEstimate="3bd" isPickup />
        </p>
        <br />
      </Fragment>
    )
  }
}

Demo.propTypes = {
  intl: intlShape,
  shippingEstimate: PropTypes.string,
}

export default injectIntl(Demo)
