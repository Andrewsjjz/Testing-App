export const Fizzbuzz = (number) => {

  if (typeof number !== "number")
    throw new Error("No es un numero lo que es ingresando");

  if (Number.isNaN(number))
    throw new Error("No es un numero lo que es ingresando");

  const multiplos = { 3: "FIZZ", 5: "BUZZ" };
  let msg = '';

  Object
  .entries(multiplos)
  .forEach(([multiplicar, word]) => {

    if (number % multiplicar === 0) msg += word;
    
  });

  return msg === '' ? number : msg;

};


