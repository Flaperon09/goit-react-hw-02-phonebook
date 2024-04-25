import React, { Component } from 'react';
import { ContactListItem, ButtonDelete } from './ContactsList.styled';

class ContactsList extends Component {
    render() {
        const { contacts, onDeleteContact } = this.props;
        return (
            <div>
                <ul>
                    {contacts.map(contact =>
                        <ContactListItem key={contact.id}>{contact.name}: {contact.number}
                            <ButtonDelete onClick={() => onDeleteContact(contact.id)}>Delete</ButtonDelete>
                        </ContactListItem>)
                    }
                </ul>
            </div>
        )
    }
};

export default ContactsList;