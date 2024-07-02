class productCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        console.log('componente creado ');
    }
    static get observedAttributes() {
        return ["img", "title","price","description", "colllection"];
    }
    attributeChangeCallback(attr, oldVal, newVal) {
  
        if (attr === "img") {
            this.img = newVal;
        }
        if (attr === "title"  ) {
            this.title = newVal;
        }
        if (attr === "price") {
            this.price = newVal;
        }
        if (attr === "description") {
            this.description = newVal;
        }
        if (attr === "collection") {
            this.collection = newVal;
        }
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML =
            `
 <main class="container" >
 <section  class="imgBox">
    <img
     src="${this.img}" />
 </section>
 <section class='details'>
 <div class="content">
 <h2>
 ${this.title} <span>collection:${this.collection}</span>
 </h2>
 <p> 
 Una araña robot es un dispositivo robótico diseñado para imitar los movimientos y características de una araña real. Generalmente, estas arañas robóticas tienen múltiples patas articuladas que les permiten caminar, trepar y maniobrar en diversas superficies de manera ágil y precisa. Equipadas con sensores avanzados, pueden detectar obstáculos y navegar de forma autónoma. Las aplicaciones de las arañas robóticas van desde la exploración y el rescate en áreas peligrosas hasta la investigación científica y la enseñanza de la robótica y la biología. Su diseño biomimético no solo destaca por su capacidad para realizar tareas complejas en entornos difíciles, sino también por su potencial para inspirar innovaciones en el campo de la robótica y la ingeniería.

 </p> 
    <h3>${this.price}</h3>
 <button>ADD</button>
 </button>
 </div> 
 
 </section>
 
 </main>
   ${this.getStyles()}
 
 `;
        return template;
    }
    getStyles() {
        return `
          <style>
          :host {
            --primary-background: #5a6cb2;
             --shadow-color: blueviolet;
         --shadow-offset: 8px;
              width: 80%;
              max-width: 900px;
              min-width: 280px;
              margin: 0 auto;
          }
          .container {
              position: relative;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              width: 900px;
              height: 600px;
              margin: 20px;
              background-color: #fff;
          }
          .container .imgBox {
              position: relative;
              display: flex;
              justify-content: center;
              width: 50%;
              height: 100%;
              background-color: var(--primary-background)
          }
          .container .imgBox:before {
              position: absolute;
              top: 20px;
              left: 20px;
              font-size: 8em;
              font-weight: 800;
              color: #000;
     text-shadow: 
        var(--shadow-offset) 0 var(--shadow-color),
        calc(-1 * var(--shadow-offset)) 0 var(--shadow-color),
        0 var(--shadow-offset) var(--shadow-color),
        0 calc(-1 * var(--shadow-offset)) var(--shadow-color),
        calc(0.5 * var(--shadow-offset)) calc(0.5 * var(--shadow-offset)) var(--shadow-color),
        calc(-0.5 * var(--shadow-offset)) calc(-0.5 * var(--shadow-offset)) var(--shadow-color),
        calc(0.5 * var(--shadow-offset)) calc(-0.5 * var(--shadow-offset)) var(--shadow-color),
        calc(-0.5 * var(--shadow-offset)) calc(0.5 * var(--shadow-offset)) var(--shadow-color);
              content: 'Spider';
              opacity: 0.1;
          }
          .container .imgBox img {
              position: relative;
              top: 100px;
              left: -50px;
              width: 720px;
              height: 480px;
              transform: rotate(-30deg);
          }
          .container .details {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 50%;
              height: 100%;
              box-sizing: border-box;
              padding: 40px;
    
          }
          .container .details h2 {
              margin-bottom: 25px;
              font-size: 2.5em;
              line-height: 0.8em;
              color: #444;
          }
          .container .details h2 span {
              font-size: 0.4em;
              text-transform: uppercase;
              letter-spacing: 2px;
              color: #999;
          }
          .container .details p {
              max-width: 85%;
              margin-left: 15%;
              margin-bottom: 35px;
              color: #333;
              font-size: 15px;
          }
          .container .details h3 {
              float: left;
              font-size: 2.5em;
              color: #a2a2a2;
          }
          .container .details button {
              margin-top: 35px;
              float: right;
              padding: 15px 20px;
              font-size: 16px;
              color: #fff;
              letter-spacing: 1px;
              font-weight: 600;
              text-transform: uppercase;
              border-radius: 40px;
              background-color: #5a6cb2;
              cursor: pointer;
          }
          @media (max-width: 1080px) {
              .container {
                  height: auto;
                  width: auto;
              }
              .container .imgBox {
                  padding: 40px;
                  width: 100%;
                  box-sizing: border-box;
                  height: auto;
                  text-align: center;
              }
              .container .imgBox img {
                  left: initial;
                  width: 100%;
                  height: auto;
                  transform: rotate(0deg);
              }
    
              .container .details {
                  width: 100%;
                  height: auto;
                  padding: 20px;
              }
    
              .container .details p {
                  max-width: 100%;
                  margin-left: 0;
              }
                  .container .imgBox:before {
                    font-size:6rem;
                  }
          }
          </style>
        `;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }

}

customElements.define('product-card', productCard);