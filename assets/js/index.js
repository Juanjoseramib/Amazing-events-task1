// importar la data
let list = data;

// crear cards

function crearCards(list) {
  const divcont = document.getElementById("cont_cards");
  let template = " ";

  for (let element of list.events) {
    template += `<div class="card" style="width: 18rem">
        <img src=" ${element.image} " class="card-img-top" alt="Books" />
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.description}</p>
          <div class="card-foot d-flex align-items-center justify-content-around">
            <h6>
              <span>price</span> ${element.price}
            </h6>
            <a href="./assets/html/events.html" class="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>`;
  }
  divcont.innerHTML = template;
}
crearCards(list);
