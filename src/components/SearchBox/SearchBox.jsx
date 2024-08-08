import React from 'react';
import { Field } from 'formik';
import css from "./SearchBox.module.css"


function SearchBox({ value, setFilter }) {
    return (
        <div>
            <label className={css.labelSearch}>
            <span>Find contacts by name</span>
            <input className={css.inputSearch} type="text" value={value} onChange={(e) => setFilter(e.target.value) } />
            </label>
        </div>
    );
}

export default SearchBox;