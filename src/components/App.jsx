import React, { Component } from 'react';
import { GlobalStyle } from "./GlobalStyle";
import Section from './Section';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  
  // === Добавление нового контакта
  handleSubmitData = data => {
    let searcheIndex = 0;

    // Проверка на уже имеющееся в контактах имя
    this.state.contacts.map(contact => {
      if (contact.name.toLowerCase() === data.name.toLowerCase()) {
        searcheIndex += 1;
      };
    });

    // Если совпадений нет - записать контакт
    if (searcheIndex === 0) {
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
    const normalizedFilter = filter.toLowerCase(); // Приведение текста к нижнему регистру
	  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),);
  }

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
          <ContactsList
            contacts={this.getVisibleContacts()}/>
        </Section>

    </div>
    )
  }

};

export default App;
