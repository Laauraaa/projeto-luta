// função para clicar nas imagens e preencer as div's do pvp area
// primeiro vou definir uma variavel qualquer como = 0, quando o usuário clicar no primeiro personagem essa variavel vai receber 1, é quando essa variavel for 1 o segundo click vai direcionar o segundo personagem para a segunda div

let clickCount = 0;

        document.querySelectorAll('.clickable-image').forEach(image => {
            image.addEventListener('click', function() {
                clickCount++;
                if (clickCount === 1) {
                    document.getElementById('fighter_1').innerHTML = `<img src="${this.src}" alt="${this.alt}" />`;
                } else if (clickCount === 2) {
                    document.getElementById('fighter_2').innerHTML = `<img src="${this.src}" alt="${this.alt}" />`;
                }
            });
        });