
class wcPaginator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.title=this.getAttribute('title');
    this.img=this.getAttribute('img');
    this.describe=this.getAttribute('describe');

  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
<section>

<h1>${this.title}</h1>
<div>
<h2>${this.describe}     </h2>
<img  src="" alt="">
</div>
<div>
<h3></h3>
</div>
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