// importar la data
let list = data;
let events = list.events;

// Llamar los contenedores
const divcont = document.getElementById("cont_cards");
const $checks = document.getElementById("div_forms");
const $search = document.getElementById("search_input");

// crear cards
addCards(events, divcont);
function addCards(list, element) {
  let template = " ";
  for (let event of list) {
    template += crearCards(event);
  }
  // console.log(template);
  element.innerHTML = template;
}

function crearCards(list) {
  return `<div class="card" style="width: 18rem">
        <img src=" ${list.image} " class="card-img-top" alt="Books" />
        <div class="card-body d-flex flex-column justify-content-around">
          <h5 class="card-title">${list.name}</h5>
          <p class="card-text">${list.description}</p>
          <div class="card-foot d-flex align-items-baseline justify-content-around">
            <h6>
              <span>price</span> ${list.price}
            </h6>
            <a href="./assets/html/events.html?id=${list._id}" class="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>`;
}

const categories = [...new Set(events.map((cate) => cate["category"]))];

// Crear checkboxs
agregarDiv(categories, $checks);
function agregarDiv(list, element) {
  list.forEach((cate) => (element.innerHTML += crearDiv(cate)));
}
function crearDiv(cate) {
  return `<div class="form-check">
   <input
     class="form-check-input"
     type="checkbox"
    value="${cate}"
     id="flexCheckDefault"
   />
   <label class="form-check-label" for="flexCheckDefault">
     ${cate}
   </label>
 </div>`;
}

// Funciones

$checks.addEventListener("change", (event) => {
  const searchValue = $search.value.toLowerCase();
  const results = searchList(searchValue, events);
  const filtered = filtrarEventChecks(results);
  console.log(event.target.value);
  addCards(filtered, divcont);
});

function filtrarEventChecks(list) {
  const checked = [
    ...document.querySelectorAll('input[type="checkbox"]:checked'),
  ].map((input) => input.value);
  console.log(
    [...document.querySelectorAll('input[type="checkbox"]:checked')].map(
      (input) => input.value
    )
  );
  if (checked.length === 0) {
    return list;
  }
  return list.filter((event) => checked.includes(event.category));
}
function searchList(searchValue, list) {
  return list.filter((event) => event.name.toLowerCase().includes(searchValue));
}
$search.addEventListener("keyup", (event) => {
  event.preventDefault();
  const searchValue = $search.value.toLowerCase();
  const results = searchList(searchValue, events);
  const filtered = filtrarEventChecks(results);
  addCards(filtered, divcont);
});
