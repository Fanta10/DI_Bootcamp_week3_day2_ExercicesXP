//Exercice 3 : Transformer La Phrase
let allBoldItems;
let p = document.querySelector('p')
console.log(p)
let strong = document.querySelectorAll('strong')
console.log(strong);
function getBold_items(){
    
    for (let elt in strong){
        allBoldItems = strong[elt];
        console.log(allBoldItems)
    }
}

getBold_items()
p.addEventListener("mouseover", highlight);
p.addEventListener("mouseout", return_normal)

function highlight(){
    for(let j in p){
        p.style.color = "blue"

    }
    
    
    
}

function return_normal(){
    for(let gras of strong){
        gras.style.color = "black"

    }


}

//return_normal()
