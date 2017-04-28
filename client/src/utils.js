const sanitizePhoneNumber = rawInput => rawInput;

export const validatePhoneNumber = rawInput => {
  const num = sanitizePhoneNumber(rawInput);
  return true;
};

export const validateVerificationCode = () => {
  return true;
};
