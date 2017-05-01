# Example backend React app for Twilio SMS Verification

There are only two routes:

### `/submit/phone` — `(phoneNumber, countryCode)`

This begins the verification process by submitting the phone number (only digits, without country code) and the country code (e.g. `US`, `CA`, etc.)

### `/submit/verify` — `(code, phoneNumber, countryCode)`

This verifies the verification code that the user should have received on their phone.