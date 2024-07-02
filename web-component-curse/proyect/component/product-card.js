class productCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        console.log('hell is empty');
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML =
            `
 <main >
 <section>
    <img/>
 </section>
 <div>
    <h2>
    Hell is empty
    </h2>
    <p>
    </p>
    <h3>
    </h3>
    <button>HEAVEN</button>
    </button>
 </div> 
 
 
 </main>
 
 `;
        return template;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }

}

customElements.define('product-card', productCard);