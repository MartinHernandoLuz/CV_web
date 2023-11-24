let btnSwitch = document.getElementById('switch')

let aside_form = document.querySelector('aside-form') 

let a_link = document.getElementById('a-link');

let textarea = document.getElementById('textArea')
let mail = document.getElementById('email')
let nombre = document.getElementById('nombre')


btnSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('activeSwitch');


    //si body tiene la clase dark, Envergadura.com cambia el color de letra
    if(document.body.classList.contains('dark')){
        a_link.style.color = "black";

        textarea.style.border = "2px inset black";
        mail.style.border = "2px inset black";
        nombre.style.border = "2px inset black";
    
    } else {
        a_link.style.color = "#e5ff00";

        textarea.style.border = "2px inset yellow";
        mail.style.border = "2px inset yellow";
        nombre.style.border = "2px inset yellow";
    }
    
})