import Contact from "../Contact/Contact";
import React from 'react';
import css from "./ContactList.module.css"

const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContacts={deleteContacts}
          />
        );
      })}
      </ul>
  );
};

export default ContactList;