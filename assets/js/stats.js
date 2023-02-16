// importar funciones
import {urlApi,
    } from '../module/functions.js';

let tbody1 = document.getElementById("tabla1")
let tbody2 = document.getElementById("tabla2")
let tbody3 = document.getElementById("tabla3")



async function jsonEvents(){
    try{
    var data = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
    data = await data.json()
    }catch(error){
    console.log(error)
    }


    let events = data.events
    let pastEvents = data.events.filter(event => event.assistance)
    let upcomingEvents = data.events.filter(event => event.estimate)

    //console.log(upcomingEvents);

    events.map(event => {
        event.porcentajeAsistencia = 100 * event.assistance / event.capacity//obtiene el total de asistencia
        event.ingresos = event.price * event.assistance// total recaudado por evento
    })
    pastEvents.map(event => {
        event.porcentajeAsistencia = 100 * event.assistance / event.capacity
        event.ingresos = parseInt(event.price) * parseInt (event.assistance)
    })

    upcomingEvents.map(event => {
        event.porcentajeAsistencia = 100 * event.estimate / event.capacity
        event.ingresos = parseInt(event.price) * parseInt (event.estimate)
    })


    let capEvents = [...events].sort((a,b) => a.capacity - b.capacity)
    let maxCapEvent = capEvents[capEvents.length-1]


    let percAssisEvent = [...pastEvents].sort((a,b) => a.porcentajeAsistencia - b.porcentajeAsistencia)
    let minPercAssi = percAssisEvent[0]
    let maxPercAssi = percAssisEvent[percAssisEvent.length-1]

    let filterCategory = new Set(pastEvents.map(event => event.category))
    filterCategory = [...filterCategory]
    //console.log(filterCategory);

    
    let dateCategory = [...new Set (events.map(event => event.category))]
    let upcomingCategory = [...new Set (upcomingEvents.map(event => event.category))]

    dateCategory.forEach(element => {
        let capacity = 0
        let assistance = 0
        let revenues = 0
        pastEvents.forEach(event => {
            if(event.category === element){
                capacity += event.capacity
                assistance += event.assistance
                revenues +=event.ingresos
            }
        })
        tbody3.innerHTML += `<tr>
                                <td>${element}</td>
                                <td>${revenues}</td>
                                <td>${Math.round(assistance * 100 / capacity)}%</td>
                            </tr>`
    });


    upcomingCategory.forEach(element => {
        let capacity = 0
        let estimate = 0
        let revenues = 0
        upcomingEvents.forEach(event => {
            if(event.category === element){
                capacity += event.capacity
                estimate += event.estimate
                revenues +=event.ingresos
            }
        })
        tbody2.innerHTML += `<tr>
                                <td>${element}</td>
                                <td>${revenues}</td>
                                <td>${Math.round(estimate * 100 / capacity)}%</td>
                            </tr>`
                        });
                        
        tbody1.innerHTML += `<tr>
                                <td>${maxPercAssi.name}: ${maxPercAssi.porcentajeAsistencia}%</td>
                                <td>${minPercAssi.name}: ${minPercAssi.porcentajeAsistencia}%</td>
                                <td>${maxCapEvent.name}: ${parseInt(maxCapEvent.capacity)}</td>
                            </tr>`
}

jsonEvents()
