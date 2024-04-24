import React, { Component } from 'react';
import { GlobalStyle } from "./GlobalStyle";
import shortid from 'shortid';
import Section from './Section';
import Form from './Form';
import ContactsList from './ContactsList';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Mylene Farmer' },
      // { id: 'id-2', name: 'Sandra'},
    ],
    name: '',
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
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>

        <GlobalStyle />

        <Section title="Phonebook">
          <Form
            value={this.state.name}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit} />
        </Section>

        <Section title="Contacts">
          <ContactsList
            contacts={this.state.contacts} />
        </Section>

    </div>
    )
  }

};

export default App;
