
function createGame(player1, player2, player3, player4, pais1, pais2, pais3, pais4) {
  return `
   
  <li>  
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    <img src="./assets/icon-${player3}.svg" alt="Bandeira da ${player3}" />
    <img src="./assets/icon-${player4}.svg" alt="Bandeira da ${player4}" />
  </li>
   
  `
}

let delay = -0.4;
function createCard(name, info, games,) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${name} <span>${info}</span></h2>
        <li>
            ${games}
        </li>
    </div>
  `
}

  document.querySelector("#cards").innerHTML =
    createCard("Grupo A" , "", 
    createGame("qatar", 
        "senegal", 
        "ecuador", 
        "netherlands")
    ) + 
    createCard("Grupo B" , "", 
    createGame("england", 
        "iran", 
        "united states", 
        "wales")
    ) 


