const appi = "https://randomuser.me/api/"

const Names = document.getElementById("txt2");
const Welcome = document.getElementById("txt1")

const imag1 = document.getElementById("imag1");
const imag2 = document.getElementById("imag2");
const imag3 = document.getElementById("imag3");
const imag4 = document.getElementById("imag4");
const imag5 = document.getElementById("imag5");
const imag6 = document.getElementById("imag6");

function CallApi(){
    fetch(appi)
    .then(Res => Res.json())
    .then(Data=>{
        Imagen.src = Data.results[0].picture.large
        Names.textContent = Data.results[0].name.first+" "+Data.results[0].name.last
        function Vinks(){
            imag1.addEventListener("mouseenter",(e)=>{
                imag1.style = "background-position-y: 0em;"
                imag2.style = "background-position-y: 6em;"
                imag3.style = "background-position-y: 6em;"
                imag4.style = "background-position-y: 6em;"
                imag5.style = "background-position-y: 6em;"
                imag6.style = "background-position-y: 6em;"
                Welcome.textContent = "Hi, my name is"
                Names.textContent = Data.results[0].name.first+" "+Data.results[0].name.last
            })
            imag2.addEventListener("mouseenter",(e)=>{
                imag2.style = "background-position-y: 0em;"
                imag1.style = "background-position-y: 6em;"
                imag3.style = "background-position-y: 6em;"
                imag4.style = "background-position-y: 6em;"
                imag5.style = "background-position-y: 6em;"
                imag6.style = "background-position-y: 6em;"
                Welcome.textContent = "My email address is"
                Names.textContent = Data.results[0].email
            })
            imag3.addEventListener("mouseenter",(e)=>{
                imag3.style = "background-position-y: 0em;"
                imag1.style = "background-position-y: 6em;"
                imag2.style = "background-position-y: 6em;"
                imag4.style = "background-position-y: 6em;"
                imag5.style = "background-position-y: 6em;"
                imag6.style = "background-position-y: 6em;"
                Welcome.textContent = "My birthday is"
                Names.textContent = Data.results[0].dob.date    
            })
            imag4.addEventListener("mouseenter",(e)=>{
                imag4.style = "background-position-y: 0em;"
                imag1.style = "background-position-y: 6em;"
                imag2.style = "background-position-y: 6em;"
                imag3.style = "background-position-y: 6em;"
                imag5.style = "background-position-y: 6em;"
                imag6.style = "background-position-y: 6em;"
                Welcome.textContent = "My address is"
                Names.textContent = Data.results[0].location.street.number+" "+Data.results[0].location.street.name
            })
            imag5.addEventListener("mouseenter",(e)=>{
                imag5.style = "background-position-y: 0em;"
                imag1.style = "background-position-y: 6em;"
                imag2.style = "background-position-y: 6em;"
                imag3.style = "background-position-y: 6em;"
                imag4.style = "background-position-y: 6em;"
                imag6.style = "background-position-y: 6em;"
                Welcome.textContent = "My phone number is"
                Names.textContent = Data.results[0].phone
            })
            imag6.addEventListener("mouseenter",(e)=>{
                imag6.style = "background-position-y: 0em;"
                imag1.style = "background-position-y: 6em;"
                imag2.style = "background-position-y: 6em;"
                imag3.style = "background-position-y: 6em;"
                imag4.style = "background-position-y: 6em;"
                imag5.style = "background-position-y: 6em;"
                Welcome.textContent = "My password is"
                Names.textContent = Data.results[0].login.password
            })
        }
        Vinks()
    })
}
CallApi()
