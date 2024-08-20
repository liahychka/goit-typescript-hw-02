import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMore from "./components/LoadMore/LoadMore";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import { renderPhoto } from "./api";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [state, setState] = useState({
    images: [],
    action: "",
    error: null,
    page: 1,
    loading: false,
    isEmpty: false,
    nextPage: false,
    modal: { isOpen: false, imgUrl: "", imgAlt: "" },
  });

  const handleSubmit = (searchValue) => {
    setState((prevState) => ({
      ...prevState,
      action: searchValue,
      images: [],
      page: 1,
      nextPage: false,
      isEmpty: false,
      error: null,
    }));
  };

  useEffect(() => {
    if (!state.action) return;

    const fetchImages = async () => {
      setState((prevState) => ({ ...prevState, loading: true, error: null }));

      try {
        const { results, total, total_pages } = await renderPhoto(state.action, state.page);

        if (!total) {
          setState((prevState) => ({ ...prevState, isEmpty: true }));
          toast("Train again!", {
            duration: 3000,
            position: "top-center",
            style: { marginTop: 100 },
          });
        }

        setState((prevState) => ({
          ...prevState,
          images: [...prevState.images, ...results],
          nextPage: state.page < total_pages,
        }));
      } catch (error) {
        setState((prevState) => ({ ...prevState, error: error.message }));
      } finally {
        setState((prevState) => ({ ...prevState, loading: false }));
      }
    };

    fetchImages();
  }, [state.action, state.page]);

  const handleLoadMoreClick = () => {
    setState((prevState) => ({ ...prevState, page: prevState.page + 1 }));
  };

  const openModal = (url, alt) => {
    setState((prevState) => ({
      ...prevState,
      modal: { ...prevState.modal, isOpen: true, imgUrl: url, imgAlt: alt },
    }));
  };

  const closeModal = () => {
    setState((prevState) => ({
      ...prevState,
      modal: { ...prevState.modal, isOpen: false, imgUrl: "", imgAlt: "" },
    }));
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />

      {state.images.length > 0 && (
        <ImageGallery images={state.images} openModal={openModal} />
      )}
      {state.nextPage && <LoadMore handleLoadMoreClick={handleLoadMoreClick} />}
      {state.error && <ErrorMessage message={state.error} />}
      {state.loading && <Loader />}
      {state.isEmpty && <Toaster />}
      <ImageModal
        isOpen={state.modal.isOpen}
        imgUrl={state.modal.imgUrl}
        imgAlt={state.modal.imgAlt}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;


