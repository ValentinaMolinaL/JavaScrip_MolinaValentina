//creacion de un elemento personalizable 
class crearBoton extends HTMLElement {
    constructor(){
        super();
        this.textContent='Haz clik aqui'
        this.addEventListener('click',alert("Hiciste click"));
    }
}
customElements.define('mi-boton',crearBoton)

//=====================================================
class crearBotonShadow extends HTMLMapElement{
    constructor(){
        super();
        let miShadow = this.attachShadow({mode:'open'});
        miShadow.innerHTML=`
        <button>Soy un boton lindo!</button>
        `
    }
}
customElements.define('boton-shadow',crearBotonShadow)
