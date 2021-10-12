/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme */
let showMe= document.querySelector('.showme');
console.log(showMe)
/* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado*/
let myHuno= document.querySelector("#pillado");
console.log(myHuno)
/* 1.3 Usa querySelector para mostrar por consola todos los p*/
let allP= document.querySelectorAll('p').forEach((element)=> { 
    console.log(element.innerHTML);
}); 

/* 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon*/
let classPokemon= document.querySelectorAll(".pokemon").forEach((element) => {
    console.log(element.innerHTML)
});

/* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe". */
let myAttribute= document.querySelectorAll('data-function[testMe]').forEach((element) => {
    console.log(element.innerHTML)
});

/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */
