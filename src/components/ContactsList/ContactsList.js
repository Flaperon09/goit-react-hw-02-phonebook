import React, { Component } from 'react';
import shortid from 'shortid';
import { ContactListItem } from './ContactsList.styled';

class ContactsList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.contacts.map(contact =>
                        <ContactListItem key={shortid.generate()}>{contact.name}</ContactListItem>)
                    }
                </ul>
            </div>
        )
    }
};

export default ContactsList;