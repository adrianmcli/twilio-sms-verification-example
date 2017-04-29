import React, { Component } from "react";

import { submitPhoneNumber, submitVerificationCode } from "./api";
import { validatePhoneNumber, validateVerificationCode } from "./utils";

// 1. Validate phone number.
// 2. Make API call to submit phone number (return 200 to indicate SMS sent).
// 3. Validate verification code.
// 4. Make API call to submit verification code (return 200 to indicate success).

class App extends Component {
  state = {
    countryCode: "US",
    phoneNumber: "",
    verificationCode: "",
    SMSSent: false,
    numberVerified: false,
  };

  submitPhoneNumberInput = () => {
    const { countryCode, phoneNumber } = this.state;
    if (validatePhoneNumber(phoneNumber)) {
      submitPhoneNumber(phoneNumber, countryCode).then(res => {
        if (res.status === 200) {
          console.log("SMS Sent!");
          this.setState({ SMSSent: true });
        }
      });
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  submitVerificationCodeInput = () => {
    const { verificationCode, phoneNumber, countryCode } = this.state;
    if (validateVerificationCode(verificationCode)) {
      submitVerificationCode(
        verificationCode,
        phoneNumber,
        countryCode
      ).then(res => {
        if (res.status === 200) {
          console.log("Phone Verified!");
          this.setState({ numberVerified: true });
        }
      });
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  handleCountryChange = e => this.setState({ countryCode: e.target.value });

  handleInputChange = ({ target }) => {
    const { id, value } = target;
    this.setState({ [id]: value });
  };

  render() {
    const { SMSSent, numberVerified } = this.state;
    const showPhoneNumberForm = !SMSSent;
    const showVerificationCodeForm = SMSSent && !numberVerified;
    const showFinalMessage = SMSSent && numberVerified;
    return (
      <div>

        {/*Phone Input Form*/}
        {showPhoneNumberForm &&
          <div>
            <h2>Enter your phone number:</h2>
            <select
              value={this.state.value}
              onChange={this.handleCountryChange}
            >
              <option value="US">United States (+1)</option>
              <option value="CA">Canada (+1)</option>
            </select>
            <input
              id="phoneNumber"
              type="text"
              placeholder="(416)-555-5555"
              value={this.state.phoneNumber}
              onChange={this.handleInputChange}
            />
            <button onClick={this.submitPhoneNumberInput}>
              Send Verification SMS
            </button>
          </div>}

        {/*SMS Sent*/}
        {showVerificationCodeForm &&
          <div>
            <h2>Verification SMS Sent!</h2>
            <div>Enter your verification code:</div>
            <input
              id="verificationCode"
              type="text"
              value={this.state.verificationCode}
              onChange={this.handleInputChange}
            />
            <button onClick={this.submitVerificationCodeInput}>Verify</button>
          </div>}

        {/*Verified Block*/}
        {showFinalMessage &&
          <div>
            <h2>Verified!</h2>
            <button onClick={() => alert("Success! Go to next page.")}>
              Click to Continue
            </button>
          </div>}

      </div>
    );
  }
}

export default App;
