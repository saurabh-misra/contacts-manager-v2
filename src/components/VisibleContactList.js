import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ContactList from './ContactList';
import { toggleFavorite } from '../actions';

const getVisibleContacts = (contacts, filter) => {
    if (filter === 'favorites')
        return contacts.filter((contact) => contact.isFavorite);

    return contacts;
};
const mapStateToProps = (state, ownProps) => ({
    contacts: getVisibleContacts(state.contacts, ownProps.match.params.filter || 'all')
});
const VisibleContactList = withRouter(
    connect(
        mapStateToProps,
        { onFavoriteToggle: toggleFavorite }
    )(ContactList)
);

export default VisibleContactList;