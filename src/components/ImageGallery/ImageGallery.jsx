import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

function ImageGallery({images, openModal}) {
    return (
    <ul>
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