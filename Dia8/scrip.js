
fetch("https://swapi.py4e.com/api/people/1")
.then(resp => resp.json())
.then(Data =>{
    var estructura=`
    <table class="table">
  <thead>
    <tr> 
      <th scope="col">Name:</th>
      <th scope="col">${Data.name}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Height:</th>
      <td>${Data.height}</td>
    </tr>
    <tr>
      <th scope="row">Mass:</th>
      <td>${Data.mass}</td>
    </tr>
    <tr>
      <th scope="row">Hair_color:</th>
      <td>${Data.hair_color}</td>
    </tr>
    <tr>
      <th scope="row">skin_color:</th>
      <td colspan="2">${Data.skin_color}</td>
    </tr>
    <tr>
      <th scope="row">eye_color:</th>
      <td colspan="2">${Data.eye_color}</td>
    </tr>
    <tr>
      <th scope="row">birth_year:</th>
      <td colspan="2">${Data.birth_year}</td>
    </tr>
   <tr>
      <th scope="row">gender:</th>
      <td colspan="2">${Data.gender}</td>
    </tr>
   <tr>
      <th scope="row">homeworld:</th>
      <td colspan="2">      
      <div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-body" id="superMundo">
        </div>
      </div></td>
    </tr>
   <tr>
      <th scope="row">films:</th>
      <td colspan="2">
      <div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-body id="superPelis">
        </div>
      </div>
      </td>
    </tr>
  </tbody>
</table>`

var mundo =(Data.homeworld)
fetch(mundo)
.then(mun=> mun.json())
.then (mundoT =>{
  let GuardarMundo=document.getElementById("superMundo")
  GuardarMundo.innerHTML=`
     <table class="table">
      <thead>
        <tr> 
          <th scope="col">Name:</th>
          <th scope="col">${mundoT.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">rotation_period:</th>
          <td>${mundoT.rotation_period}</td>
        </tr>
        <tr>
          <th scope="row">orbital_period:</th>
          <td>${mundoT.orbital_period}</td>
        </tr>
        <tr>
          <th scope="row">diameter:</th>
          <td>${mundoT.diameter}</td>
        </tr>
        <tr>
          <th scope="row">climate:</th>
          <td colspan="2">${mundoT.climate}</td>
        </tr>
        <tr>
          <th scope="row">gravity:</th>
          <td colspan="2">${mundoT.gravity}</td>
        </tr>
        <tr>
          <th scope="row">terrain:</th>
          <td colspan="2">${mundoT.terrain}</td>
        </tr>
        <tr>
          <th scope="row">surface_water:</th>
          <td colspan="2">${mundoT.surface_water}</td>
        </tr>
        <tr>
          <th scope="row">population:</th>
          <td colspan="2">${mundoT.population}</td>
        </tr>
        <tr>
          <th scope="row">residents:</th>
          <td colspan="2">${mundoT.residents}</td>
        </tr>
      </tbody>
    </table>`
})
document.getElementById(`guardaStrucGen`).innerHTML=estructura  

var peliculas =(Data.films)
fetch(peliculas)
.then(pel=> pel.json())
.then(peliculasT =>{
  let guardarpelis=document.getElementById("superPelis");
  guardarpelis.innerHTML+=`
    <table class="table">
      <thead>
        <tr> 
          <th scope="col">Name:</th>
          <th scope="col">${peliculasT}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Height:</th>
          <td>${Data.height}</td>
        </tr>
        <tr>
          <th scope="row">Mass:</th>
          <td>${Data.mass}</td>
        </tr>
        <tr>
          <th scope="row">Hair_color:</th>
          <td>${Data.hair_color}</td>
        </tr>
        <tr>
          <th scope="row">skin_color:</th>
          <td colspan="2">${Data.skin_color}</td>
        </tr>
        <tr>
          <th scope="row">eye_color:</th>
          <td colspan="2">${Data.eye_color}</td>
        </tr>
        <tr>
          <th scope="row">birth_year:</th>
          <td colspan="2">${Data.birth_year}</td>
        </tr>
        <tr>
          <th scope="row">gender:</th>
          <td colspan="2">${Data.gender}</td>
        </tr>
        <tr>
          <th scope="row">homeworld:</th>
          <td colspan="2">${Data.homeworld.name}</td>
        </tr>
        <tr>
          <th scope="row">films:</th>
          <td colspan="2">${Data.films}</td>
        </tr>
      </tbody>
    </table>`
document.getElementById(`guardaStrucMun`).innerHTML=guardarpelis  
})
})

