// Obtener referencias a los elementos del DOM
let inputAmigo = document.getElementById('amigo');
let btnAgregar = document.querySelector('.button-add');
let listaAmigos = document.getElementById('listaAmigos');
let btnSortear = document.querySelector('.button-draw');
let resultado = document.getElementById('resultado');

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un nuevo amigo a la lista
function agregarAmigo() {
  let nuevoAmigo = inputAmigo.value.trim();
  if (nuevoAmigo != '') {
    amigos.push(nuevoAmigo);
    crearItemLista(nuevoAmigo);
    inputAmigo.value = '';
  }
}

// Función para crear un elemento de lista con un nombre
function crearItemLista(nombre) {
  let itemLista = document.createElement('li');
  itemLista.textContent = nombre;
  listaAmigos.appendChild(itemLista);
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
  if (amigos.length > 0) {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(`¡El amigo secreto es: ${amigoSorteado}!`);
    amigos.splice(amigos.indexOf(amigoSorteado), 1); // Eliminar el amigo sorteado de la lista
    actualizarListaAmigos(); // Actualizar la lista de amigos en el DOM
  } else {
    mostrarResultado('No hay amigos en la lista. Agregue algunos nombres primero.');
  }
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
  listaAmigos.innerHTML = ''; // Limpiar la lista de amigos en el DOM
  amigos.forEach(crearItemLista); // Volver a crear los elementos de la lista
}

// Función para mostrar el resultado en la lista de resultados
function mostrarResultado(mensaje) {
  resultado.innerHTML = ''; // Limpiar la lista de resultados
  let itemResultado = document.createElement('li');
  itemResultado.textContent = mensaje;
  resultado.appendChild(itemResultado);
}