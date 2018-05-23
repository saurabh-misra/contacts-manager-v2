import { v4 } from 'node-uuid';

const fakeDatabase = {
    contacts: [
        {
            id: v4(),
            name: 'Mom',
            phone: '1234512345',
            isFavorite: true
        },
        {
            id: v4(),
            name: 'Ganesh',
            phone: '1234512345',
            isFavorite: false
        },
        {
            id: v4(),
            name: 'Arpita',
            phone: '1234512345',
            isFavorite: true
        }
    ]
};

const fakeAjaxCall = (ms) => (
    new Promise( (resolve) => {
        setTimeout( () => { 
            resolve(fakeDatabase.contacts); 
        }, ms);
    })
);

export const fetchContacts = (filter) => {
    let ms = 10000;
    if(filter === 'favorites')
        ms = 20000;

    return fakeAjaxCall(ms).then( (contacts) => {
        switch(filter){
            case 'all':
                return contacts;
            case 'favorites':
                return contacts.filter( contact => contact.isFavorite );
            default:
                throw new Error(`Unknown filter: ${filter}`);
        }
    })
};
