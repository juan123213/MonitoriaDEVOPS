function restaYMultiplicacion(a, b) {
    let resta = a - b;
    let multiplicacion = a * b;
  
    return {
      resta: resta,
      multiplicacion: multiplicacion
    };
  }
  
  // Ejemplo de uso:
  let resultadoOperaciones = restaYMultiplicacion(8, 3);
  console.log("Resta:", resultadoOperaciones.resta); // Esto imprimirá 5 en la consola
  console.log("Multiplicación:", resultadoOperaciones.multiplicacion); // Esto imprimirá 24 en la consola
  