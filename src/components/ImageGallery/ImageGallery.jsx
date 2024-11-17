import PropTypes from 'prop-types';
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired,
      }).isRequired,
      alt_description: PropTypes.string,
    }).isRequired
  ).isRequired, // Validate that images is an array of specific objects
  onImageClick: PropTypes.func.isRequired, // Validate that onImageClick is a required function
};

export default ImageGallery;