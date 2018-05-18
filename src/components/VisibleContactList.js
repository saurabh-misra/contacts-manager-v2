import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ContactList from './ContactList';
import { toggleFavorite } from '../actions';
import { getVisibleContacts } from '../reducers'; 
import { fetchContacts } from '../api';

class VisibleContactList extends Component{
    componentDidMount(){
        fetchContacts(this.props.filter)
            .then( (contacts) => {
                console.log(this.props.filter, contacts);
            } 
        );
    }

    componentDidUpdate(prevProps){
        if(prevProps.filter !== this.props.filter){
            fetchContacts(this.props.filter)
                .then( (contacts) => {
                    console.log(this.props.filter, contacts);
                } 
            );
        }
    }

    render(){
        return <ContactList {...this.props} />;
    }
}

const mapStateToProps = (state, ownProps) => {
    const filter = ownProps.match.params.filter || 'all';
    return {
        contacts: getVisibleContacts(state, filter),
        filter
    }
};
VisibleContactList = withRouter(
    connect(
        mapStateToProps,
        { onFavoriteToggle: toggleFavorite }
    )(VisibleContactList)
);

export default VisibleContactList;