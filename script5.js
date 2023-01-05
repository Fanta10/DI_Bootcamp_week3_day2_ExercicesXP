let bouton = document.querySelector('button');
bouton.addEventListener("click", clicked)

function clicked(e){
e.preventDefault();
bouton.style.float = "right"
bouton.style.backgroundColor = "ligthblue"
bouton.style.padding = "25px"
bouton.style.border = "1px solid color ligthblue"

}
bouton.addEventListener("dblclick", clickdb)
function clickdb(){
    bouton.style.float = "left"
}
bouton.addEventListener("mouseover", souris)
function souris(){
bouton.style.color = "blue"
bouton.style.fontSize = "15px"
}
bouton.addEventListener("mouseout", sourisOut)
function sourisOut(){
    bouton.style.color = "black"
    bouton.style.fontSize = "15px"
    
}


    