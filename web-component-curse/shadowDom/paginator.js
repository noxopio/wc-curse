
class wcPaginator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
<div class="pagination">
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
</div>
${this.getStyle()}
`;
    return template;

  }
  getStyle() {
    return `
<style>
.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}
</style>
`;
  }
  render() {
    // this.appendChild(this.getTemplate().content.cloneNode(true));
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));//una vez que se agrega el shadowDom se debe agregar el shadowRoot
  }
  connectedCallback() {
    this.render();
  }

}
customElements.define('wc-paginator', wcPaginator);