let list = data;

let template = "";

function pastCards(list) {
  let curDate = Number(list.currentDate.slice(0, -6));
  const divContPast = document.getElementById("cont_pastcards");
  let template = " ";
  for (let element of list.events) {
    let pastDate = Number(element.date.slice(0, -6));

    if (pastDate < curDate) {
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
  }
  divContPast.innerHTML = template;
}

pastCards(list);
