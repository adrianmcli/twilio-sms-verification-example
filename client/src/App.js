import React, { Component } from "react";

import {
  validatePhoneNumber,
  validateVerificationCode,
  requestVerificationStart,
  requestVerifyCode,
} from "./utils";

class App extends Component {
  state = {
    countryCode: "US",
    phoneNumber: "",
    verificationCode: "",
    SMSSent: false,
    numberVerified: false,
  };

  submitPhoneNumberInput = () => {
    const { countryCode, phoneNumber: phone } = this.state;
    if (validatePhoneNumber(phone)) {
      requestVerificationStart(phone, countryCode, () =>
        this.setState({ SMSSent: true })
      );
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  submitVerificationCodeInput = () => {
    const {
      verificationCode: code,
      phoneNumber: phone,
      countryCode,
    } = this.state;
    if (validateVerificationCode(code)) {
      requestVerifyCode(code, phone, countryCode, () =>
        this.setState({ numberVerified: true })
      );
    } else {
      alert("Please enter a valid verification code.");
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
