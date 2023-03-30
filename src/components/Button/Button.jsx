import css from "./Button.module.css";
import propTypes from 'prop-types';

export const Button = ({handleButtonClick}) => {
    return (
        <button
        onClick={handleButtonClick}
        className={css.btnLoadMore}
        type="button"
        >
        Load more
        </button>
    )   
}

Button.propTypes = {
    handleButtonClick: propTypes.func,
}