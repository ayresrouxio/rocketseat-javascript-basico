/*
  FALSY quando um valor é considerado false e TRUTHY quando
  é considerado verdadeiro em contextos onde um boolean é obrigatório
  (condicionais e loops).
*/

console.log("Exemplos de Falsy")

console.log(false ? "Verdadeiro" : "Falso")
console.log(0 ? "Verdadeiro" : "Falso")
console.log(-0 ? "Verdadeiro" : "Falso")
console.log("" ? "Verdadeiro" : "Falso")
console.log(null ? "Verdadeiro" : "Falso")
console.log(undefined ? "Verdadeiro" : "Falso")
console.log(NaN ? "Verdadeiro" : "Falso")

console.log("Exemplos de Truthy")

console.log(true ? "Verdadeiro" : "Falso")
console.log({} ? "Verdadeiro" : "Falso")
console.log([] ? "Verdadeiro" : "Falso")
console.log(1 ? "Verdadeiro" : "Falso")
console.log(3.2 ? "Verdadeiro" : "Falso")
console.log("A" ? "Verdadeiro" : "Falso")
console.log(" " ? "Verdadeiro" : "Falso")
console.log("false" ? "Verdadeiro" : "Falso")
console.log(-1 ? "Verdadeiro" : "Falso")
console.log(Infinity ? "Verdadeiro" : "Falso")
console.log(-Infinity ? "Verdadeiro" : "Falso")
