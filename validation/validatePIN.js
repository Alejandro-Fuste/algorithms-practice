// My Solutions

// function validatePIN (pin) {
//   //return true or false
//  return (/^\d{4}$/).test(pin) === true | (/^\d{6}$/).test(pin) === true ? true : false;
// }

const validatePIN = (pin) => ((/^\d{4}$/.test(pin) === true) | (/^\d{6}$/.test(pin) === true) ? true : false);
