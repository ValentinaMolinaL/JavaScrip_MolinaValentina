var api ='https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

function funCartas(){
    fetch(api)
    .then(res => res.json())
    .then(maso =>{
        console.log(maso);
        

    })
}