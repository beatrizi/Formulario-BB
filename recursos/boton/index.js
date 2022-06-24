//creamos la variable para llamar a un elemento html que tiene el id se llama submit
let submitBtn = document.getElementById('submit');
submitBtn.style='background-color: #9858a8';



submitBtn.addEventListener('click', cosas)

function cosas(params) {
    //cambiamos color al boton verde con el click
submitBtn.style='background-color: #8fc98b';
    // despues de 2 segundo salta la aterta
    // alert('hello js')
setTimeout(alert('hello js'), 5000);
//The setTimeout() method calls a function after a number of milliseconds.
//1 second = 1000 milliseconds.
}