import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMore from "./components/LoadMore/LoadMore";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import { renderPhoto } from "./api";
import toast, { Toaster } from "react-hot-toast";

interface Image {
  id: number;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface MyState {
  images: Image[];
  action: string;
  error: string | null;
  page: number;
  loading: boolean;
  isEmpty: boolean;
  nextPage: boolean;
  modal: {
    isOpen: boolean;
    imgUrl: string;
    imgAlt: string;
  };
}

interface TotalPagesResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

const App: React.FC = () => {
  const [state, setState] = useState<MyState>({
    images: [],
    action: "",
    error: null,
    page: 1,
    loading: false,
    isEmpty: false,
    nextPage: false,
    modal: { isOpen: false, imgUrl: "", imgAlt: "" },
  });

  const handleSubmit = (searchValue: string) => {
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
        const { results, total, total_pages }: TotalPagesResponse = await renderPhoto(state.action, state.page);

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
        setState((prevState) => ({ ...prevState, error: (error as Error).message }));
      } finally {
        setState((prevState) => ({ ...prevState, loading: false }));
      }
    };

    fetchImages();
  }, [state.action, state.page]);

  const handleLoadMoreClick = () => {
    setState((prevState) => ({ ...prevState, page: prevState.page + 1 }));
  };

  const openModal = (url: string, alt: string) => {
    setState((prevState) => ({
      ...prevState,
      modal: { isOpen: true, imgUrl: url, imgAlt: alt },
    }));
  };

  const closeModal = () => {
    setState((prevState) => ({
      ...prevState,
      modal: { isOpen: false, imgUrl: "", imgAlt: "" },
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
};

export default App;

