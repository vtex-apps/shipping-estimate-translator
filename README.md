# Shipping Estimate Translator

> A React component that renders shippingEstimate property from Checkout's OrderForm

## Setup

Through **vtex.io**:

Add the following dependency to your `manifest.json` dependencies:

```
"vtex.shipping-estimate-translator": "1.x"
```

## Usage

```js
import TranslateEstimate from 'vtex.shipping-estimate-translator/TranslateEstimate'

<TranslateEstimate shippingEstimate="0bd" />
// Same day

<TranslateEstimate shippingEstimate="1m" />
// In 1 minute

<TranslateEstimate shippingEstimate="0m" isPickup />
// Ready for pickup
```

### Params

- **shippingEstimate** | Type `string` | String to be translated
- **isPickup** | Type `boolean` | Condition to translate estimate for pickup point

### Returns

- **Translated value** | Type `string`

## Testing

```sh
yarn test
```
