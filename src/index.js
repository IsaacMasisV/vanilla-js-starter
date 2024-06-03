// Inserte el código aquí

let lista = document.getElementById('lista1') 
let texto = document.getElementById('inputs')
let boton = document.getElementById("btn")
boton.addEventListener('click',()=>{
    
    let bts = document.createElement("p")
    bts.textContent=texto.value

    lista.appendChild(bts)
})




commit de lista, inpuds, boton de agregar
