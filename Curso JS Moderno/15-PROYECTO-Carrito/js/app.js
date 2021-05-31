// Variables
const carrito = document.querySelector('#carrito');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

// Agregar nuevos cursos al carrito
const agregarCurso = (e) => {
  e.preventDefault();
  if(e.target.classList.contains('agregar-carrito')){
    console.log('agregamos al carrito...');
  }  
}

//Eventos
const agregarEventListener = () => {
  listaCursos.addEventListener('click', agregarCurso);
}
agregarEventListener();



