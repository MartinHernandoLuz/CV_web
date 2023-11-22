let btnSwitch = document.getElementById('switch')


let a_link = document.getElementById('a-link');


btnSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('activeSwitch');

    if(document.body.classList.contains('dark')){
        a_link.style.color = "black";
    } else {
        a_link.style.color = "#e5ff00";
    }
    
})