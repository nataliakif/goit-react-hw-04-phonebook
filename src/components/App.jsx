import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Section from './Section/Section';
import InputForm from './InputForm/InputForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

function App() {
  const [contacts, setContacts] = useLocalStorage(
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    []
  );

  const [filter, setFilter] = useState('');

  const addContact = ({ id, name, number }) => {
    console.log(contacts);
    setContacts(contacts => {
      const contact = { id, name, number };
      return [contact, ...contacts];
    });
  };
  const deleteContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const filteredContacts = () => {
    const lowerCase = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(lowerCase);
    });
  };

  return (
    <>
      <Section title="PhoneBook">
        <InputForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChange={changeFilter} />
        <Contacts
          contacts={filteredContacts()}
          onDeleteContact={deleteContact}
        />
      </Section>
    </>
  );
}

export default App;
