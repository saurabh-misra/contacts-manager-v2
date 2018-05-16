import React from 'react';

import { addContact } from '../actions';
import { connect } from 'react-redux';

import './AddContact.css';

let AddContact = ({ dispatch }) => {
    let inputName = React.createRef();
    let inputPhone = React.createRef();

    function handleClick() {
        dispatch(
            addContact(inputName.current.value, inputPhone.current.value)
        );

        inputName.current.value = '';
        inputPhone.current.value = '';
    }

    return (
        <div id="AddContact">
            <input ref={inputName} placeholder='Enter Name' />
            <input ref={inputPhone} placeholder='Enter Phone' />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};
AddContact = connect(
    null,
    (dispatch) => {
        return { dispatch }
    }
)(AddContact);

export default AddContact;