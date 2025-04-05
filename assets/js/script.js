document.addEventListener("DOMContentLoaded", function() {
    let imagen = document.getElementById("imagen");

    imagen.addEventListener("click", function() {
        if (imagen.style.border) {
            imagen.style.border = ""; // Quita el borde
        } else {
            imagen.style.border = "2px solid red"; // Agrega el borde rojo
        }
    });
});


function contarStickers() {
    let sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
    let sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
    let sticker3 = parseInt(document.getElementById("sticker3").value) || 0;

    let total = sticker1 + sticker2 + sticker3;
    let resultado = document.getElementById("resultado");

    if (total <= 10) {
        resultado.textContent = `Llevas ${total} stickers`;
    } else {
        resultado.textContent = "Llevas demasiados stickers";
    }
}


// Función para llenar los selects con opciones del 1 al 9
function llenarSelects() {
    for (let i = 1; i <= 9; i++) {
        let option = `<option value="${i}">${i}</option>`;
        document.getElementById("digito1").innerHTML += option;
        document.getElementById("digito2").innerHTML += option;
        document.getElementById("digito3").innerHTML += option;
    }
}

// Función para verificar la contraseña
function verificarPassword() {
    let digito1 = document.getElementById("digito1").value;
    let digito2 = document.getElementById("digito2").value;
    let digito3 = document.getElementById("digito3").value;
    
    let password = digito1 + digito2 + digito3;
    let resultado = document.getElementById("resultado-numeros");

    if (password === "911" || password === "714") {
        resultado.textContent = "Password correcto";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Password incorrecto";
        resultado.style.color = "red";
    }
}

// Llamar a la función para llenar los selects cuando cargue la página
document.addEventListener("DOMContentLoaded", llenarSelects);
