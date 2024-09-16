class estructura extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
         <div class="barraSuper">
            <div class="letasSup">
                <h1>Live User Filter</h1>
                <p>search by name and/or location</p>
            </div>
            <div class="contInput"><input class="Buscador" id="inptb" type="text" placeholder="Search"></div>
        </div>
        `
    }
}
customElements.define('estruc-tura',estructura)






const cajastr =document.getElementById('Usuarios')
document.addEventListener("keyup",a =>{
    if(a.target.matches("#inptb")){
        document.querySelectorAll(".caja1").forEach(nombre=>{
            nombre.textContent.includes(a.target.value)
            ?nombre.classList.remove("filtro")
            :nombre.classList.add("filtro")
        })
    }
})
function todosUsu(){
    fetch('https://66e45b96d2405277ed14094d.mockapi.io/data')
    .then(res => res.json())
    .then(datos => {
        console.log(datos)

        datos.forEach(estructura => {
            cajastr.innerHTML+=` 
                <div class="caja1">
                    <div class="imagen">
                        <img id="foto" src="${estructura.avatar}">
                    </div>
                    <div class="datos">
                        <h1>${estructura.name_full}</h1>
                        <h3>${estructura.description}</h3>
                    </div>
                </div>
            `
        });



    })
}
todosUsu()