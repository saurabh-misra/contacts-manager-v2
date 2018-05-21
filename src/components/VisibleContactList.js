import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ContactList from './ContactList';
import * as actions from '../actions';
import { getVisibleContacts } from '../reducers'; 
import { fetchContacts } from '../api';

class VisibleContactList extends Component{
    fetchData(){
        const { filter, receiveContacts } = this.props;
        fetchContacts(filter)
            .then( (contacts) => {
                receiveContacts(filter, contacts);
            } 
        );
    }

    componentDidMount(){
        this.fetchData();
    }

    componentDidUpdate(prevProps){
        if(prevProps.filter !== this.props.filter){
            this.fetchData();
        }
    }

    render(){
        const { toggleFavorite, ...otherProps } = this.props;
        return <ContactList {...otherProps} onFavoriteToggle={toggleFavorite}/>;
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
        actions
    )(VisibleContactList)
);

export default VisibleContactList;