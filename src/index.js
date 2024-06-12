
  const CorreoE = document.querySelector('#CorreoE').value;
  const Usuario1 = document.querySelector('#Usuario1').value;
  const Contraseña1 = document.querySelector('#Contraseña1').value;
import { enviarDatos } from "./postData";
/*export const postFuntion = input.value 
import { obtenerTareas } from "./getData";
import { borrarData } from "./deleteData";*/
//variables//

var Contenedor_Login_Register = document.querySelector(".Contenedor_Login_Register");

var formulario__login = document.querySelector(".formulario__login");

var formulario__Registro = document.querySelector(".formulario__Registro");

var caja__traseraLogin = document.querySelector(".caja__traseraLogin");

var caja__traseraRegistrar = document.querySelector(".caja__traseraRegistrar");

//const Registrojs = document.querySelector('#Registrojs')

let btnregistro = document.getElementById("register1")
async function Registro() {

await enviarDatos(CorreoE, Usuario1, Contraseña1)

}
console.log(CorreoE)

    const Users = JSON.parse(localStorage.getItem('users')) || []
    
  



const Loginjs = document.querySelector('#Loginjs')  
/*    
Loginjs.addEventListener('submit', (e) =>
  {
    e.preventDefault()
    const CorreoE = document.querySelector ('#CorreoE').value;
    const Contraseña1 = document.querySelector ('#Contraseña1').value;
    const Users = JSON.parse(localStorage.getItem('users')) || []
    
    const UsuarioValido = Users.find(user => user.CorreoE === CorreoE && user.Contraseña1 === Contraseña1);
    if (!UsuarioValido) {
        return alert('El correo o la contraseña no son validos!');
    };
    
    alert (`Bienvenido ${UsuarioValido.Usuario1}`);

    window.location.href = 'galeria.html';
    
});*/





















/*





const input = document.querySelector("input");//input donde escribimos las tareas
const addBtn = document.querySelector(".agg-Btn");//boton de agregar
const ul = document.querySelector("ul");//esta es la lista donde van las tareas
const empty = document.querySelector(".empty");//este es el texto cuando no hay tareas
export const postFuntion = input.value 
import { obtenerTareas } from "./getData";
import { enviarDatos } from "./postData";
import { borrarData } from "./deleteData";
crearElem()
//funcion para que aparescan las tareas en la lista
addBtn.addEventListener("click", async(e) => {
  e.preventDefault();//prevencion para que no se recargue la pagina
  const text = input.value;
  if (text !== "") {
    console.log(text)
    await enviarDatos(text)
    
    input.value = "";
    empty.style.display = "none";
     


    const li = document.createElement("li");//constante de la lista
    const p = document.createElement("p");//parrafo que va adentro de la lista
     p.innerText=text
      li.appendChild(p);
      li.appendChild(addDeleteBtn());
      ul.appendChild(li);
     

    }
    });
    async function crearElem() {
      console.log(131)
      let task =  await obtenerTareas()
      console.log(task)
      for (let index = 0; index < task.length; index++) {
        const li = document.createElement("li");//constante de la lista
        const p = document.createElement("p");//parrafo que va adentro de la lista
        p.innerText=task[index].task
    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);
    }
    } 
  

//funcion de borrar las tareas de la lista
function addDeleteBtn() {
  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "X";
  btnBorrar.className = "btn-delete";
  btnBorrar.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);
    const items = document.querySelectorAll("li");
    if (items.length === 0) {
      empty.style.display = "block";
    }
  });
  return btnBorrar;
}
window.addEventListener('load', async () => {
    obtenerTareas()
});

export{addBtn, crearElem}  */