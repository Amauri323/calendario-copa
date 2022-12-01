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
function createCard(info, day, games) {
  delay = delay + 0.4;
  return `
    
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${info} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
    
  `
}

document.querySelector("#cards").innerHTML =
  createCard("Jogo 1 e 2 - 03/12", "Sábado", 
  createGame("netherlands", "12:00", "united states") +
  createGame("argentina", "16:00", "australia") 
  ) + 
  createCard("Jogo 3 e 4- 04/12", "Domingo", 
  createGame("france", "12:00", "poland") +
  createGame("england", "16:00", "senegal")
  ) + 
  createCard("Jogo 5 3 6 - 05/12", "Segunda", 
  createGame("japan", "12:00", "croatia") +
  createGame("1º G G", "16:00", "2º G H")
  ) +
  createCard("Jogo 7 e 8 - 06/12", "Terça", 
  createGame("morocco", "12:00", "spain") +
  createGame("1º G H", "16:00", "2º G G")
  )