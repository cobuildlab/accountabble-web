import { validateEmail , matchSpaces , isEmpty } from './regexp'



/**
 * function to validate forms
 * @param  {} {name string
 * @param  {} email string
 * @param  {} comment string}
 * @return return an expcion depending on the condition
 */
export const validateContactForm = ( { name , email , comment } ) => {

    if(isEmpty( name )){
        const E = 'Please enter a name'
        throw new Error(E)
    }
    if(isEmpty( email )){
        const E = 'Please enter an email'
        throw new Error(E)
    }
    if(isEmpty( comment )) {
        const E = 'Please enter your comment'
        throw new Error(E)
    }
       
    if(matchSpaces( name ) || matchSpaces( email )){
        const E = 'The name and email must not have space'
        throw new Error(E)
    }
   if (validateEmail( email )){
        const E = 'Invalid email'
        throw new Error(E)
   }

}