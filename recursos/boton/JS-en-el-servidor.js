/*
ejecutamos con:
    node index.js
muestra error, porque node.js no interpreta elemento de html

*/

//! 1. declaro una variable que llamara a una libreria que pertencece a node.js
const fileSystem = require('fs')
//! 2. creamos un archivo de texto llamado helloWord.txt, llamamos al mensaje "Hello world"
fileSystem.writeFileSync('helloWord.txt', "Hello world")
console.log('the file helloWord.txt ha sido creado')
// ejecutamos con node JS-en-el-servidor.js


//paquetes existen ya previamente en su web y lo podemos usar instalandolo
//instalo el paquete npm install how-many-pizza
//declaramos y usamos
let howManyPizza = require('how-many-pizza')
console.log('necesitamos %s pizas para 8 personas',howManyPizza(8))

/*
Js en el cliente vs Js en el servidor
cliente== se ejecuta en un navegador web mediante tags de <script></script>. 
        tiene acceso a las funciones y objetos en la pagina web.
servidor== se ejecuta mediante Node.js y tiene acceso a paquetes que permiten interactuar con el sist operativo.
        usualmente se usa para construir servicios web.
El mismo JS en todos los lados, si bien las funcioalidades disponibles son distintas en el navegador y en NodeJS, la logica que implementes puede ser la misma. La comunidad nos ofrece librerias para ambos.


*/