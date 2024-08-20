//Ejercicio 1
//Acorde con la edad de una persona, imprime el año en que nació. Por ejemplo "Naciste en 1985" utilizando funciones.
function Variable1(edad) {
    let Variable4 = new Date().getFullYear();
    let Variable3 = Variable4 - edad;
    return Variable3;
  }
  function Variable2(edad) {
    let Variable3 = Variable1(edad);
    console.log(`naciste en el año ${Variable3}`);
  }
  Variable2(21);
  
// ---------------------------------------------------------
//Crea una Funcion que tome un valor de grados celsius y la pase a grados fahrenheit.
function conversor(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  let celsius = 36;
  let fahrenheit = conversor(celsius);
  console.log(`"${celsius}°C" son "${fahrenheit}°F"`);
 
  //--------------------------------------------------------
  //Hay un artículo en promoción, si el cliente está entre los 20 primeros clientes, tiene 30% de descuento y entre los primeros 50 clientes, un 10% de descuento. Haga una función que permita saber cuánto descuento tiene el cliente, según el orden en que llegó.
  function VariableA(Variableb) {
    if (Variableb <= 20) {
      return 30;
    } else if (Variableb <= 50) {
      return 10;
    } else {
      return 0;
    }
  }
  let Variableb =20;
  let Variablec = VariableA(Variableb);
  console.log(`El cliente que tiene el puesto ${Variableb} tiene un descuento de ${Variablec}%`);