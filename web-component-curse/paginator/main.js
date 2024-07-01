class wcPaginator extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      // Estado inicial del paginador
      this.currentPage = 1;
      this.totalPages = 1;
  
      // Eventos de navegación
      this.handleNext = this.handleNext.bind(this);
      this.handlePrev = this.handlePrev.bind(this);
    }
  
    static get observedAttributes() {
      return ['title', 'class', 'describe', 'current-page', 'total-pages'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'title') {
        this.title = newValue;
      }
      if (name === 'class') {
        this.class = newValue;
      }
      if (name === 'describe') {
        this.describe = newValue;
      }
      if (name === 'current-page') {
        this.currentPage = parseInt(newValue, 10);
      }
      if (name === 'total-pages') {
        this.totalPages = parseInt(newValue, 10);
      }
      this.render();
    }
  
    getTemplate() {
      const template = document.createElement('template');
      template.innerHTML = `
        <section>
          <h1>${this.title}</h1>
          <div>
            <h2>${this.describe}</h2>
          </div>
          <div class="paginator">
            <button id="prev" ${this.currentPage === 1 ? 'disabled' : ''}>Previous</button>
            <span>Page ${this.currentPage} of ${this.totalPages}</span>
            <button id="next" ${this.currentPage === this.totalPages ? 'disabled' : ''}>Next</button>
          </div>
        </section>
        ${this.getStyle()}
      `;
      return template;
    }
  
    getStyle() {
      return `
        <style>
          :host {
            margin: 8px;
            display: inline-block;
            color: red;
            width: 100%;
            min-width: 300px;
            max-width: 400px;
            // background-color: black;
          }
          .paginator {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          button {
            background-color: white;
            color: black;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
          }
          button:disabled {
            cursor: not-allowed;
            opacity: 0.5;
          }
        </style>
      `;
    }
  
    handleNext() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.setAttribute('current-page', this.currentPage);
        this.dispatchEvent(new CustomEvent('page-change', { detail: { currentPage: this.currentPage } }));
      }
    }
  
    handlePrev() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.setAttribute('current-page', this.currentPage);
        this.dispatchEvent(new CustomEvent('page-change', { detail: { currentPage: this.currentPage } }));
      }
    }
  
    render() {
      this.shadowRoot.innerHTML = '';
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  
      // Event listeners for buttons
      this.shadowRoot.getElementById('next').addEventListener('click', this.handleNext);
      this.shadowRoot.getElementById('prev').addEventListener('click', this.handlePrev);
    }
  
    connectedCallback() {
      this.render();
    }
  }
  
  customElements.define('wc-paginator', wcPaginator);
  