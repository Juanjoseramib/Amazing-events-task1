export const urlApi = "https://mindhub-xj03.onrender.com/api/amazing";



//Function para agregar las cards
export function addCards(list, cont) {
  for (let element of list){
    cont.innerHTML += `<div class="card" style="width: 18rem">
    <img src=" ${element.image}" style="height: 12rem" class="card-img-top object-fit-cover" alt="Books"/>
    <div class="card-body d-flex flex-column justify-content-around">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.description}</p>
      <div class="card-foot d-flex align-items-baseline justify-content-around">
        <h6>
          <span>price</span> ${element.price}
        </h6>
        <a href="./assets/html/events.html?id=${element._id}" class="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  </div>`
  }
  }

//Function para crear los checkboxs y agregarlos
export function crearChecks(cate, cont) {
  for (let element of cate){
  cont.innerHTML += `<div class="form-check">
   <input
     class="form-check-input"
     type="checkbox"
    value="${element}"
     id="flexCheckDefault"
   />
   <label class="form-check-label" for="flexCheckDefault">
     ${element}
   </label>
 </div>`;}
}


// Funcion filtrar checks
export function filterEventChecks(list) {
  const checked = [
    ...document.querySelectorAll('input[type="checkbox"]:checked'),
  ].map((input) => input.value);
  
  if (checked.length === 0) {
    return list;
  }
  return list.filter((event) => checked.includes(event.category));
}
// Funcion search
export function searchList(searchValue, list) {
  return list.filter((event) => event.name.toLowerCase().includes(searchValue));
}


// Funcion de event.js
export function createEvents(list, cont) {
  cont.innerHTML = `<img src="${list.image}" alt="${list.category}" />
        <div>
          <h3 class="event-tittle">${list.name}</h3>
          <p><b>Description:</b><br/>${list.description}</p>
          <ul>
            <li><b>Date:</b> ${list.date}</li>
            <li><b>Category:</b> ${list.category}</li>
            <li><b>Place:</b> ${list.place}</li>
            <li><b>Capacity:</b> ${list.capacity}</li>
            <li><b>Assistance:</b> ${list.assistance}</li>
            <li><b>Price:</b> ${list.price}</li>
          </ul>
        </div>`;
}


export function addUpPastCards(list, cont) {
  for (let element of list){
    cont.innerHTML += `<div class="card" style="width: 18rem">
    <img src="${element.image}" style="height: 12rem" class="card-img-top object-fit-cover" alt="Books"/>
    <div class="card-body d-flex flex-column justify-content-around">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.description}</p>
      <div class="card-foot d-flex align-items-baseline justify-content-around">
        <h6>
          <span>price</span> ${element.price}
        </h6>
        <a href="/assets/html/events.html?id=${element._id}" class="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  </div>`
  }
  }