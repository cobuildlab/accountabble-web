import { validateEmail , matchSpaces , isEmpty } from './regexp'



/**
 * function to validate forms
 * @param  {} {name string
 * @param  {} email string
 * @param  {} comment string}
 * @return return an expcion depending on the condition
 */
export const validateForm = ( { name , email , comment } ) => {

    if(isEmpty( name ) || isEmpty( email ) ||  isEmpty( comment ) ){
        const E = 'please fill in the fields'
        throw new Error(E)
    }
       
    if(matchSpaces( name ) || matchSpaces( email )){
        const E = 'the name and email must not have space'
        throw new Error(E)
    }
   if (validateEmail( email )){
        const E = 'invalid email'
        throw new Error(E)
   }

}