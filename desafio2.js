const trabajo = 1500
const costoDomicilio = 800

let nroTrabajo = parseInt(prompt("Ingrese la cantidad de trabajos a realizar (El costo de cada trabajo es de $1500)."))
alert(`Selecciono ${nroTrabajo} trabajos`)
let domicilio = prompt("Quiere que el trabajo se realice a domicilio? (Costo = $800) Indique 'Si' o 'No'").toLowerCase();
alert(`Selecciono domicilio = ${domicilio}.`)

function costoTrabajo (nroTrabajo, domicilio){
    if(domicilio === "si"){
        let trabSiDomicilio = (nroTrabajo * trabajo) + costoDomicilio;
        return trabSiDomicilio         
    } else if (domicilio === "no"){
        let trabNoDomicilio = nroTrabajo * trabajo        
        return trabNoDomicilio
    } else if (domicilio !== "si" && domicilio !== "no"){
        alert("Ingrese una respuesta valida para domicilio. Recargue para reintentar")
    }
}
let costoFinal = costoTrabajo (nroTrabajo, domicilio);
console.log(`El costo es de ${costoFinal}`)
