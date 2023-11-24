let footer_grid = document.getElementById('footer_grid');
let a1 = document.getElementById('a1')
let a2 = document.getElementById('a2')
let a3 = document.getElementById('a3')

//mouseover es para cuando el puntero se posiciona arriba del objeto
//mouse out es para cuando el puntero se va de arriba del objeto
a1.addEventListener('mouseover', ()=>{
    a1.classList.add('a1') //adiero la clase a1 qué se encuentra en style.css
})
a1.addEventListener('mouseout', ()=>{
    a1.classList.remove('a1') //remuevo la clase
})


a2.addEventListener('mouseover', ()=>{
    footer_grid.classList.add('a2')
    a2.classList.add('a2_2')
})
a2.addEventListener('mouseout', ()=>{
    footer_grid.classList.remove('a2')
    a2.classList.remove('a2_2')
})

a3.addEventListener('mouseover', ()=>{
    a3.classList.add('a3')
})
a3.addEventListener('mouseout', ()=>{
    a3.classList.remove('a3')
})