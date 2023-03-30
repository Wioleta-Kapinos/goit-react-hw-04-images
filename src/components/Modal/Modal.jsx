import css from "./Modal.module.css";
import propTypes from 'prop-types';
import { useEffect } from "react";

export const Modal = ({image, closeModal}) => {
    
    useEffect(() => {
        const handleModalClose = event => {
            if(event.code === "Escape") {
                closeModal();
            }
            if(event.target.tagName !== "img") {
                closeModal();
            }
        }
        document.addEventListener("keydown", handleModalClose);
            return () => {
                document.removeEventListener("keydown", handleModalClose);
            };
    }, [closeModal]);

    return (
        <div onClick={closeModal} className={css.overlay}>
            <div className={css.modal}>
                <img 
                    src={image}
                    alt=""
                />
            </div>
        </div>
    );
}

Modal.propTypes = {
    image: propTypes.string,
}