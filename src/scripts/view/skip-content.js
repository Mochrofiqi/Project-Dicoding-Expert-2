class SkipContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }
      
  render() {
    this.innerHTML = `
      <a href="../#content" class="skip">To Content</a>
  `;
  }
}      

customElements.define("skip-content", SkipContent);
