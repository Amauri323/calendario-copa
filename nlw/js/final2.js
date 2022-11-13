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
  createCard("Jogo 15 - 18/12", "Domingo", 
  createGame("Vencedor jogo 13", "12:00", "Vencedor jogo 14") 
) + 

createCard("Jogo 16 - 14/12", "Sábado", 
createGame("Perdedor jogo 13", "12:00", "Perdedor jogo 14") 
) 