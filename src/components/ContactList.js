import React from 'react';

import Contact from './Contact';

import './ContactList.css';

const ContactList = ({
    contacts,
    onFavoriteToggle
}) => {
    return (
        <ul className='Contacts'>
            {
                contacts.map(
                    (contact) => (
                        <Contact
                            name={contact.name}
                            phone={contact.phone}
                            isFavorite={contact.isFavorite}
                            onFavoriteToggle={() => { onFavoriteToggle(contact.id) }}
                            key={contact.id}
                        />
                    )
                )
            }
        </ul>
    );
};

export default ContactList;