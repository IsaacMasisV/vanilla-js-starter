const input = document.querySelector("input");//input donde escribimos las tareas
const addBtn = document.querySelector(".agg-Btn");//boton de agregar
const ul = document.querySelector("ul");//esta es la lista donde van las tareas
const empty = document.querySelector(".empty");//este es el texto cuando no hay tareas
export const postFuntion = input.value 
import { obtenerTareas } from "./linkappi";
import { enviarDatos } from "./postData";
import { getTareas } from "./getData";
import { borrarData } from "./deleteData";

//funcion para que aparescan las tareas en la lista
addBtn.addEventListener("click", async(e) => {
  e.preventDefault();//prevencion para que no se recargue la pagina
  const text = input.value;
  if (text !== "") {
    await enviarDatos(text)
    crearElem(text)
    input.value = "";
    empty.style.display = "none";
    }
    });
    async function crearElem(text) {
      const li = document.createElement("li");//constante de la lista
      const p = document.createElement("p");//parrafo que va adentro de la lista
      p.textContent = text;
      li.appendChild(p);
      li.appendChild(addDeleteBtn());
      ul.appendChild(li);
    }
    crearElem()
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
getTareas()
export{addBtn}  