const divEvent = document.getElementById("cont_event");
const params = new URLSearchParams(location.search);

const id = params.get("id");
const events = data.events.find((event) => event._id === id);

createEvent(events, divEvent);
function createEvent(event, container) {
  container.innerHTML = `<img src="${event.image}" alt="${event.category}" />
        <div>
          <h3 class="event-tittle">${event.name}</h3>
          <p><b>Description:</b><br/>${event.description}</p>
          <ul>
            <li><b>Date:</b> ${event.date}</li>
            <li><b>Category:</b> ${event.category}</li>
            <li><b>Place:</b> ${event.place}</li>
            <li><b>Capacity:</b> ${event.capacity}</li>
            <li><b>Assistance:</b> ${event.assistance}</li>
            <li><b>Price:</b> ${event.price}</li>
          </ul>
        </div>`;
}
