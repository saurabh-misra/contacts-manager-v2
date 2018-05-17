import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ContactList from './ContactList';
import { toggleFavorite } from '../actions';
import { getVisibleContacts } from '../reducers'; 

const mapStateToProps = (state, ownProps) => ({
    contacts: getVisibleContacts(state, ownProps.match.params.filter || 'all')
});
const VisibleContactList = withRouter(
    connect(
        mapStateToProps,
        { onFavoriteToggle: toggleFavorite }
    )(ContactList)
);

export default VisibleContactList;