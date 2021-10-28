
//declaramos las constantes para empezar a trabajar
const carrito = document.getElementById("carrito");
const chocolates = document.getElementById("lista-chocolates");
const listaChocolates = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");


cargarEventListeners();

function cargarEventListeners() {
  chocolates.addEventListener("click", comprarChocolates);
  carrito.addEventListener("click", eliminarChocolates);
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
  document.addEventListener("DOMContentLoaded", leerLocalStorage);
}







//comprar producto

function comprarChocolates(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const chocolates = e.target.parentElement.parentElement;
        leerDatosChocolates(chocolates);
    }
}



function leerDatosChocolates(chocolates){
    const infoChocolates = {
        imagen: chocolates.querySelector('.imagen-platillo').src,
        titulo: chocolates.querySelector('.cardTitle').textContent,
        precio: chocolates.querySelector('.precio').textContent,
        id: chocolates.querySelector('.agregar-carrito').getAttribute('data-id')
    }

    insertarCarrito(infoChocolates);
}



function insertarCarrito(chocolates) {
    const row = document.createElement('tr');
    row.innerHTML = `
       <td>
           <img src="${chocolates.imagen}" width=100> 
       </td> 
       <td>${chocolates.titulo}</td>
       <td>${chocolates.precio}</td>
       <td>
        <a href="#" class="borrar-platillo" data-id="${chocolates.id}">X</a>
       </td>
    `;
    listaChocolates.appendChild(row);
    guardarChocolatesLocalStorage(chocolates);
}



function eliminarChocolates(e) {
    e.preventDefault();

    let chocolates,
       chocolatesId;
    
    if(e.target.classList.contains('borrar-producto')) {
        e.target.parentElement.parentElement.remove();
        chocolates = e.target.parentElement.parentElement;
        chocolatesId = platillo.querySelector('a').getAttribute('data-id');
    }
    eliminarChocolatesLocalStorage(chocolatesId)
}



function vaciarCarrito(){
    while(listaChocolates.firstChild){
        listaChocolates.removeChild(listaChocolates.firstChild);
    }
    vaciarLocalStorage();

    return false;
}















//local storage


function guardarChocolatesLocalStorage(chocolates) {
    let chocolate;

    chocolate = obtenerChocolatesLocalStorage();
    chocolate.push(chocolates);

    localStorage.setItem('chocolate', JSON.stringify(chocolates));
}




function obtenerChocolatesLocalStorage() {
    let chocolatesLocalS;

    if(localStorage.getItem('chocolates') === null) {
        chocolatesLocalS = [];
    }else {
        chocolatesLocalS = JSON.parse(localStorage.getItem('chocolates'));
    }
    return chocolatesLocalS;
}




function leerLocalStorage() {
    let chocolatesLocalS;

    chocolatesLocalS = obtenerChocolatesLocalStorage();

    chocolatesLocalS.forEach(function(chocolate){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${chocolate.imagen}" width=100>
            </td>
            <td>${chocolate.titulo}</td>
            <td>${chocolate.precio}</td>
            <td>
                <a href="#" class="borrar-producto" data-id="${chocolate.id}">X</a>
            </td>
        `;
        listaChocolates.appendChild(row);
    });
}





function eliminarChocolatesLocalStorage(chocolate) {
    let chocolatesLocalS;
    chocolatesLocalS = obtenerChocolatesLocalStorage();

    chocolatesLocalS.forEach(function(chocolatesLocalS, index){
        if(chocolatesLocalS.id === chocolate) {
            chocolatesLocalS.splice(index, 1);
        }
    });

    localStorage.setItem('chocolates', JSON.stringify(chocolatesLocalS));
}

function vaciarLocalStorage() {
    localStorage.clear();
}




