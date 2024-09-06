document.addEventListener(`DDMcontentloaded`,()=>{
    const datoscontenedor=document.querySelector(`.opciones`)
    const taskInput = document.getElementById(`taskInput`);
    const addTaskButton = document.getElementById(`addTaskButton`)

    async function fetchData() {
        const res =await fetch(`https://6674179975872d0e0a950e53.mockapi.io/todoList`)
        data=await res .json();
        return data;
    }
    function displayCapsula(capsula){
        datoscontenedor.innerHTML=``;
        capsula.forEach(cap => {
            const capDiv=document.createElement(`div`)
            if (cap.status === "ready"){
                capDiv.classList.add(`capsulanegativa`);
                capDiv.innerHTML=`
                <div class="capsulanegativa">
            <div class="infotextNegativo">
                <p>${cap.task}</p>
            </div>
            <div class="botonesNegativos">

                <div class="terminadoNegativi"> 
                    <img src="storage/img/pngwing.com (2).png" alt=""data-id=${cap.task} class="completado">
                </div>

                <div class="eliminadonegativo">
                    <img src="storage/img/pngwing.com (4).png" alt="" data-id=${cap.task} class="eliminado">
                </div>

            </div>
        </div>
                `
            }
            if (cap.status === "Oh hold"){
                capDiv.classList.add(`capsulanegativa`);
                capDiv.innerHTML=`
                <div class="capsula"></div>
            <div class="infotex">
                <p>${cap.task}</p>
            </div>
            <div class="botones">

                <div class="terminado"> 
                    <img src="storage/img/pngwing.com (2).png" alt="" data-id=${cap.task} class="completado">
                </div>

                <div class="eliminado">
                    <img src="storage/img/pngwing.com (4).png" alt="" data-id=${cap.task} class="eliminado">
                </div>

            </div>
        </div>
                `
            }
            datoscontenedor.appendChild(capDiv)
        });
    }
    fetchData().then(data =>{
        displayCapsula(data);
    })
})