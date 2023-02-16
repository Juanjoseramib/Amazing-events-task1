// importar funciones
import {urlApi,
  createEvents,
} from '../module/functions.js';


const divEvent = document.getElementById("cont_event");


fetch(urlApi)
.then(response => response.json())
.then(data => {
  const events = data.events
  
  const params = new URLSearchParams(location.search);
  
  const id = params.get("id");
  
  const detail = events.find((event) => event._id == id);
  
  createEvents(detail, divEvent);

}).catch (error=> console.log("Hey please take a look to this error! " + error) )

