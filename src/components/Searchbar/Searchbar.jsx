import { useState } from "react";
import css from "./Searchbar.module.css";

export const Searchbar = ({onSubmit}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value !== "") {
            onSubmit(value);
        } else {
            alert("Empty field, please complete them.");
            return;
        }
    }

    const handleChange = (event) => {
        setValue(event.target.value);  
    }  

    return (
        <header className={css.searchbar}>
            <h1>Image Finder</h1>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    value={value}
                    onChange={handleChange}
                    className={css.inputForm}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images..."
                />
                <button type="submit" className={css.buttonForm}>
                    <span className={css.labelSearch}>&#128269;</span>
                </button>
            </form>
        </header>
    )
}