// Inserte el código aquí

let lista = document.getElementById('lista1') 
let texto = document.getElementById('inputs')
let boton = document.getElementById("btn")

boton.addEventListener('click',()=>{
    
    let bts = document.createElement("p")
    bts.textContent=texto.value

    lista.appendChild(bts)

    let caja = document.createElement("input");
    caja.type= "checkbox"
    
    bts.appendChild(caja)
 
    let bor = document.createElement("button");
    bor.textContent= "Q"

    bts.appendChild(bor)





    

   



})



