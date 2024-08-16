// função para por a imagem do fighter na div vazia
//char 1
function selection_1 (fighter) {
    document.querySelector('#fighter_1').innerHTML = `<img src="images/${fighter}.jpg"/>`
}
//char 2
function selection_2 (fighter) {
    document.querySelector('#fighter_2').innerHTML = `<img src="images/${fighter}.jpg"/>`
}

// Definindo os personagens 
let char1 = ''
let char2 = ''

//char 1
document.querySelector('#img-fighter-gun').addEventListener('click', () => {
    selection_1 ('gun')
    char1 = createGun('Raven Noir')
} )

document.querySelector('#img-fighter-box').addEventListener('click', () => {
    selection_1 ('box')
    char1 = createBox('Zara "The Hurricane" Monroe')
} )

document.querySelector('#img-fighter-samurai').addEventListener('click', () => {
    selection_1 ('samurai')
    char1 = createSamurai('Kenshiro Takeda')
} )

document.querySelector('#img-fighter-karate').addEventListener('click', () => {
    selection_1 ('karate')
    char1 = createKarate('Aiko Tachibana')
} )

//char 2
document.querySelector('#img-fighter-gun-2').addEventListener('click', () => {
    selection_2 ('gun')
    char2 = createGun('Raven Noir')
} )

document.querySelector('#img-fighter-box-2').addEventListener('click', () => {
    selection_2 ('box')
    char2 = createBox('Zara "The Hurricane" Monroe')
} )

document.querySelector('#img-fighter-samurai-2').addEventListener('click', () => {
    selection_2 ('samurai')
    char2 = createSamurai('Kenshiro Takeda')
} )

document.querySelector('#img-fighter-karate-2').addEventListener('click', () => {
    selection_2 ('karate')
    char2 = createKarate('Aiko Tachibana')
} )

// button play
document.querySelector('.button').addEventListener('click', () => {play()})

function play() {
    let char1victory = 0
    let char2victory = 0
    //life
  if (char1.life > char2.life) {
    char1victory++
  } else if (char1.life < char2.life) {
    char2victory++
  } 
  //defense
  if (char1.defense > char2.defense) {
    char1victory++
  } else if (char1.defense < char2.defense) {
    char2victory++
  }
  //agility
  if (char1.agility > char2.agility) {
    char1victory++
  } else if (char1.agility < char2.agility) {
    char2victory++
  }
  //attack
  if (char1.attack > char2.attack) {
    char1victory++
  } else if (char1.attack < char2.attack) {
    char2victory++
  }
  //magic damage
  if (char1.magic_damage > char2.magic_damage) {
    char1victory++
  } else if (char1.magic_damage < char2.magic_damage) {
    char2victory++
  }
  //
  if (char1victory === char2victory) {
    char1victory *= Math.random()
    char2victory *= Math.random()
  }
  //
   if (char1victory > char2victory) {
    document.querySelector('#result-text').innerHTML = `${char1.name} venceu`
  } else if (char1victory < char2victory) {
    document.querySelector('#result-text').innerHTML = `${char2.name} venceu`
  } else {
    document.querySelector('#result-text').innerHTML = `Houve um empate, selecione personagens diferentes.`
  }
} 

//modal 1
let modal = document.querySelector("dialog") 
function OpenModal1() {
  modal.showModal()
  if (char1 === '') {
    
  } else {
    modal.innerHTML = `<h3>${char1.name}</h3> 
    <h6>${char1.lore}</h6>
    <br>
    <h4>Atributos</h4>
  
    <p>
      vida:${char1.life}
      <br> defesa:${char1.defense}
      <br> agilidade: ${char1.agility}
      <br> ataque: ${char1.attack}
      <br> dano mágico: ${char1.magic_damage}
    </p>`
  }
}
//modal 2
function OpenModal2() {
  modal.showModal()
  if (char2 === '') {
    
  } else {
    modal.innerHTML = `<h3>${char2.name}</h3> 
    <h6>${char2.lore}</h6>
    <h4>Atributos</h4>
    <p>
      <br> vida:${char2.life}
      <br> defesa:${char2.defense}
      <br> agilidade: ${char2.agility}
      <br> ataque: ${char2.attack}
      <br> dano mágico: ${char2.magic_damage}
    </p>`
  }
}

