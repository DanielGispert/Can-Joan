const formulario = document.querySelector("#formulario")
formulario.addEventListener( "submit", validarFormulario) 
function validarFormulario (e){
    e.preventDefault();
    const Name = document.querySelector("#ReservName").value
    const Date = document.querySelector("#ReservName").value
    const Time = document.querySelector("#ReservTime").value
    const People = document.querySelector("#NumberPeople").value

    //num rando between 0 i 15 per la taula escollida
    let table = Number((Math.random() * 15).toFixed(0));
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Hello, your reservation at number ${Name} of ${People} people on the day ${Date} on ${Time} is confirmed, thanks for counting on us. Table ${table} reserved.`

}


    
