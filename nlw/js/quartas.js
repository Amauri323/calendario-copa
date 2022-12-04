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
  createCard("Jogo 9 e 10 - 09/12", "Sexta", 
  createGame("Vencedor jogo 5", "12:00", "Vencedor jogo 6") +
  createGame("netherlands", "16:00", "argentina") 
  ) + 
  createCard("Jogo 11 e 12 - 10/12", "Sábado", 
  createGame("Vencedor jogo 7", "12:00", "Vencedor jogo 8") +
  createGame("france", "16:00", "england")
  ) 