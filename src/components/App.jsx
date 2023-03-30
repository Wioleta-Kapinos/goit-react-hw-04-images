import { useState } from "react";
import axios from "axios";
import { Loader } from "./Loader/Loader";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";
import { Button } from "./Button/Button";
import "index.css";

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [error, setError] = useState(false);
  const API = "32928385-c573e9cc533413973b7398451";

  const searchImages = async (query)=> {
    setIsLoading(true);
    try {
      const URL = `https://pixabay.com/api/?key=${API}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`;
      const response = await axios.get(URL);
        if (response.data.hits.length > 0) {
          setImages([...images, ...response.data.hits]);
          setPage(page + 1);
          setQuery(query);
          setIsLoading(false);
        } else {
          alert("Sorry, there are no images matching your search query.");
          setIsLoading(false);
        }
    } catch {
      setError(true);
      setIsLoading(false);
    }  
  }

  const openModal = url => {
    setModal(true);
    setLargeImageURL(url);
  }

  const closeModal = () => {
    setModal(false);
    setLargeImageURL("");
  }
  const handleButtonClick = event => {
    event.preventDefault();
    searchImages(query);
  }

    return (
      <div className="App">
        <Searchbar onSubmit={searchImages} />
        {error && <p>Something went wrong, please try later.</p>}
        {isLoading && <Loader />}
        <ImageGallery images={images} openModal={openModal}/> 
        {images.length > 0 && <Button handleButtonClick={handleButtonClick} />}
        {modal && 
        <Modal image={largeImageURL} closeModal={closeModal}  />
        } 
      </div>
    );
}