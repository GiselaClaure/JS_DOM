/* 2.1 Inserta dinamicamente en un html un div vacio con javascript.*/
let newDiv= document.createElement("div")
console.log(newDiv)
//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let newP= document.createElement("p")
newDiv.appendChild(newP);
console.log(newP)
//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
function newPloop(){
    let secondDiv= document.createElement("div")
    for (let i = 0; i <= 6; i++) {
        let secondP= document.createElement("p");
        secondDiv.appendChild(secondP)
    }
}
//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let Pcontainer= document.createElement("p");
let newContent= document.createTextNode("Soy dinámico");
Pcontainer.appendChild(newContent)

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let myH1= document.getElementsByClassName(".fn-insert-here");
let newH1Text= document.createTextNode('Wubba Lubba dub dub');
myH1.appendChild(newH1Text);


//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
function newList () {
    let newUl= document.createElement("ul");
    for (const i of apps) {
        let myLi= document.createElement("li");
        let myLiText= document.createTextNode(apps[i]);
        myLi.appendChild(myLiText);
        newUl.appendChild(myLi);
    }
}

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
function removeNodes(){
    let allNodes=document.querySelectorAll('.fn-remove-me');
    let i=0;
    while(i<allNodes.length){
        allNodes[i].remove();
        i++;
    }
} 

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.*/




//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
function addTextIntoClass() {
    let elements = document.getElementsByClassName('fn-insert-here');
    for (const element of elements) {
        const newP = document.createElement('p');
        newP.textContent = 'Voy en medio!'; 
        element.insertAdjacentElement("beforeend", newP);
    }
}