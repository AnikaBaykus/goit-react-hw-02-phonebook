import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Section from './Section';

import React, { Component } from 'react';
import Container from './Container';
import ContactForm from './ContactForm';
import ContactList from './ContactList/ContactList';
// import PropTypes from 'prop-types';

export class App extends Component {
  static defaultProps = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  state = {
    contacts: this.props.contacts,
  };

  submitFormHandler = ({ name, number }) => {
    const idContact = uuidv4();
    const contact = {
      name: name,
      number: number,
      id: idContact,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.submitFormHandler} />
        </Section>
        <Section title="Contacts">
          <ContactList contacts={this.state.contacts} />
        </Section>
      </Container>
    );
  }
}

export default App;
