
class wcPaginator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

  }

  static get observedAttributes() {
    return [' title', ' class', 'describe'];
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
</section>

${this.getStyle()}
`;
    return template;

  }
  getStyle() {
    return `
<style>
:host
{
  margin:8px;
display:inline-block;
color:red;
width:100%;
min-width:300px;
max-width:400px;

background-color:black;
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