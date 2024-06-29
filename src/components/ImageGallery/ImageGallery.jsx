import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";
export default function ImageGallery({ images, onImageClick }) {
  const handleImageClick = (image) => {
    onImageClick(image.urls.regular);
  };
  return (
    <ul className={css.imgGallery}>
      {images.map((image) => (
        <li key={image.id} >
          <ImageCard image={image} onClick={handleImageClick} />
        </li>
      ))}
    </ul>
  );
}
