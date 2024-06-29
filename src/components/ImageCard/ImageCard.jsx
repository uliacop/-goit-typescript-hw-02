import css from "../ImageCard/ImageCard.module.css";
export default function ImageCard({ image, onClick }) {
  return (
    <div className={css.imgItem}>
      <img
        className={css.imgStyle}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onClick(image)}
      />
    </div>
  );
}
