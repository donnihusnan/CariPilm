import "./movie-item.js";

const imgUrl =
  "https://imgs.search.brave.com/Pfg-oS-U8gJ_4sHq6jnhvonPBMTPwcczK60gVm5Sysw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9uZXVy/b2xpbmsuY29tcGFu/eS9jbXMvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTcvMDcvY2Fu/c3RvY2twaG90bzI0/MzkzNjU4LWh1bWFu/LWVycm9yLmpwZw";

class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>      
      img {
        width: 200px;
        display: flex;
        margin: 10px auto 0 auto;
        border-radius: 4px;
      }
    </style>      
    `;
    this.shadowDOM.innerHTML += `<img src="${imgUrl}">`;
  }

  // CEKCEKww
  render() {
    ``;
    this.shadowDOM.innerHTML = "";
    if (this._movies.length > 0) {
      const movieItemElement = document.createElement("movie-item");
      movieItemElement.movie = this._movies[0];
      this.shadowDOM.appendChild(movieItemElement);
    } else {
      this.renderError();
    }
  }
}

customElements.define("movie-list", MovieList);
