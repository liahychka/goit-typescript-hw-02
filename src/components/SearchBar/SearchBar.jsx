// const SearchBarValidationSchema = Yup.object().shape({
//   searchTerm: Yup.string()
//     .required("Пошукове слово є обов'язковим")
//     .min(2, "Пошукове слово має бути мінімум в 2 символи")
//     .max(100, "Пошукове слово має бути меншим за 100 символів"),
// });

// const INITIAL_VALUES = {
//   searchTerm: "",
// };

//       validationSchema={SearchBarValidationSchema}


import React, { useState } from 'react';
import axios from 'axios';
import * as Yup from "yup";
import css from "./SearchBar.module.css"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=CfF87_GktDHKGZeUATCI9G7_4LMIAJu0I3IwAahnDfk`);
    setImages(response.data.results);
  };

  return (
      <div>
        <div className={css.boxInput}>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={handleSearch}>Search</button>     
        </div>

          <div className={css.boxItem}>
                {images.map((image) => (
          <img className={css.searchImg} key={image.id} src={image.urls.regular} alt={image.alt_description} />
      ))}         
        </div>


    </div>
  );
};

export default SearchBar;