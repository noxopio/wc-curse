class myCustomerElemten extends HTMLElement {


    constructor() {
        super()
        console.log('create customer element/ desde el cosntructor');

    }
    connecteCallback(){
        console.log('desder el dom')
    }
    disconnectedCallback(){
        console.log('adios desde el dom')
    }
}
customElements.define('element-custom', myCustomerElemten);
document.querySelector('element-custom').remove();