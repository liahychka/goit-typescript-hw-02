import { useState } from "react";
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

  const onAddProfile = (profile) => {
    setContacts((changeProfile) => {
      return [...changeProfile, profile];
    });
  };

  const deleteContacts = (idContact) => {
    setContacts((changeProfile) => {
      return changeProfile.filter((contact) => contact.id !== idContact)
    });
  }

const visible = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));


  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm onAddProfile={onAddProfile} />
  <SearchBox value={filter} setFilter={setFilter} />
  <ContactList contacts={visible} deleteContacts={deleteContacts} />
</div>

  )
}

export default App;