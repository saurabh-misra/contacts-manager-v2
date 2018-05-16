import { connect } from 'react-redux';

import ContactList from '../components/ContactList';
import { toggleFavorite } from '../actions';

const getVisibleContacts = (contacts, filter) => {
    if (filter === 'SHOW_FAVORITES')
        return contacts.filter((contact) => contact.isFavorite);

    return contacts;
};
const mapStateToContactListProps = (state) => {
    return {
        contacts: getVisibleContacts(state.contacts, state.visibilityFilter)
    };
}
const mapDispatchToContactListProps = (dispatch) => {
    return {
        onFavoriteToggle: (id) => {
            dispatch(toggleFavorite(id));
        }
    };
};
const VisibleContactList = connect(
    mapStateToContactListProps,
    mapDispatchToContactListProps
)(ContactList);

export default VisibleContactList;