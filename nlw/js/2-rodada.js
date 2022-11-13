function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("25/11" , "Sexta", createGame("wales", "07:00", "iran") +
    createGame("qatar", "10:00", "senegal") + 
    createGame("netherlands", "13:00", "ecuador") +
    createGame("england", "16:00", "united states")
  ) +
  createCard("26/11" , "Sábado", createGame("tunisia", "07:00", "australia") + 
    createGame("poland", "10:00", "saudi arabia") + 
    createGame("france", "13:00", "denmark") +
    createGame("argentina", "16:00", "mexico")
  ) +
  createCard("27/11" , "Domingo", createGame("japan", "07:00", "costa rica") + 
    createGame("belgium", "10:00", "morocco") + 
    createGame("croatia", "13:00", "canada") +
    createGame("spain", "16:00", "germany")
  ) +
  createCard("28/11" , "Segunda", createGame("cameroon", "07:00", "serbia") + 
    createGame("south korea", "10:00", "ghana") + 
    createGame("brazil", "13:00", "switzerland") +
    createGame("portugal", "16:00", "uruguai")
  ) 