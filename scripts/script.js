// função para por a imagem do fighter na div vazia
//char 1
function selection_1 (fighter) {
    console.log('voce escolheu', fighter)
    document.querySelector('#fighter_1').innerHTML = `<img src="images/${fighter}.jpg"/>`
}
//char 2
function selection_2 (fighter) {
    console.log('voce escolheu', fighter)
    document.querySelector('#fighter_2').innerHTML = `<img src="images/${fighter}.jpg"/>`
}

// Definindo os personagens 
let char1 = ''
let char2 = ''

//char 1
document.querySelector('#img-fighter-gun').addEventListener('click', () => {
    selection_1 ('gun')
    char1 = 'gun'
} )

document.querySelector('#img-fighter-box').addEventListener('click', () => {
    selection_1 ('box')
    char1 = 'box'
} )

document.querySelector('#img-fighter-samurai').addEventListener('click', () => {
    selection_1 ('samurai')
    char1 = 'samurai'
} )

document.querySelector('#img-fighter-karate').addEventListener('click', () => {
    selection_1 ('karate')
    char1 = 'karate'
} )

//char 2
document.querySelector('#img-fighter-gun-2').addEventListener('click', () => {
    selection_2 ('gun')
    char2 = 'gun'
} )

document.querySelector('#img-fighter-box-2').addEventListener('click', () => {
    selection_2 ('box')
    char2 = 'box'
} )

document.querySelector('#img-fighter-samurai-2').addEventListener('click', () => {
    selection_2 ('samurai')
    char2 = 'samurai'
} )

document.querySelector('#img-fighter-karate-2').addEventListener('click', () => {
    selection_2 ('karate')
    char2 = 'karate'
} )


