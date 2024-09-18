class crearBarraS extends HTMLElement {
    constructor(){
        super();
        this.innerHTML=`
        <div class="barra-Super">
            <h1>Histórico de personas desmovilizadas</h1>
            <img class="imagen" id="imagen" src="../img/Logo Gobierno.png">
        </div>
        `
    }
}
customElements.define('barra-Super',crearBarraS)

var api='https://www.datos.gov.co/resource/uea5-is6n.json'
fetch(api)
.then(res => res.json())
.then(datos=>{
    console.log(datos);
    
})

