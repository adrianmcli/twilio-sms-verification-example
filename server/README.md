# Example backend React app for Twilio SMS Verification

There are only two routes:

### `/submit/phone` — `(phoneNumber, countryCode)`

This begins the verification process by submitting the phone number (only digits, without country code) and the country code (e.g. `US`, `CA`, etc.)

**Example Request**

```js
const sendRequest = (url, payload) =>
  fetch("http://localhost:4000/submit/phone", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phoneNumber: "4165551234",
      countryCode: "CA",
    }),
  });
```

### `/submit/verify` — `(code, phoneNumber, countryCode)`

This verifies the verification code that the user should have received on their phone.

**Example Request**

```js
const sendRequest = (url, payload) =>
  fetch("http://localhost:4000/submit/verify", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code: "0000",
      phoneNumber: "4165551234",
      countryCode: "CA",
    }),
  });
```