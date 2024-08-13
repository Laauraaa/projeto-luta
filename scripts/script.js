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
    char1 = createGun('gun')
} )

document.querySelector('#img-fighter-box').addEventListener('click', () => {
    selection_1 ('box')
    char1 = createBox('Box')
} )

document.querySelector('#img-fighter-samurai').addEventListener('click', () => {
    selection_1 ('samurai')
    char1 = createSamurai('samurai')
} )

document.querySelector('#img-fighter-karate').addEventListener('click', () => {
    selection_1 ('karate')
    char1 = createKarate('karate')
} )

//char 2
document.querySelector('#img-fighter-gun-2').addEventListener('click', () => {
    selection_2 ('gun')
    char2 = createGun('gun')
} )

document.querySelector('#img-fighter-box-2').addEventListener('click', () => {
    selection_2 ('box')
    char2 = createBox('box')
} )

document.querySelector('#img-fighter-samurai-2').addEventListener('click', () => {
    selection_2 ('samurai')
    char2 = createSamurai('samurai')
} )

document.querySelector('#img-fighter-karate-2').addEventListener('click', () => {
    selection_2 ('karate')
    char2 = createKarate('karate')
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
/*function points(char1victory, char2victory){
    console.log(char1victory)
    console.log(char2victory)
}*/


