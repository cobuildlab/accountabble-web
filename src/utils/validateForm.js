import {validateEmail, matchSpaces, isEmpty} from './regexp'


/**
 * function to validate forms
 * @param  {} {name string
 * @param  {} email string
 * @param  {} comment string}
 * @return return an expcion depending on the condition
 */
export const validateContactForm = ({name, email, comment}) => {

  if (isEmpty(name)) {
    const E = `Name can't be empty.`;
    throw new Error(E)
  }

  if (isEmpty(email)) {
    const E = `Email can't be empty.`;
    throw new Error(E)
  }

  if (isEmpty(comment)) {
    const E = `Comment can't be empty.`;
    throw new Error(E)
  }

  if (matchSpaces(name) || matchSpaces(email)) {
    const E = 'The name and email must not have spaces.';
    throw new Error(E)
  }
  if (validateEmail(email)) {
    const E = 'Invalid email.';
    throw new Error(E)
  }

}
