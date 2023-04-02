const validator = {
  isValid: (creditCardNumber) => {
    // Paso 1. split() convierte un cadena de texto(string) a un arreglo
    const separarCadena = creditCardNumber.split(""); // const separarCandena = "".split("");

    // Paso 2. Usa el metodo reverse() para invertir el nuevo arreglo creado
    const invertirArreglo = separarCadena.reverse(); // const invertirArreglo

    // Paso 3. Utilizamos el metodo map para recorrer los elementos de un arreglo y modificarlo
    const recorrerArreglo = invertirArreglo.map((num, index) => {
      // Paso 4. Utilizamos la condicion if para verificar si la posicion del arreglo es par o inpar
      if ((index + 1) % 2 === 0) {
        // Paso 5. Utilizamos la variable para tranformar de numero a string
        const transformaNumber = (num * 2).toString();

        // Paso 6. Retornamos los num pares multiplicados x2
        return transformaNumber;
      } else {
        // 7. Retornamos los num impares
        return num;
      }
    });

    // Utilizamos el metodo map para recorrer los elementos de un arreglo y modificarlo
    const sumarCifra = recorrerArreglo.map((num, index) => {
      // Utilizamos la condicion if para verificar si la posicion del arreglo es par o inpar
      // Y verificamos si el num es mayor o igual a 10
      if ((index + 1) % 2 === 0 && num >= 10) {
        // Si se cumple la condicion utilizamos un split para trasformar el num a un arreglo
        // Luego usamos reduce para sumar los digitos dentro del arreglo
        const total = num.split("").reduce((a, b) => Number(a) + Number(b), 0);
        return total;
      } else {
        return num;
      }
    });
    // Creamos la variable de sumaTotal
    // Utilizamos reduce para sumar los digitos dentro del arreglo
    const sumaTotal = sumarCifra.reduce((a, b) => Number(a) + Number(b), 0);
    if (sumaTotal % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  // Definimos la funcion maskify para tomar el num de la tarjeta
  maskify: (creditCardNumber) => {
    // Si la longitud del número de la tarjeta es menor que 4, la función retorna el número entero
    if (creditCardNumber.length < 4) {
      return creditCardNumber;
    }
    // utilizamos el método substr(-4) y lo almacenamos en la variable last4Characters
    // Para obtener los ultimos 4 caracteres del num de la tarjeta
    const last4Characters = creditCardNumber.substr(-4);
    // Obtuvimos los caracteres, excepto los ultimos 4
    //Se reemplazan todos los digitos con "#"
    const maskingCharacters = creditCardNumber
      .substr(0, creditCardNumber.length - 4)
      .replace(/./g, "#");
    //la función devuelve una cadena que concatena los caracteres con los últimos 4 caracteres sin cambios
    return `${maskingCharacters}${last4Characters}`;
  },
};

export default validator;
