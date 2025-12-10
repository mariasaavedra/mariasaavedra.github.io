class Page extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<div>Custom element content</div>";
  }
  connectedCallback() {
    console.log("Custom element added to page.");

    this.innerHTML = "<div>Custom element content</div>";
  }
  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }
}

customElements.define("page", Page);
