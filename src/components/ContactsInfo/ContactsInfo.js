import { ContactListItem, ButtonDelete } from './ContactsInfo.styled';

export const ContactsInfo = ({ contacts, onDeleteContact }) => {
    return (
        contacts.map(contact =>
            <ContactListItem key={contact.id}>{contact.name}: {contact.number}
                <ButtonDelete onClick={() => onDeleteContact(contact.id)}>Delete</ButtonDelete>
            </ContactListItem>)
    )
}