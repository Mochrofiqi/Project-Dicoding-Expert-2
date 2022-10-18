class IndicatorLoading extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div class="lds-roller">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      `;
    }
  }
  
customElements.define('indicator-loading', IndicatorLoading);  