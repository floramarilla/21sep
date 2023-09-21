window.onload = init;
var petalos;
var valores;

function init() {
    petalos = document.getElementsByClassName("petalo");
    var ventana_actual = document.getElementById("intro");
    var ventana_juego = document.getElementById("juego");
    ventana_actual.className = "hidden";

    setTimeout(function() {
        ventana_juego.className = "animated fadeIn";
        asignarValores();
    }, 1000); // Agregamos un retraso de 1000 milisegundos (1 segundo) antes de mostrar la flor

    asignarEvento();
}

function asignarValores() {
    var numero_aleatorio = Math.round(Math.random() * 10);
    var moneda = numero_aleatorio > 5;
    valores = [];
    for (var i = 0; i < petalos.length; i++) {
        valores[i] = moneda;
        moneda = !moneda;
    }
}

function colorAleatorio() {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function asignarEvento() {
    for (var i = 0; i < petalos.length; i++) {
        petalos[i].addEventListener("click", function(event) {
            animar(event.target);
        });
    }
}

function animar(petalo) {
    var id_petalo = petalo.id;

    // Cambiar el color del centro a un color claro al hacer clic en un pétalo
    centro.style.backgroundColor = colorClaroAleatorio();
    validarJugada(id_petalo);
}

// Función para obtener un color claro aleatorio
function colorClaroAleatorio() {
    var r = Math.round(Math.random() * 128) + 128; // Rojo claro
    var g = Math.round(Math.random() * 128) + 128; // Verde claro
    var b = Math.round(Math.random() * 128) + 128; // Azul claro
    return "rgb(" + r + "," + g + "," + b + ")";
}

function validarJugada(petalo) {
    var indice = parseInt(petalo.substr(1));
    var mensajeAleatorio = obtenerMensajeAleatorio();
    texto_mensaje.innerHTML = mensajeAleatorio;
    mensaje.className = "mostrar animated fadeIn";
    setTimeout(() => {
        mensaje.className = "hidden";
    }, 1500);
}

// Función para obtener un mensaje aleatorio de la lista de mensajes
function obtenerMensajeAleatorio() {
    var indiceAleatorio = Math.floor(Math.random() * mensajes.length);
    return mensajes[indiceAleatorio];
}

var mensajes = [
    "Eres la luz de mi vida.",
    "Tu sonrisa ilumina mi día.",
    "Cada día a tu lado es un regalo.",
    "Eres increíblemente especial para mí.",
    "Tus ojos son el reflejo de tu belleza interior.",
    "No puedo dejar de pensar en ti.",
    "Tienes un corazón de oro.",
    "Eres la razón por la que sonrío.",
    "Cada momento contigo es precioso.",
    "Eres mi persona favorita en el mundo.",
    "Tu presencia hace que todo sea mejor.",
    "Eres un sueño hecho realidad.",
    "La vida es más hermosa contigo.",
    "Eres mi refugio en este mundo.",
    "Tu amor es un tesoro inmenso.",
    "Eres la melodía de mi corazón.",
    "Tus abrazos son mi lugar feliz.",
    "Eres mi fuente de inspiración.",
    "Tienes un corazón valiente y generoso.",
    "Eres el motivo de mis alegrías.",
    "Cada día contigo es una aventura emocionante.",
    "Eres la persona que llena de color mi vida.",
    "No importa dónde estemos, siempre estaremos juntos.",
    "Eres mi confidente y mi mejor amigo(a).",
    "Tus palabras son el bálsamo de mi alma.",
    "Cada día a tu lado es un capítulo en nuestra historia de amor.",
    "Eres la razón por la que creo en el destino.",
    "Tus sueños son mi inspiración.",
    "Eres el faro que guía mi camino.",
    "Tus besos son el mejor regalo que puedo recibir.",
    "Eres mi refugio en los días lluviosos.",
    "Tus abrazos son mi lugar seguro.",
    "Eres mi razón para sonreír cada mañana.",
    "Tus palabras son música para mis oídos.",
    "Eres mi sol en los días nublados.",
    "Tu amor es el mejor regalo que he recibido.",
    "Eres la estrella que ilumina mi noche más oscura.",
    "No importa el tiempo que pase, mi amor por ti siempre crece.",
    "Eres el sueño que nunca quiero despertar.",
    "Tus abrazos son mi refugio contra el mundo.",
	"Eres mi razón para creer en el amor verdadero.",
    "Tu amor es mi mayor fortuna.",
    "Cada día a tu lado es una aventura sin fin.",
    "Eres mi inspiración constante.",
    "Tus palabras son como poesía para mi corazón.",
    "Mi vida es mejor desde que llegaste.",
    "Eres el sueño que nunca quiero despertar.",
    "Tus besos son el elixir de la felicidad.",
    "No hay lugar en el mundo donde prefiera estar que a tu lado.",
    "Tienes el poder de hacer que mis preocupaciones desaparezcan.",
    "Eres la calma en medio de la tormenta.",
    "Nuestro amor es un viaje emocionante sin fin.",
    "Tus abrazos son mi refugio contra el mundo.",
    "Cada día te amo más que ayer y menos que mañana.",
    "Eres la respuesta a todas mis oraciones.",
    "Mi amor por ti no conoce límites.",
    "Eres el faro que guía mi camino.",
    "Tus ojos son el mapa de mi destino.",
    "Nuestro amor es un cuento que nunca termina.",
    "Eres mi sol en los días nublados."
];


