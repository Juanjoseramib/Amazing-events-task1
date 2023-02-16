// importar funciones
import {urlApi,
  addCards,
  crearChecks,
  filterEventChecks,
  searchList,
} from '../module/functions.js';

// Traer contenedores
const divContUp = document.getElementById("cont_upcards");
const $upChecks = document.getElementById("div_upforms");
const $upSearch = document.getElementById("search_upinput");


fetch (urlApi)
 .then (response => response.json())
 .then(data => {
   const events = data.events.filter(element => element.date > data.currentDate)
    //  console.log(events)
   addCards(events, divContUp);
   const categories = [...new Set(events.map((cate) => cate["category"]))];
   crearChecks(categories, $upChecks)
   $upChecks.addEventListener("change", (event) => {
    divContUp.innerHTML  = " "
    const searchValue = $upSearch.value.toLowerCase();
    let filteredSearch = searchList(searchValue, events) 
    const filtered = filterEventChecks(filteredSearch);
    addCards(filtered, divContUp)
   })
    $upSearch.addEventListener("keyup", (event) => {
      divContUp.innerHTML  = " "
      const searchValue = $upSearch.value.toLowerCase();
      const filteredCheck = filterEventChecks(events);
      let filtered = searchList(searchValue, filteredCheck) 
      addCards(filtered, divContUp)})
   })
  //  console.log(data)
 .catch (error=> console.log("Hey please take a look to this error! " + error) )

 