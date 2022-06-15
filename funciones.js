import cardItem from "infocards.js";

let cardItem = document.querySelector(".list-card");
let imagen = "./titanic.jpg"
let titulo = "Titanic";
let year = "1997";
let director = "James Cameron";
let sinopsis = "Un joven artista, Jack,  muere congelado en el océano Atlántico, a causa de que su enamorada, Rose, no compartiera la tabla donde ella estaba subida, después de que el Titanic, se hundiera por el choque contra un iceberg.";


// function nodoNuevo(nImg,nTitulo,nYear,nDirector,nSinopsi){
//     let imagen = nImg;
//     let titulo = nTitulo;
//     let year = nYear;
//     let director = nDirector;
//     let sinopsis = nSinopsi;
//     let nodoUno =
cardItem.innerHTML= `
    <article class="list-card-item">
    <div class="list-card-item-content">
      <img src= ${imagen} alt="pokemon-1"/>
      <h1 class = "item2">${nTitulo}</h1>
      <p class = "item3">${nYear} </p>
      <p class = "item4">${nDirector} </p>
      <p class = "item5">${nSinopsi} </p>;
     </div>
  </article>`;
}
    return nodoUno;



    // function nodoNuevo(nImg,nTitulo,nYear,nDirector,nSinopsi){
    //     let nodoUno =
    //     `<img src= ${nImg}" class = "item1">
    //     <h1 class = "item2">${nTitulo}</h1>
    //     <p class = "item3">${nYear} </p>
    //     <p class = "item4">${nDirector} </p>
    //     <p class = "item5">${nSinopsi} </p>`;
    