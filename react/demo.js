import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import TranslateEstimate from './TranslateEstimate'

class Calculate extends Component {
  render() {
    return (
      <Fragment>
        <p>Minutes</p>
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

        <p>Hours</p>
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

        <p>Days</p>
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

        <p>Business Days</p>
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

        <p>Pickup Minutes</p>
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

        <p>Pickup Hours</p>
        <p>
          <TranslateEstimate shippingEstimate="0h" isPickup />
        </p>
        <p>
          <TranslateEstimate shippingEstimate="1h" isPickup />
        </p>
        <p>
          <TranslateEstimate shippingEstimate="3h" isPickup />
        </p>

        <p>Pickup Days</p>
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

        <p>Pickup Business Days</p>
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

Calculate.propTypes = {
  intl: intlShape,
  shippingEstimate: PropTypes.string,
}

export default injectIntl(Calculate)
