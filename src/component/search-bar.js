class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM
      .querySelector("#searchElement")
      .value.replaceAll(" ", "+");
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .search-container {
        max-width: 600px;
        width: 100%;
        margin: 0 auto 1.5em auto;
        padding: 16px;
        display: flex;
      }
      
      .search-container > input {
        width: 75%;
        padding: 16px;
        border: 0;
        font-weight: bold;
        border: 2px solid #E9A178;
        border-radius: 5px;
        color: #E9A178;
      }
      
      .search-container > input:focus {
        outline: 0;
      }
      
      .search-container > input:focus::placeholder {
        font-weight: bold;
      }
      
      .search-container > input::placeholder {
        color: #E9A178;
        font-weight: normal;
      }
      
      .search-container > button {
        width: 23%;
        cursor: pointer;
        margin-left: auto;
        padding: 16px;
        background-color: #A84448;
        color: #F6E1C3;
        border: 0;
        border-radius: 5px;
        text-transform: uppercase;
      }
      
      @media screen and (max-width: 640px) {
        .search-container {
          flex-direction: column;
          position: static;
          padding: 0;
        }
      
        .search-container > input {
          width: 50%;
          margin: 0 auto 12px auto;

        }
      
        .search-container > button {
          width: 50%;
          margin: 0 auto 0 auto;
        }
      }
      </style>
      <div id="search-container" class="search-container">
            <input placeholder="Mau Nonton Apa?" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Cari Pilm</button>
      </div>
    `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
