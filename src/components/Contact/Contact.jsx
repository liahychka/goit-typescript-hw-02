import React from 'react';
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


function Contact({ name, tel, deleteContacts, id }) {
    return (
        <li>
        <div>
            <div>
                <FaUser size="24" />
                <p>{name}</p>
            </div>
            <div>
                <FaPhoneAlt size="24" />  
                <p>{tel}</p>    
            </div>
                <button type="button" onClick={() => deleteContacts(id)}>
                Delete
                </button>    
        </div>
        </li>
    )
}

export default Contact;