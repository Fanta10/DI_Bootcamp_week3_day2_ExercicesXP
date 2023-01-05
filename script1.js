//Using a DOM property, retrieve the and console.log it.h
let h1 = document.querySelector('h1')
console.log(h1)
//Using DOM methods, remove the last paragraph in the tag.<article>
let article = document.querySelector('article')
article.removeChild(article.lastElementChild)
//Add a event listener which will change the background color of the to red, when it’s clicked on.h2
let h2 = document.querySelector('h2')
h2.addEventListener("click", function style(){ h2.style.backgroundColor = "red"})
//Add an event listener which will hide the when it’s clicked on (use the display:none property).h3
let h3 = document.querySelector('h3')
h3.addEventListener("click", function display(){h3.style.display = "none";})
let bouton = document.createElement('button')
bouton.innerHTML = "Click"
let body = document.querySelector('body')
body.appendChild(bouton)
let p = document.querySelectorAll('p');
bouton.addEventListener("click", function button(){ 
    for(let elt of p )
    {
        elt.style.fontSize = "20px";
    }
    })

//Lorsque vous survolez le , définissez la taille de la police sur une taille de pixel aléatoire comprise entre 0 et 100
    h1.addEventListener("mouseover", function h(){ h1.style.fontSize = "45px";
})
// Lorsque vous survolez le 2ème paragraphe, il devrait disparaître

let p2 = p[1];
console.log(p2);
let randValue = Math.floor(Math.random() * 100);
console.log(randValue);

p2.classList.add("fade-in-text")
p2.addEventListener("mouseover", function (){
   p2.style.fontFamily = "arial";
    p2.style.fontSize = `${randValue}px`;
    p2.style.transition = " opacity 2s";
    p2.style.opacity = "0"
    
})