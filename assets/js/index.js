// importar funciones
import {urlApi,
  addCards,
  crearChecks,
  filterEventChecks,
  searchList,
} from '../module/functions.js';

// Llamar los contenedores
const divcont = document.getElementById("cont_cards");
const $checks = document.getElementById("div_forms");
const $search = document.getElementById("search_input");

fetch (urlApi)
 .then (response => response.json())
 .then(data => {
   const events = data.events
   console.log(events)
   addCards(events, divcont);
   const categories = [...new Set(events.map((cate) => cate["category"]))];
   crearChecks(categories, $checks)
   $checks.addEventListener("change", (event) => {
    divcont.innerHTML  = " "
    const searchValue = $search.value.toLowerCase();
    let filteredSearch = searchList(searchValue, events) 
    const filtered = filterEventChecks(filteredSearch);
    addCards(filtered, divcont)
   })
    $search.addEventListener("keyup", (event) => {
      divcont.innerHTML  = " "
      const searchValue = $search.value.toLowerCase();
      const filteredCheck = filterEventChecks(events);
      let filtered = searchList(searchValue, filteredCheck) 
      addCards(filtered, divcont)})
   })
  //  console.log(data)
 .catch (error=> console.log("Hey please take a look to this error! " + error) )

 
