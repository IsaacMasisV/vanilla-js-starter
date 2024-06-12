//post//

import {  crearElem }from "./index"

export async function enviarDatos(CorreoE, Usuario1, Contraseña1) {
    try {
        const response = await fetch('http://localhost:3000/api/task', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              },
        body: JSON.stringify({
          correo: CorreoE.value, Usuario: Usuario1.value, contra: Contraseña1.value
          

        })
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
