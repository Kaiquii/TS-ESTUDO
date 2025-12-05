/* Crie uma função que recebe um número e retorna true se for positivo */

function isPositive(numero1: number) {
  if (numero1 >= 0) {
    return true;
  } else {
    return false;
  }
}

const verificar = isPositive(1);
console.log(verificar);
