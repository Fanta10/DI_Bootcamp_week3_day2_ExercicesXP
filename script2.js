//Exercice 2 : Travailler Avec Les Formulaires

//Récupérez le formulaire et la console.log celui-ci
let form = document.querySelector('form')
console.log(form)
//Retrieve the inputs by their id and console.log them
let input1 = document.querySelector('#fname')
console.log(input1)

let input2 = document.querySelector('#lname')
console.log(input2)

let input3 = document.querySelector('#submit')
console.log(input3)
//Retrieve the inputs by their attribute and console.log them.name
let nameInput1 = form.elements.fname;
console.log(nameInput1)
let nameInput2 = form.elements.lname;
console.log(nameInput2)
let nameInput3 = form.elements.submit;
console.log(nameInput3)
//
let value1;
let value2;
form.addEventListener("submit", test)
function test(e){
    
    e.preventDefault();
     value1 = input1.value
    
     value2 = input2.value
    
    if(value1 == ""){
        console.log("le champ est vide"); 

    }
    else{
        console.log(value1);
    }

    if(value2 == ""){
        console.log("le champ est vide"); 

    }
    else{
        console.log(value2);
       

    }

    
    

}




let li1 = document.createElement('li');
li1.innerHTML = "first name of the user"
let li2 = document.createElement('li');
li2.innerHTML = "last name of the user"
let ul = document.querySelector('ul');
ul.classList.add("usersAnswer")
ul.appendChild(li1)
ul.appendChild(li2)




