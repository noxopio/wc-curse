const template = document.createElement('div');
template.innerHTML = `
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


`;
class wcPaginator extends HTMLElement {
    constructor() {
        super();
        this.p = document.createElement('p');
        console.log('create wc');
    }
    connectedCallback() {
        this.p.textContent = 'Page 1';
        this.appendChild(this.p);
        this.appendChild(template);
    }

}
customElements.define('wc-paginator', wcPaginator);