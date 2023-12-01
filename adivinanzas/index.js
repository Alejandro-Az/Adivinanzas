const adivinanzas = [
    {
      pregunta: "Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera.",
      respuesta: "La pera"
    },
    {
      pregunta: "Tiene ojos y no puede ver, tiene agua y no puede beber. ¿Qué es?",
      respuesta: "El coco"
    },
    {
      pregunta: "Es redonda como el sol, siempre está en el reloj. ¿Qué es?",
      respuesta: "La luna"
    },
    {
      pregunta: "Cuanto más calientes, más frescas parecemos. ¿Qué somos?",
      respuesta: "Las tortillas"
    },
    {
      pregunta: "Se usa para escribir, pero no es una pluma. ¿Qué es?",
      respuesta: "El lápiz"
    },
    {
      pregunta: "Es blanco por dentro, verde por fuera. Si quieres que te lo diga, espera.",
      respuesta: "El plátano"
    },
    {
      pregunta: "Tiene dientes y no come, tiene cabeza y no es hombre. ¿Qué es?",
      respuesta: "El ajo"
    },
    {
      pregunta: "Vuela sin alas, llora sin ojos. ¿Qué es?",
      respuesta: "La nube"
    },
    {
      pregunta: "Tiene patas y no camina, tiene cabeza y no es adivina. ¿Qué es?",
      respuesta: "La mesa"
    },
    {
      pregunta: "Aunque soy blanco y redondo, en el cielo no me encuentro. ¿Qué soy?",
      respuesta: "El pan"
    }
  ];

  let adivinanzaAleatoria = adivinanzas[Math.floor(Math.random() * adivinanzas.length)];
  let respuesta = document.getElementById('respuesta');
  let textoContador = document.getElementById('contador');
  let contador = 0;

  function mostrarAdivinanza() {
    let h1Adivinanza = document.getElementById('adivinanza');
    adivinanzaAleatoria = adivinanzas[Math.floor(Math.random() * adivinanzas.length)];

    console.log(adivinanzaAleatoria.pregunta);
    console.log(adivinanzaAleatoria.respuesta);
    h1Adivinanza.textContent = adivinanzaAleatoria.pregunta;
  }

  function cargarRespuesta() {
    let valorRespuesta = respuesta.value;

    if(valorRespuesta != "") {
        if(valorRespuesta.toLowerCase().trim() == adivinanzaAleatoria.respuesta.toLowerCase()) {
            alert("Ganaste!");
            mostrarAdivinanza();
            respuesta.value = "";
            contador++;
            textoContador.textContent = contador;
        } else {
            alert("Fallaste!");
            respuesta.value = "";
        }
    } else {
        alert("Escribe algo!");
    }
  }

  respuesta.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        cargarRespuesta();
    }
  });