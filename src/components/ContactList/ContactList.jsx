import Contact from "../Contact/Contact";
import React from 'react';

const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            phone={number}
            deleteContacts={deleteContacts}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;