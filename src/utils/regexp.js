/**
 * @function validateEmail will validate the email expression.
 * @param {string} email
 * @example
 * validateEmail('Anderson') output: false
 * validateEmail('andersonav37@gmail.com') output: true
 */
export const validateEmail = email => {
  const emailExpression = new RegExp(/\S+@\S+\.\S+/);
  return !emailExpression.test(email);
};

/**
 * @function matchSpaces will validate if the expression contain only spaces.
 * @param {string} expression
 * @example
 * matchSpaces('    ') output: true
 * matchSpaces('test') output: false
 * @returns {boolean}
 */
export const matchSpaces = expression => {
  const fullSpacesExpression = new RegExp(/^\s+$/);
  return fullSpacesExpression.test(expression);
};

/**
 * @function isEmpty check if the string is empty or not.
 * @param {string} expression
 * @returns {boolean}
 */
export const isEmpty = expression => {
  return expression.length === 0;
};

/**
 * @function messageIsRequiredWith should pass if the string is greather than, and less than.
 * @param {string} message
 * @param {number} minLength
 * @param {number} maxLength
 * @returns {boolean}
 * @example
 * messageIsRequiredWith("Hello", 4, 40) output: true
 */
export const messageIsRequiredWith = (message, minLength, maxLength) => {
  if (minLength > 0) {
    return !(message.length >= minLength && message.length <= maxLength);
  }
  return message.length < maxLength;
};

/**
 * @function validateName validates name based on argument.
 * @param {string} name
 */
export const validateName = name => {
  const nameExpression = new RegExp(/^[a-z ,.'-]+$/i);
  return nameExpression.test(name);
};

export const validatePhone = phone => {
  const phoneExpression = new RegExp(
    /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
  );
  return phoneExpression.test(phone);
};

export const validateURL = url => {
  const URLExpression = new RegExp(
    /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi
  );
  return URLExpression.test(url);
};
