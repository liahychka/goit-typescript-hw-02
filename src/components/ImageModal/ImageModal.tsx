import Modal from "react-modal";
import css from "./ImageModal.module.css"
import React, { FC } from "react";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  imgUrl: string;
  imgAlt: string;
  closeModal: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, closeModal, imgUrl, imgAlt }) => {
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