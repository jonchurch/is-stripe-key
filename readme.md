# `isStripeKey()`

Checks if a string is formatted like a Stripe API key.

## Usage

### isStripeKey(string, [options])

Returns `true` if the passed string matches the format of a Stripe API key.

```javascript
const isStripeKey = require("is-stripe-key");

isStripeKey("sk_live_vQp5vQIibsjlRWJm5nkMobJW00K8o8uW7q");
// returns true

isStripeKey("pk_live_vQp5vQIibsjlRWJm5nkMobJW00K8o8uW7q");
// returns true

isStripeKey("sk_live_vQp5vQ", { exact: false });
// returns true
```

The optional `options` parameter specifies the behavior of the matching.

| Property | Description                                                                                                                               | Type    | Default |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| `exact`  | If the matching regex should use the most exact match, where the entire key must be exactly 32 characters long after trimming whitespace. | Boolean | `true`  |
