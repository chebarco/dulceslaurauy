const contenedor = document.getElementById('contenedor-productos')

for (const producto of stockProductos) {
    $('#productos').append(`<div class="productCard col-4 p-0 mb-5">
                                <img src="${producto.img}" class="col-12">
                                <p class="col-12 mb-0">${producto.nombre}</p>
                                <p class="col-12" style="color: green;">$${producto.precio}</p>
                                <button type="button" class="btn-btn col-3 ml-3" id="${producto.id}">Comprar</button>
                            </div> `);
};





const enviar  = document.getElementById('enviar')
const cerrar = document.getElementById('cerrar')
const modalConteiner = document.getElementById('modal-conteiner')

enviar.addEventListener('click',() => {
    modalConteiner.classList.add('mensaje-activo')
})

cerrar.addEventListener ('click',() => {
    modalConteiner.classList.remove('mensaje-activo')
})



