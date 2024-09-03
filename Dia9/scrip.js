function total(){
    
    document.getElementById("BotonInput").addEventListener("input", (e)=>{
        let guarId=document.getElementById("BotonInput").value;
    
        let App = "https://pokeapi.co/api/v2/pokemon/"

        fetch(App+guarId)
        .then(pro => pro.json())
        .then(Pokeapi=>{

        let Nomb = document.getElementById("nombre");
        Nomb.innerHTML = `${Pokeapi.idt} - <span>${Pokeapi.forms[0].name}</span>`;

        let imgPoke = document.getElementById("imgPoke");
        imgPoke.innerHTML = `
        <audio autoplay src="${Pokeapi.cries.latest}">
        </audio>
        <img src="${Pokeapi.sprites.other.showdown.front_default}">`

        let Id = 0

        document.getElementById("prev").addEventListener("click", (e) => {
            Id = Pokeapi.idt - 1
            guarId = String(Id)
        })
        document.getElementById("next").addEventListener("click",(e)=>{
            Id = Pokeapi.idt + 1
            guarId = String(Id)
        })
        total()
})
})
}
total()