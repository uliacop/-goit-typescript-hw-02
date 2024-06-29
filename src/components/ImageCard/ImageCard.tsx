import React, { FC } from "react";
import { Image } from "../../types";
import css from "../ImageCard/ImageCard.module.css";
interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, onClick }) => {
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
};

export default ImageCard;
