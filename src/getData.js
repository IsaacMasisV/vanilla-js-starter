 async function getTareas() {
    try {
            const response = await fetch("http://localhost:3000/api/task")
            let listaTareas = await response.json()
            listaTareas.forEach(element =>{
            const li = document.createElement("p");
            const checkbox = document.createElement("input")
            document.createElement("label");
            const BtnBorrar = document.createElement("button")
            BtnBorrar.textContent= "x"
            BtnBorrar.className = "BotonBorrar"
            checkbox.type= "checkbox"
            checkbox.className="check"
            li.className="tareas"
           
           // p.innerHTML = element.tarea;
           // li.appendchild(checkbox)
           // li.appendchild(p);
           // li.appendchild(BtnBorrar)
          //  lista.appendchild(li);
            BtnBorrar,addEventListener("click", ()=>{
           // deleteData(eleme
            });
        });
    }catch (error) {
        console.error(error);
        }
        };
        export {getTareas}