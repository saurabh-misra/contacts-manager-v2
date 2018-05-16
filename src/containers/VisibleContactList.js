import { connect } from 'react-redux';

import ContactList from '../components/ContactList';
import { toggleFavorite } from '../actions';

const getVisibleContacts = (contacts, filter) => {
    if (filter === 'SHOW_FAVORITES')
        return contacts.filter((contact) => contact.isFavorite);

    return contacts;
};
const mapStateToProps = (state) => ({
    contacts: getVisibleContacts(state.contacts, state.visibilityFilter)
});
const mapDispatchToProps = (dispatch) => ({
    onFavoriteToggle(id) {
        dispatch(toggleFavorite(id));
    }
});
const VisibleContactList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactList);

export default VisibleContactList;