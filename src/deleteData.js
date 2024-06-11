
 
 async function borrarData(id) {
try {
    const response = await fetch(`http://localhost:3000/api/task${id}`,{
    
        method: 'DELETE',
        headers: {
            "Content-type": "application/json;",
          },
        body: JSON.stringify(tarea)
    });

    const data = JSON.parse.stringify(response)

  //  let datos1 = await response.json()
} catch (error) {
    console.error(error);
    
}
}
export {borrarData}