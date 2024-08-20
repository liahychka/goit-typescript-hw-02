import Modal from "react-modal";
import css from "./ImageModal.module.css"

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, closeModal, imgUrl, imgAlt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <img className={css.imgModal} src={imgUrl} alt={imgAlt} />
    </Modal>
  );
};

export default ImageModal;