const guests = document.querySelector("ul")

const newGuest = document.createElement("li")
newGuest.classList.add("guest")

const guestName = document.createElement("span")

guestName.textContent = "Diego"

// Adiciona após o último filho.
// newGuest.append(guestName)

// É mais simples que o append e aceita apenas um argumento.
newGuest.appendChild(guestName)

guests.prepend(newGuest)
