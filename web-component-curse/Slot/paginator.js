
class wcPaginator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
<section>

<h2>
<slot
 name="title">
</slot>
</h2>
<div>
<h1>
<slot name= "parrafo"></slot>
</h1>
</div>
<h3>
<slot name ="pa"></slot>
</h3>
</section>

${this.getStyle()}
`;
    return template;

  }
  getStyle() {
    return `
<style>
h2{
color: red ;
font-size:16px; 
}
p{

backgroudn:black;
color:white;
}
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