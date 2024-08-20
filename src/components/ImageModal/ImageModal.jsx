import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, closeModal, imgUrl, imgAlt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(19, 19, 19, 0.5)",
        },
        content: {
          padding: "0",
          height: "max-content",
          overflow: "hidden",
        },
      }}
    >
      <img src={imgUrl} alt={imgAlt} />
    </Modal>
  );
};

export default ImageModal;