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
            resolve(); 
        }, ms);
    })
);

export const fetchContacts = (filter) => {
    return fakeAjaxCall(500).then( () => {
        switch(filter){
            case 'all':
                return fakeDatabase.contacts;
            case 'favorites':
                return fakeDatabase.contacts.filter( contact => contact.isFavorite );
            default:
                throw new Error(`Unknown filter: ${filter}`);
        }
    })
};

export const addContact = (name, phone) => {
    return fakeAjaxCall(500).then( () => {
        const contact = {
            id: v4(),
            name,
            phone,
            isFavorite: false
        };
        fakeDatabase.contacts.push(contact);

        return contact;
    } );
};

export const toggleFavorite = (id) => {
    return fakeAjaxCall(500).then( () => {
        const contact = fakeDatabase.contacts.find( contact => contact.id === id );
        contact.isFavorite = !contact.isFavorite;

        return contact;
    } );
};


