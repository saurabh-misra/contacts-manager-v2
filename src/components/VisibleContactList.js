import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ContactList from './ContactList';
import FetchError from './FetchError';
import * as actions from '../actions';
import { getVisibleContacts, getIsFetching, getErrorMessage } from '../reducers';

class VisibleContactList extends Component {
    fetchData() {
        const { filter, fetchContacts } = this.props;
        fetchContacts(filter).then(() => { console.log('done fetching contacts'); } );
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filter !== this.props.filter) {
            this.fetchData();
        }
    }

    render() {
        const { toggleFavorite, isFetching, contacts, errorMessage } = this.props;

        if(errorMessage && !contacts.length){
            return (
                <FetchError 
                    message={errorMessage}
                    onRetry={ () => { this.fetchData(); } }
                />
            );
        }

        return (isFetching && !contacts.length)
            ? <p>Loading...</p>
            : <ContactList contacts={contacts} onFavoriteToggle={toggleFavorite} />;
    }
}

const mapStateToProps = (state, ownProps) => {
    const filter = ownProps.match.params.filter || 'all';
    return {
        contacts: getVisibleContacts(state, filter),
        isFetching: getIsFetching(state, filter),
        errorMessage: getErrorMessage(state, filter),
        filter
    }
};
VisibleContactList = withRouter(
    connect(
        mapStateToProps,
        actions
    )(VisibleContactList)
);

export default VisibleContactList;