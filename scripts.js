// If Else If

let hour = 11

/*
if (hour <= 12) {
  console.log("Bom dia")
} else if (hour > 18) {
  console.log("Boa noite")
} else if (hour > 12) {
  console.log("Boa tarde")
}
*/

if (hour <= 12) {
  console.log("Bom dia")
} else if (hour > 12 && hour <= 18) {
  console.log("Boa tarde")
} else {
  console.log("Boa noite")
}
