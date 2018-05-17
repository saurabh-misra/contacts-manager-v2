import { connect } from 'react-redux';

import ContactList from './ContactList';
import { toggleFavorite } from '../actions';

const getVisibleContacts = (contacts, filter) => {
    if (filter === 'favorites')
        return contacts.filter((contact) => contact.isFavorite);

    return contacts;
};
const mapStateToProps = (state, ownProps) => ({
    contacts: getVisibleContacts(state.contacts, ownProps.filter)
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