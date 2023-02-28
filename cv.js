var iconoemail = document.getElementById("icono-email");
console.log(iconoemail);
var iconotelefono = document.getElementById("icono-telefono");
var iconodireccion = document.getElementById("icono-direccion");
var iconofecha = document.getElementById("icono-fecha");
var iconocivil = document.getElementById("icono-civil");
var infoemail = document.getElementById("info-email");
var infotelefono = document.getElementById("info-telefono");
var infodireccion = document.getElementById("info-direccion");
var infofecha = document.getElementById("info-fecha");
var infocivil = document.getElementById("info-civil");
function boton(parametro1,parametro2) {
    if (parametro1.style.display != "none") {
        parametro1.style.display = "none";
        parametro2.style.display = "inline-block";
    }else {
parametro1.style.display = "inline-block";
parametro2.style.display = "none";
}
}