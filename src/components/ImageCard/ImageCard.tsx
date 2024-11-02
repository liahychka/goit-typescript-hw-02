import css from "./ImageCard.module.css"
import React, { FC } from "react";

interface ImageCardProps {
    small: string;
    regular: string;
    description: string;
  openModal: (regular: string, description: string) => void;
}

const ImageCard: FC<ImageCardProps> = ({ description, small, regular, openModal }) => {
    return (
        <div>
            <img className={css.searchImg} src={small} alt={description}
            onClick={() => openModal(regular, description)}/>
        </div>
    )
}

export default ImageCard;