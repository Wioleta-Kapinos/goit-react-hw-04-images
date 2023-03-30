import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";
import propTypes from 'prop-types';

export const ImageGallery = ({ images, openModal}) => {
    return (
        <ul className={css.gallery}>
            {images.map(({ id, webformatURL, largeImageURL}) => {
                return (
                    <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    openModal={openModal}
                    />
                );
            })}
        </ul>
    );
}

ImageGallery.propTypes = {
    images: propTypes.array,
    openModal: propTypes.func,
}