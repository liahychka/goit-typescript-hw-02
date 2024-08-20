// import { useState, useEffect } from "react";
// import axios from "axios";
// import SearchBar from "./components/SearchBar/SearchBar";
// import LoadMore from "./components/LoadMore/LoadMore";
// import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
// import ImageGallery from "./components/ImageGallery/ImageGallery";
// import ImageModal from "./components/ImageModal/ImageModal";
// import Loader from "./components/Loader/Loader";

// function App() {

//   const [images, setImages] = useState([]);
//   const [totalPages, setTotalPages] = useState(0);
//   const [isLoader, setIsLoader] = useState(false);
//   const [err, setErr] = useState(null);
//   const [page, setPage] = useState(1);
//   const [query, setQuery] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [isEmpty, setIsEmpty] = useState(false);
//   const [nextPage, setNextPage] = useState(false);
//   const [modal, setModal] = useState({ isOpen: false, imgUrl: "", imgAlt: "" });

//   const handleSubmit = (searchValue) => {
//     setQuery(searchValue);
//     setImages([]);
//     setPage(1);
//     setNextPage(false);
//     setIsEmpty(false);
//     setErr(null);
//   };
  
//   useEffect(() => {
//     const fetchImages = async () => {
//       setIsLoader(true);
//       try {
//         const response = await axios.get('https://api.unsplash.com/photos/', {
//           params: {
//             client_id: 'CfF87_GktDHKGZeUATCI9G7_4LMIAJu0I3IwAahnDfk',
//             per_page: 12 
//           }
//         });
        
//         setImages(response.data);
//         setTotalPages(response.headers['x-total-pages']);
//         throw new Error("Please, try again.");
//       } catch (error) {
//         setErr(error.message);
//       } finally {
//         setIsLoader(false);
//       }
//     };

//     fetchImages();
//   }, []);

//     const handleLoadMoreClick = () => {
//     setPage((prevPage) => prevPage + 1);
//     };
  
//     const openModal = (url, alt) => {
//     setModal({ ...modal, isOpen: true, imgUrl: url, imgAlt: alt });
//   };

//   const closeModal = () => {
//     setModal({ ...modal, isOpen: false, imgUrl: "", imgAlt: "" && "noAlt" });
//   };

//   return <div>
//     <SearchBar  onSubmit={handleSubmit}/>
//     {images.length > 0 && (
//         <ImageGallery images={images} openModal={openModal} />
//       )}
//     {nextPage && <LoadMore handleLoadMoreClick={handleLoadMoreClick} />}
//     { isLoader && <Loader />}
  
//           {images.map(image => (
//         <div key={image.id}>
//           <img src={image.urls.small} alt={image.alt_description} />
//         </div>
//           ))}
//           {err && <ErrorMessage message={err} />}
//       {loading && <Loader />}
//       <ImageModal
//         isOpen={modal.isOpen}
//         imgUrl={modal.imgUrl}
//         imgAlt={modal.imgAlt}
//         closeModal={closeModal}
//       />
//   </div>

// }

// export default App; 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import LoadMore from './components/LoadMore/LoadMore';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';

const API_KEY = 'CfF87_GktDHKGZeUATCI9G7_4LMIAJu0I3IwAahnDfk';
const PER_PAGE = 12;

function App() {
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [nextPage, setNextPage] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, imgUrl: '', imgAlt: '' });

  const handleSubmit = (searchValue) => {
    setQuery(searchValue);
    setImages([]);
    setPage(1);
    setNextPage(false);
    setIsEmpty(false);
    setError(null);
  };

  useEffect(() => {
    const fetchImages = async () => {

      setIsLoading(true);
      try {
        const response = await axios.get('https://api.unsplash.com', {
          params: {
            API_KEY,
            PER_PAGE,
            page,
            query,
          },
        });

        setImages((prevImages) => [...prevImages, ...response.data]);
        setTotalPages(response.headers['x-total-pages']);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      fetchImages();
    }
  }, [page, query]);

  const handleLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (url, alt) => {
    setModal({ ...modal, isOpen: true, imgUrl: url, imgAlt: alt });
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false, imgUrl: '', imgAlt: '' });
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {nextPage && <LoadMore handleLoadMoreClick={handleLoadMoreClick} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ImageModal
        isOpen={modal.isOpen}
        imgUrl={modal.imgUrl}
        imgAlt={modal.imgAlt}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;