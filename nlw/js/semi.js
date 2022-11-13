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
  createCard("Jogo 13 - 13/12", "Terça", 
  createGame("Vencedor jogo 9", "16:00", "Vencedor jogo 10") 
  ) + 
  createCard("Jogo 14 - 14/12", "Quarta", 
  createGame("Vencedor jogo 11", "16:00", "Vencedor jogo 12") 
  ) 