let tiempo = 0;
let activo = false;
let intervalo = null;
let timeoutInactividad = null;

const tiempoElemento = document.getElementById("tiempo");
const estadoElemento = document.getElementById("estado");

function iniciarCronometro() {
    intervalo = setInterval(() => {
        if(activo){
            tiempo++;
            tiempoElemento.textContent = tiempo;
        }
    }, 1000);
    
}

function actividadDetectada() {
    activo = true;
    estadoElemento.textContent = "Activo";

    clearTimeout(timeoutInactividad);

    timeoutInactividad = setTimeout(() => {
        activo = false;
        estadoElemento.textContent = "Inactivo";
}, 10000)
    
}

document.addEventListener("mousemove", actividadDetectada);
document.addEventListener("keydown", actividadDetectada);

iniciarCronometro();

let inicio = Date.now();

setInterval(() => {
  if (activo) {
    let ahora = Date.now();
    tiempo = Math.floor((ahora - inicio) / 1000);
  }
}, 1000);