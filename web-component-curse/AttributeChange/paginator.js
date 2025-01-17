// Definición de una clase llamada wcPaginator que extiende de HTMLElement
class wcPaginator extends HTMLElement {
  constructor() {
    super();
    // Crea un Shadow DOM adjunto al elemento, con el modo 'open' para permitir el acceso desde fuera
    this.attachShadow({ mode: 'open' });
  }

  // Método estático que retorna una lista de atributos observados para cambios
  static get observedAttributes() {
    return ['title', 'class', 'describe'];
  }
  // Método que se llama cuando uno de los atributos observados cambiado
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
        <h1>
          ${this.title}
        </h1>
        <div>
        <h2>
          ${this.describe}
        </h2>
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
--primary-color:black;
--secondary-color:red;
--heading-primary:30px;
--heading-secondary:25px;
  margin:8px;
  display:inline-block;
  color:var(--secondary-color);
  width:100%;
  min-width:300px;
  max-width:400px;
  text-align:center;
  background-color:var(--primary-color);
  }
    :host(.blue){
  color:var(--secondary-color); 
    text-align:center;
      background:var(--primary-color);
      font-size:32px;
      }
      :host([red])
      {
   color:var(--secondary-color);  
        object-fit:cover;
        background-color:var(--primary-color);
        color:var(--secondary-color); 
apspect-ratio:1/2;
border-radius :100%;
}
:host-context(article.card){/*selecciona el host que este dentro de un article con la clase card*/
color:blue;

border:4px solid blue;
border-radius:8px;
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
// Define un nuevo elemento personalizado llamado 'wc-paginator' asociado a la clase wcPaginator
customElements.define('wc-paginator', wcPaginator);