//El querySelector nos pide escribir a que propiedades queremos acceder como en CSS
//const p = document.querySelector('p');
//const parrafito = document.querySelector('.parrafito');
//const pid = document.getElementById('pid');


/* console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});
//sirve para meter texto html sobre otro html y en innerHTML mete todo el tipo de codigo html pero no es seguro
h1.innerText = 'Patito feo';
h1.getAttribute('pantalla');
h1.setAttribute('pantalla', 'pragma');
h1.getAttribute('pantalla');

//agregar class
h1.classList.add('verde');
//eliminar class
h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value = "456";

const img = document.createElement('img');
img.setAttribute('src', 'https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_1280.jpg');
console.log(img);

pid.innerHTML="";
pid.appendChild(img); */


const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const parrafo = document.querySelector('#resultadoSuma')
const form = document.querySelector('#form')

//el addEventListener recibe 2 parametros, el primero es el tipo de evento que espera escuchar y el segundo es la fun
//función que se debe llamar, la función se pone sin los parentesis porque el add... los pone 
btn.addEventListener('click', SumaForm);

function SumaForm() {
    const resultado = +input1.value + Number(input2.value);
    //Ponerle se "+" antes de la variable sirve para convertirlo directamente a number y así poder hacer la operación
    // Y ya obvio el Number() es para convertir a numero y sumar
    console.log(resultado);
    parrafo.innerHTML = "El Resultado es: " + resultado;

};

