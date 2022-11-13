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
  createGame("1º G A", "12:00", "2º G B") +
  createGame("1º G C", "16:00", "2º G D") 
  ) + 
  createCard("Jogo 3 e 4- 04/12", "Domingo", 
  createGame("1º G D", "12:00", "2º G C") +
  createGame("1º G B", "16:00", "2º G A")
  ) + 
  createCard("Jogo 5 3 6 - 05/12", "Segunda", 
  createGame("1º G E", "12:00", "2º G F") +
  createGame("1º G G", "16:00", "2º G H")
  ) +
  createCard("Jogo 7 e 8 - 06/12", "Terça", 
  createGame("1º G F", "12:00", "2º G E") +
  createGame("1º G H", "16:00", "2º G G")
  )