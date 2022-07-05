import { Component } from "react";
import Section from "./Section/Section";
import InputForm from "./InputForm/InputForm";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  addContact = ({ id, name, number }) => {
    const contact = {
      id,
      name,
      number,
    };
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const lowerCase = filter.toLowerCase();
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(lowerCase);
    });
  };
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (parsedContacts) {
      this.setState({
        contacts: [...parsedContacts],
      });
    }
  }
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log("component update");
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  render() {
    return (
      <>
        <Section title="PhoneBook">
          <InputForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter filter={this.filter} onChange={this.changeFilter} />
          <Contacts
            contacts={this.filteredContacts()}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
export default App;
