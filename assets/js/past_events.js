// Traer data
let list = data;
let events = list.events;

// Traer contenedores
const divContPast = document.getElementById("cont_pastcards");
const $pastChecks = document.getElementById("div_pastforms");
const $pastSearch = document.getElementById("search_pastinput");

// Crear cards

addPastCards(events, divContPast);
function addPastCards(obj, element) {
  let curDate = new Date(data.currentDate);
  let template = " ";
  for (let event of obj) {
    let pastDate = new Date(event.date);
    if (pastDate < curDate) {
      template += createPastCards(event);
    }

    element.innerHTML = template;
  }
}
function createPastCards(list) {
  return `<div class="card" style="width: 18rem">
        <img src=" ${list.image} " class="card-img-top" alt="Books" />
        <div class="card-body d-flex flex-column justify-content-around">
          <h5 class="card-title">${list.name}</h5>
          <p class="card-text">${list.description}</p>
          <div class="card-foot d-flex align-items-baseline justify-content-around">
            <h6>
              <span>price</span> ${list.price}
            </h6>
            <a href="/assets/html/events.html?id=${list._id}" class="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>`;
}

// Crear array de las categorias sin repetir / Crear checkboxs basados en el array <-
const categories = [...new Set(events.map((cate) => cate["category"]))];

addPastDiv(categories, $pastChecks);
function addPastDiv(list, element) {
  list.forEach((cate) => (element.innerHTML += createPastDiv(cate)));
}
function createPastDiv(cate) {
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

// Funcion para filtrar checkbox
$pastChecks.addEventListener("change", (event) => {
  const searchValue = $pastSearch.value.toLowerCase();
  const results = searchList(searchValue, events);
  const filtered = filterEventChecks(results);

  addPastCards(filtered, divContPast);
});

function filterEventChecks(list) {
  const checked = [
    ...document.querySelectorAll('input[type="checkbox"]:checked'),
  ].map((input) => input.value);

  if (checked.length === 0) {
    return list;
  }
  return list.filter((event) => checked.includes(event.category));
}

// Funcion para filtrar search
function searchList(searchValue, list) {
  return list.filter((event) => event.name.toLowerCase().includes(searchValue));
}
$pastSearch.addEventListener("keyup", (event) => {
  event.preventDefault();
  const searchValue = $pastSearch.value.toLowerCase();
  const results = searchList(searchValue, events);
  const filtered = filterEventChecks(results);
  addPastCards(filtered, divContPast);
});
