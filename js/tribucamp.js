const URL_API = "data/tribus.json";

function loadData(){
    fetch(URL_API)
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            viewHTML(data);
        })
}
function viewHTML(myData){
    const divContenedor = document.querySelector('#contenedor')
    const {idTribu,tribu,puntos,campers} = myData;

    divContenedor.innerHTML = /* HTML */ `
    <p>idTribu : ${idTribu}</p>
    <p>tribu : ${tribu}</p>
    <p>puntos : ${puntos}</p>
    <p>campers : ${campers}</p>
    `
}
