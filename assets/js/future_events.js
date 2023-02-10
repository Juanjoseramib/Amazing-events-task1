// Traer data
let list = data;
let events = list.events;

// Traer contenedores
const divContUp = document.getElementById("cont_upcards");
const $upChecks = document.getElementById("div_upforms");
const $upSearch = document.getElementById("search_upinput");

// Crear cards

addUpCards(events, divContUp);
function addUpCards(obj, element) {
  let curDate = new Date(data.currentDate);
  let template = " ";
  for (let event of obj) {
    let upDate = new Date(event.date);
    if (upDate >= curDate) {
      template += createUpCards(event);
    }

    element.innerHTML = template;
  }
}
function createUpCards(list) {
  return `<div class="card" style="width: 18rem">
        <img src=" ${list.image} " class="card-img-top" alt="Books"/>
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

addUpDiv(categories, $upChecks);
function addUpDiv(list, element) {
  list.forEach((cate) => (element.innerHTML += createUpDiv(cate)));
}
function createUpDiv(cate) {
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
$upChecks.addEventListener("change", (event) => {
  const searchValue = $upSearch.value.toLowerCase();
  const results = searchList(searchValue, events);
  const filtered = filterEventChecks(results);

  addUpCards(filtered, divContUp);
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
$upSearch.addEventListener("keyup", (event) => {
  event.preventDefault();
  const searchValue = $upSearch.value.toLowerCase();
  const results = searchList(searchValue, events);
  const filtered = filterEventChecks(results);
  addUpCards(filtered, divContUp);
});
