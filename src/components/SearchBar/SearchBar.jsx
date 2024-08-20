// import React, { useState } from 'react';
// import axios from 'axios';
// import css from "./SearchBar.module.css"

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [images, setImages] = useState([]);

//   const handleSearch = async () => {
//     const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=CfF87_GktDHKGZeUATCI9G7_4LMIAJu0I3IwAahnDfk`);
//     setImages(response.data.results);
//   };

//   return (
//       <div>
//         <div className={css.boxInput}>
//             <input type="text"  onChange={(e) => setSearchTerm(e.target.value)} />
//             <button onClick={handleSearch}>Search</button>     
//         </div>



//     </div>
//   );
// };

// export default SearchBar;


import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.query.value.trim();
    if (!query) {
      const notify = () =>
        toast("Enter search query!", {
          duration: 3000,
          position: "top-center",
          style: { marginTop: 100 },
          icon: "👀",
        });
      notify();

      return;
    }
    onSubmit(query);
    form.reset();
  };
  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.boxInput}>
            <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          />      
         <button className={css.btn} type="submit">
          Search
        </button>         
        </div>


      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;