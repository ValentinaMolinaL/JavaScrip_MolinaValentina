fetch("Data.json")
.then(documento => documento.json())
.then(Datos => {
    var products=Datos[0].products
    var mostraP=document.getElementById("ContentMos")

    function viewProducts(){
        mostraP.innerHTML="";
        products.forEach(leeLis => {
            mostraP.innerHTML+=`
            <p>ID:${leeLis.id}</p>
            <p>Name:${leeLis.name}</p>
            <p>Category:${leeLis.category}</p>
            <p>Price:${leeLis.price}</p>
            <p>QuantityInStock:${leeLis.quantityInStock}</p>
            <p>supplierId:${leeLis.supplierId}</p>
            <button id=O${leeLis.id}>Eliminar</button>
            `
            document.getElementById(`O${leeLis.id}`).addEventListener("click",(e)=>{
                deleteProducts(leeLis.id)
            })
        });
    }
    function deleteProducts(id){
        products=products.filter(filtrar => filtrar.id !== id)
        viewProducts()
    }
    viewProducts()
    function addProducts(){
        document.getElementById("agregarProd").addEventListener("submit",function(evento){
            evento.preventDefault()
            let form1 = document.getElementById("inp1").value;
            let form2 = document.getElementById("inp2").value;
            let form3 = document.getElementById("inp3").value;
            let form4 = document.getElementById("inp4").value;
            let form5 = document.getElementById("inp5").value;
            let form6 = document.getElementById("inp6").value;

            products.push(
                {
                "id": form1,
                "name": form2,
                "category": form3,
                "price": form4,
                "quantityInStock": form5,
                "supplierId": form6
            })
            viewProducts()
        })
    }
    addProducts()

})
