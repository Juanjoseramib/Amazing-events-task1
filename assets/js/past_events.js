// importar funciones
import {urlApi,
  addUpPastCards,
  crearChecks,
  filterEventChecks,
  searchList,
} from '../module/functions.js';



// Traer contenedores
const divContPast = document.getElementById("cont_pastcards");
const $pastChecks = document.getElementById("div_pastforms");
const $pastSearch = document.getElementById("search_pastinput");


fetch (urlApi)
 .then (response => response.json())
 .then(data => {
   const events = data.events.filter(element => element.date < data.currentDate)
    //  console.log(events)
    addUpPastCards(events, divContPast);
   const categories = [...new Set(events.map((cate) => cate["category"]))];
   crearChecks(categories, $pastChecks)
   $pastChecks.addEventListener("change", (event) => {
    divContPast.innerHTML  = " "
    const searchValue = $pastSearch.value.toLowerCase();
    let filteredSearch = searchList(searchValue, events) 
    const filtered = filterEventChecks(filteredSearch);
    addUpPastCards(filtered, divContPast)
   })
   $pastSearch.addEventListener("keyup", (event) => {
      divContPast.innerHTML  = " "
      const searchValue = $pastSearch.value.toLowerCase();
      const filteredCheck = filterEventChecks(events);
      let filtered = searchList(searchValue, filteredCheck) 
      addUpPastCards(filtered, divContPast)})
   })
  //  console.log(data)
 .catch (error=> console.log("Hey please take a look to this error! " + error) )
