//creamos la variable para llamar a un elemento html que tiene el id se llama submit
let submitBtn = document.getElementById('submit');



submitBtn.addEventListener('click', cosas)

function cosas(params) {
    //agregamos color al boton verde
submitBtn.style='background-color: green';
alert('hello js')
}