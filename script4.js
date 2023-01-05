//
let volume;
const pi = Math.PI;

//recuperer tous les enfants du formulaire
let form = document.getElementById('MyForm')
//recupèrre l'element input du formulaire qui a pour id radius
let radius = form.elements.radius;
console.log(radius.value);
//
let volumeValue = form.elements.volume;
console.log(volumeValue);
console.log(volumeValue.value);
// recuperation du bouton depuis le DOM
let btn = form[2];
//ajout d'evenement sur le bouton
btn.addEventListener("click", soumettre)

function soumettre(e){
    e.preventDefault();
    console.log(radius.value)
    volume = (4 / 3) * pi * (radius.value)**3
    console.log(("le volume de la sphère est : " + volume));

    

}

