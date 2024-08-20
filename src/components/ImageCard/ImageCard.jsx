import css from "./ImageCard.module.css"

function ImageCard({ description, small, regular, openModal }) {
    return (
        <div>
            <img className={css.searchImg} src={small} alt={description}
            onClick={() => openModal(regular, description)}/>
        </div>
    )
}

export default ImageCard;