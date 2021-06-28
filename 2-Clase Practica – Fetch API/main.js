// Contenedor HTML con los datos a cargar dinamicamente.
let tagTBody = document.querySelector("#tabla tbody");
// Direccion Fetch API
let pUrl = "https://my-json-server.typicode.com/Kings-Girl/FetchAPI/comentarios";

fetch (pUrl,
      {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          } 
      }
) 
 .then(response => response.json()) 
 .then(data => { 

   let tabla = data;

   tabla.forEach(element => {
        // Filas y Columnas de la tabla con el DOM HTML
        let tagFila = document.createElement("tr");
        let tagID = document.createElement("td");
        let tagNombre = document.createElement("td");
        let tagPlazo = document.createElement("td");
        let tagAnualidad = document.createElement("td");

        tagFila.setAttribute("id", element.id);
        tagID.innerHTML = element.id;
        tagNombre.innerHTML = element.nombre;
        tagPlazo.innerHTML = element.plazo;
        tagAnualidad.innerHTML = element.anualidad;

        // Objetos DOM HTML en el contenedor
        tagFila.appendChild(tagID);
        tagFila.appendChild(tagNombre);
        tagFila.appendChild(tagPlazo);
        tagFila.appendChild(tagAnualidad);

        tagTBody.appendChild(tagFila);

        // Programo el evento onclick de la fila
        tagFila.onclick = function (e){
           let container = e.target.parentElement;
           let urlNew = pUrl + "/"+ container.id;
           fetch (urlNew)
           .then (resp => resp.json())
           .then (datos => {
               console.log (datos);
           });
        }     
        //Intento de Modal
        /*varFila.setAttribute("data-target", '#' + element.id);

        varDivModalFade.setAttribute("id", element.id);*/
    });        
    }     
     ); 

     
