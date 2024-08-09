import { useState, useEffect } from "react";
import contactsJson from "./components/contacts.json"
import ContactForm from "./components/ContactForm/ContactForm"
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox"
import Contact from "./components/Contact/Contact"


function App() {

    const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem("contacts");
    return localData ? JSON.parse(localData) : contactsJson;
  }); 

  const [filter, setFilter] = useState('');

  const addContact = (contact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, contact];
    });
  };

  const deleteContacts = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id)
    });
  }

const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);
  
  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm onSubmit={addContact} />
  <SearchBox value={filter} setFilter={setFilter} />
  <ContactList contacts={filteredContacts} deleteContacts={deleteContacts} />
</div>

  )
}

export default App;

