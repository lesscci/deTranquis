
const elBorne = document.querySelectorAll(".el-borne");



const obtenerPersonajes2 = () => {
    fetch("https://rickandmortyapi.com/api/character",{
        method:"GET"
    })
    .then(e => e.json())
    .then(e => recorrerBares(e.results))
    .catch(e => console.log(e));
};



obtenerPersonajes2();

elBorne.forEach(elemento=>console.log(elemento))

const recorrerBares = (bares) => {
    bares.map(bar=>{
        elBorne.forEach(elemento=>{
        const contenedorBar = document.createElement("div");
        const imagenBar = document.createElement("img");
        const tituloBar = document.createElement("p");
        imagenBar.src = bar.image;
        tituloBar.innerHTML = bar.name;
        contenedorBar.appendChild(imagenBar);
        contenedorBar.appendChild(tituloBar);
          elemento.appendChild(contenedorBar);  
        })
    })
}
