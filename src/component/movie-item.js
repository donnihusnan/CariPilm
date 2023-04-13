class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .poster {
        display: flex;
        justify-content: center;
        margin: 10px auto 0 auto;
        width: 50%;
        max-height: 800px;
        object-fit: cover;
        object-position: center;
        border: 8px solid #E9A178;
        border-radius: 4px;
      }

      .movie-info > p {
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10; /* number of lines to show */
      }

      .container {
        position: relative;
      }

      .overlay {
        position: absolute;
        left: 0;
        top: 25%;
        background-color: #7A3E65;
        overflow: hidden;
        padding-left: 10px;
        width: 0;
        justify-content: center;
        height: auto;
        transition: .5s ease;
        color: #E9A178;
      }
      
      .container:hover .overlay {
        width: 30%;
      }
      @media screen and (max-width: 640px) {
        .overlay {
          font-size: 8px;
        }
      }
    </style>
        <div class="container">
        <img class="poster" src="https://image.tmdb.org/t/p/original/${this._movie.poster_path}" alt="Poster">
        <div class="movie-info overlay ">
            <h2>${this._movie.original_title}</h2>
            <p>${this._movie.overview}</p>
        </div>
        </div>
    `;
  }
}

customElements.define("movie-item", MovieItem);
