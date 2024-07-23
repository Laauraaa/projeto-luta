// função para clicar nas imagens e preencer as div's do pvp area
// primeiro vou definir uma variavel qualquer como = 0, quando o usuário clicar no primeiro personagem essa variavel vai receber 1, é quando essa variavel for 1 o segundo click vai direcionar o segundo personagem para a segunda div
// forEach como funciona : EXEMPLO 
//[Nome do array].forEach(function(item){
//if (item.age > 18){
//console.log(blablabla)}
//}
//) Dentro dessa função, image representa o elemento atual.



/*let clickCount = 0;

function select_characters() {
    clickCount++;

        if (clickCount === 1) {
            document.getElementById('fighter_1').innerHTML = `<img src="${this.src}" alt="${this.alt}" />`;

        } else if (clickCount === 2) {
            document.getElementById('fighter_2').innerHTML = `<img src="${this.src}" alt="${this.alt}" />`;


        }
}

document.querySelectorAll('.image-click').forEach(image => {image.addEventListener('click', select_characters)}); */

function selection (fighter) {
    console.log('voce escolheu', fighter)
    document.querySelector('#fighter_1').innerHTML = `<img src="images/${fighter}.jpg"/>`
}

// Definindo os personagens 
let char1 = ''
let char2 = ''

document.querySelector('#img-fighter-gun').addEventListener('click', () => {
    selection ('gun')
    char1 = 'gun'
} )

document.querySelector('#img-fighter-box').addEventListener('click', () => {
    selection ('box')
    char1 = 'box'
} )

document.querySelector('#img-fighter-samurai').addEventListener('click', () => {
    selection ('samurai')
    char1 = 'samurai'
} )

document.querySelector('#img-fighter-karate').addEventListener('click', () => {
    selection ('karate')
    char1 = 'karate'
} )