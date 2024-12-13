// Visualizar o conteúdo do document.
// console.log(document)

// Obter o title da página.
console.log(document.title)

// Acessar o elemento pelo ID (seletor ID).
const guest = document.getElementById("guest-1")
console.log(guest)

// Mostra as propriedades do objeto.
console.dir(guest)

// Acessar elemento com class (seletor class).
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)

// Exibir o primeiro elemento da lista.
console.log(guestsByClass.item(0))
console.log(guestsByClass[1])

// Selecionar lista de elementos pela tag.
const guestsByTag = document.getElementsByTagName("li")
console.log(guestsByTag)
