const sanitizePhoneNumber = rawInput => {
  return rawInput.replace(/[^0-9]/g, "");
};

// currently only checks US/CA numbers
export const validatePhoneNumber = rawInput => {
  const num = sanitizePhoneNumber(rawInput);
  return num.length === 10
};

export const validateVerificationCode = () => {
  return true;
};
