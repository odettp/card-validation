import validator from "./validator.js"; // Importamos el objeto validator

const formValidacion = document.getElementById("formValidacion"); // buscamos el form en el doc html atravaes del Id del form
// escuchamos en el form al darle click al boton, este genera un event submit
// va a ejecutar la funcion que trae el evento
formValidacion.addEventListener("submit", function (event) {
  // usamos preventdefault para evitar q la pagina se recargue
  event.preventDefault();

  // aqui se guarda en la variable creditcardnumber el valor del input
  const creditCardNumber = event.currentTarget.creditCardInput.value;

  // llamamos al objeto que dentro tiene un funcion llamada isvalid y se le pasa como parametro el numero de la tarjeta
  validator.isValid(creditCardNumber);
});

// Buscamos el input en el doc html atraves del Id
const creditCardInput = document.getElementById("creditCardInput");

// addEventlistener al id del input con el evento keyup
creditCardInput.addEventListener("keyup", function (event) {

  // Declaramos la variable, que genere un evento para acceder al elem html para recibir el valor
  const inputValue = event.target.value;

  // Seleccionamos el elem html con un Id
  // Obtuvimos el html del elemento, para reemplazar el valor
  document.getElementById("cardNumberSpan").innerHTML =
    validator.maskify(inputValue);
});
