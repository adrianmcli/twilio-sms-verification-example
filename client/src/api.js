const sendRequest = (url, payload) =>
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

export const submitPhoneNumber = phoneNumber =>
  sendRequest("http://localhost:4000/submit/phone", { phoneNumber });

export const submitVerificationCode = code =>
  sendRequest("http://localhost:4000/submit/code", { code });
