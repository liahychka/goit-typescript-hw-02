function ImageCard({ description, small, regular, openModal }) {
    return (
        <div>
            <img src={small} alt={description}
            onClick={() => openModal(regular, description)}/>
        </div>
    )
}

export default ImageCard;