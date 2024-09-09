document.addEventListener('DOMContentLoaded',()=>{
    const datosContenedor=document.querySelector('.opciones')
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton')
    console.log(datosContenedor);

    async function fetchData() {
        const res =await fetch('https://66df337dde4426916ee3df1e.mockapi.io/MiPrimeraApi')
        data = await res.json();
        return data;
    }
    function displayCapsula(capsula) {
        datosContenedor.innerHTML='';
        capsula.forEach(cap => {
            const capDiv=document.createElement('div');
            if (cap.status === "ready") {
                capDiv.classList.add('capsulanegativa');
                capDiv.innerHTML=`
                <div class="capsulanegativa">
                    <div class="infotextNegativo">
                        <p>${cap.task}</p>
                    </div>
                    <div class="botonesNegativos">

                        <div class="terminadoNegativi"> 
                             <img src="storage/img/pngwing.com (2).png" data-id=${cap.id} class="completado">
                        </div>

                        <div class="eliminadonegativo">
                            <img src="storage/img/pngwing.com (4).png"  data-id=${cap.id} class="eliminado">
                        </div>

                    </div>
                </div>
                `
            }
            if (cap.status === 'On hold'){
                capDiv.classList.add('capsula');
                capDiv.innerHTML=`
                <div class="capsula">
                    <div class="infotext">
                        <p>${cap.task}</p>
                    </div>
                    <div class="botones">

                        <div class="terminado"> 
                            <img src="storage/img/pngwing.com (2).png" alt="" data-id=${cap.id} class="completado">
                        </div>

                        <div class="eliminado">
                            <img src="storage/img/pngwing.com (4).png" alt="" data-id=${cap.id} class="eliminado">
                        </div>

                    </div>
                </div>
                `
            }
            datosContenedor.appendChild(capDiv)
        });
        document.querySelectorAll('.completado').forEach(button=>{
            button.addEventListener('click',botoncompletado);
        });
        document.querySelectorAll('.eliminado').forEach(button=>{
            button.addEventListener('click',botondelete);
        });
    }
    async function addNewTask(){
        const task = taskInput.value;
        if(task.trim()===''){
            return;
        }
        await fetch('https://66df337dde4426916ee3df1e.mockapi.io/MiPrimeraApi',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({task,status:'On hold'})
        });
        taskInput.value='';
        const data = await fetchData();
        displayCapsula(data);
    }
    addTaskButton.addEventListener('click',addNewTask);


    async function botoncompletado(event){
        const id=event.target.getAttribute('data-id');
        await fetch(`https://66df337dde4426916ee3df1e.mockapi.io/MiPrimeraApi/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({status:'ready'})
            });
            const data = await fetchData();
            displayCapsula(data)
    }

    async function botondelete(event){
        const id=event.target.getAttribute('data-id');
        await fetch(`https://66df337dde4426916ee3df1e.mockapi.io/MiPrimeraApi/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({status:'ready'})
            });
            const data = await fetchData();
            displayCapsula(data)
    }

    fetchData().then(data =>{
        console.log(data);
        displayCapsula(data);
    })
})