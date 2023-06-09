import "../component/movie-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const movieListElement = document.querySelector("movie-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      movieListElement.movies = result;
    } catch (message) {
      movieListElement.renderError(message);
    }
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
