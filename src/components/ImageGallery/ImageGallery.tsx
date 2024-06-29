import { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";
import { Image } from "../../types";
interface ImageGalleryProps {
  images: Image[];
  onImageClick: (url: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  const handleImageClick = (image: Image) => {
    onImageClick(image.urls.regular);
  };

  return (
    <ul className={css.imgGallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={handleImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
