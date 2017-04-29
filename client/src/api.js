const sendRequest = (url, payload) =>
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

export const submitPhoneNumber = (phoneNumber, countryCode) =>
  sendRequest("http://localhost:4000/submit/phone", {
    phoneNumber,
    countryCode,
  });

export const submitVerificationCode = (code, phoneNumber, countryCode) =>
  sendRequest("http://localhost:4000/submit/verify", {
    code,
    phoneNumber,
    countryCode,
  });
