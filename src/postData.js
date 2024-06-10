//post//
import { postFuntion } from ".";
async function enviarDatos() {
    let tarea = {
        nombre: input.value,
        estado: false
    }
    try {
        const response = await fetch('http://localhost:3000/api/task', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              },
            body: JSON.stringify(tarea)
        });
        if (!response.ok) {
            throw new Error('Error al enviar los datos');
        }
        const data = await response.json();
        console.log('Tarea enviada:', data);
    } catch (error) {
        console.error('Error al enviar tarea:', error);
    }


}



import {addBtn} from ".";

export {enviarDatos}
