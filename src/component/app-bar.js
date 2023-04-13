class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `  
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    h2 {
      padding: 16px;
      width: 100%;
      font-size: 1.5rem;
      color: #F6E1C3;
      text-align: center;
      background-color: #E9A178;
      font-weight: 800;
      margin-bottom: 1.5em;
    }

    @media screen and (max-width: 640px) {
      h2 {
        width: 1000px;
        text-align: start;
      }
    }
  </style>
  <h2>Cari Pilm</h2>
    `;
  }
}

customElements.define("app-bar", AppBar);
