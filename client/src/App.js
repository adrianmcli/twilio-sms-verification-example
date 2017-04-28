import React, { Component } from "react";

import { submitPhoneNumber, submitVerificationCode } from "./api";
import { validatePhoneNumber, validateVerificationCode } from "./utils";

// 1. Validate phone number.
// 2. Make API call to submit phone number (return 200 to indicate SMS sent).
// 3. Validate verification code.
// 4. Make API call to submit verification code (return 200 to indicate success).

class App extends Component {
  state = {
    phoneNumber: "",
    verificationCode: "",
    SMSSent: false,
    numberVerified: false,
  };

  submitPhoneNumberInput = () => {
    const { phoneNumber } = this.state;
    if (validatePhoneNumber(phoneNumber)) {
      submitPhoneNumber(phoneNumber);
      // TODO - if success, set SMSSent to true
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  submitVerificationCodeInput = () => {
    const { verificationCode } = this.state;
    if (validateVerificationCode(verificationCode)) {
      submitVerificationCode(verificationCode);
      // TODO - If success, set Verified to true
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  handleInputChange = ({ target }) => {
    const { id, value } = target;
    this.setState({ [id]: value });
  };

  render() {
    return (
      <div>
        {/*Phone Input Form*/}
        <div>
          <h2>Enter your phone number:</h2>
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
        </div>
        {/*SMS Sent*/}
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
        </div>
        {/*Verified Block*/}
        <div>
          <h2>Verified!</h2>
          <button onClick={() => alert("Success! Go to next page.")}>
            Click to Continue
          </button>
        </div>
      </div>
    );
  }
}

export default App;
