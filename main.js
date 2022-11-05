function createGames(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="${player2}">
  </li>
  `
}

let delay = -0.4

function creatCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>`
}




document.querySelector('#cards').innerHTML = 

 creatCard("24/11", "quinta",
  createGames("brazil", "16:00", "serbia") 
 ) +
 creatCard("28/11", "segunda", 
  createGames("brazil", "13:00", "switzerland") + createGames("portugal", "16:00", "uruguai") 
 ) +
 creatCard("02/12", "sexta",
  createGames("brazil", "16:00", "camaroon")
 )

