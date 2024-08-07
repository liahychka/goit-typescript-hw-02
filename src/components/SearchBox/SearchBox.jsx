import React from 'react';
import { Field } from 'formik';


function SearchBox({ value, onFilter }) {
    return (
        <div>
            <label>
            <span>Find contacts by name</span>
            <input type="text" />
            </label>
        </div>
    );
}

export default SearchBox;