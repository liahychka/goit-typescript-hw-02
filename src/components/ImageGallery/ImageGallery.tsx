import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"
import React, { FC } from "react";

export interface ImageGalleryProps {
  images: {id: number, description: string, urls: {small: string, regular: string}}[];
  openModal: () => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, openModal }) => {
    return (
    <ul className={css.imgList}>
      {images.map(({ id, description, urls: { small, regular } }) => {
        return (
          <li key={id} className={css.itemGallery}>
            <ImageCard
              small={small}
              regular={regular}
              description={description}
              openModal={openModal}
            />
          </li>
        );
      })}
      </ul>
    )
}

export default ImageGallery;