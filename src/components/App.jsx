import React, { Component } from 'react';
import { GlobalStyle } from "./GlobalStyle";
import shortid from 'shortid';
import { Section } from './Section';
import Form from './Form';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { ContactsInfo } from './ContactsInfo';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // === Добавление нового контакта
  handleSubmitData = data => {
    // Добавление id в объект контакта
    data.id = shortid.generate();

    let searchParam = 0;

    // Проверка на уже имеющееся в контактах имя
    this.state.contacts.map(contact => {
      if (contact.name.toLowerCase() === data.name.toLowerCase()) {
        searchParam += 1;
      };
      return searchParam;
    });

    // Если совпадений нет - записать контакт
    if (searchParam === 0) {
      this.setState(({ contacts }) => ({
        contacts: [data, ...contacts],
      }));
    } else {
      alert(`${data.name} is already in contacts.`);
    }
  };

  // === Обновление filter в state
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  // === Фильтрация контактов
  getVisibleContacts = () => {
	  const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
	  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),);
  }

  // === Удаление контакта
  deleteContact = contactId => {
	  this.setState(prevState => ({
		  contacts: prevState.contacts.filter(contact => contact.id !== contactId),
	  }));
  };

  render() {
    return (
      <div>

        <GlobalStyle />

        <Section title="Phonebook">
          <Form
            onSubmit={this.handleSubmitData} />
        </Section>

        <Section title="Contacts">
          <Filter
            value={this.state.filter}
            onChange={this.changeFilter} />
          <ContactsList>
            <ContactsInfo
              contacts={this.getVisibleContacts()}
              onDeleteContact={this.deleteContact}
            />
          </ContactsList>
        </Section>

    </div>
    )
  }

};

export default App;
