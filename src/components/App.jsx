import React, { Component } from 'react';
import { GlobalStyle } from "./GlobalStyle";
import shortid from 'shortid';
import Section from './Section';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [  ],
    name: '',
    number: '',
    filter: '',
  };

  // === Обновление state (объект name) при вводе в <input>
  handleChange = event => {
	  const { name, value } = event.currentTarget;
    this.setState({
      [name]: value, 
    });
    console.log(this.state.name);
  };

  // === Добавление нового контакта
	handleSubmit = event => {
    event.preventDefault();
    // Формирование нового контакта из name
    const addName = {
		  id: shortid.generate(), // Генерация уникального ID
      name: this.state.name,
      number: this.state.number,
    };
    // Операция добавления нового контакта в state
	  this.setState(({ contacts }) => ({
		  contacts: [addName, ...contacts],
	  }));
		// Очистка формы
    this.reset();
	};

	// === Очистка формы после отправки данных
  reset = () => {
    this.setState({ name: '', number: '', });
  };

  // === Обновление filter в state
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
    console.log(this.state.filter);
  };

  // === Фильтрация контактов
  getVisibleContacts = () => {
	  const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase(); // Приведение текста к нижнему регистру
    console.log(filter);
	  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),);
  }

  render() {
    return (
      <div>

        <GlobalStyle />

        <Section title="Phonebook">
          <Form
            valueName={this.state.name}
            valueNumber={this.state.number}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit} />
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
