// Inserte el código aquí
const input = document.querySelector("input");
const agregarBtn = document.querySelector(".agg-Btn");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

agregarBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    
    const p = document.createElement("p");
    p.textContent = text;

  
    p.appendChild(addDeleteBtn());
    ul.appendChild(p);

    input.value = "";
    
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("p");

    if (items.length === 0) {
     
    }
  });

  return deleteBtn;
}