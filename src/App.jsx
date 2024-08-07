import { useState } from "react";
import { nanoid } from "nanoid";
import contacts from "./components/contacts.json"
import ContactForm from "./components/ContactForm/ContactForm"
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox"



function App() {

   const [users, setUsers] = useState(contacts);

  const onAddProfile = (profile) => {
    const finalProfile = {
      ...profile,
      id: nanoid(),
    };

    setUsers([finalProfile, ...users]);
  };

  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm onAddProfile={onAddProfile} />
  <SearchBox />
  <ContactList />
</div>

  )
}

export default App;