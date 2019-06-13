import Flux from 'flux-state';

export const CONTACT_SENDED = 'CONTACT_SENDED';
export const CONTACT_ERROR = 'CONTACT_ERROR' ;

class ContactUs extends Flux.DashStore{
    constructor(){
        super();
        this.addEvent(CONTACT_SENDED);
        this.addEvent(CONTACT_ERROR);
    }
}

const contactUsStore = new ContactUs();

export default contactUsStore;