const defaultCharacter = {
    name:'',
    life:0,
    defense:0,
    agility:0,
    attack:0,
    magic_damage:0
}


const createGun = (name) => {
    return {
        ...defaultCharacter,
        name,
        life:14,
        defense:6,
        agility:36,
        attack:28,
        magic_damage:16,
        lore: 'Raven Noir é um assassino de elite que opera nas sombras do submundo, movido por um desejo insaciável de vingança. Tendo perdido tudo para um sindicato criminoso quando jovem, ele dedicou sua vida ao treinamento implacável, aprimorando suas habilidades com armas e técnicas furtivas. Agora, ele caça seus alvos com precisão mortal, sempre um passo à frente de seus inimigos. Seus olhos frios e penetrantes refletem um passado sombrio, e ele nunca para até que sua missão esteja cumprida.'
    }
}

const createBox = (name) =>  {
    return {
        ...defaultCharacter,
        name,
        life:30,
        defense:23,
        agility:18,
        attack:25,
        magic_damage:3,
        lore: 'Zara Monroe sempre foi movida por sua paixão por desafios e competição. Desde jovem, ela se destacou em várias disciplinas atléticas, mas foi no boxe que encontrou seu verdadeiro chamado. Treinando em uma academia renomada, Zara rapidamente subiu ao topo, conhecida por sua incrível força e agilidade. Seu apelido, "The Hurricane", surgiu de sua capacidade de desferir uma sequência de golpes com a velocidade e a potência de uma tempestade. Agora, como campeã mundial, Zara busca continuamente superar seus próprios limites, acreditando que o verdadeiro adversário a ser vencido é sempre ela mesma'
    }
}

const createSamurai = (name) => {
    return {
        ...defaultCharacter,
        name,
        life:25,
        defense:20,
        agility:25,
        attack:10,
        magic_damage:15,
        lore: 'Kenshiro Takeda é o último descendente de uma longa linhagem de samurais. Crescido em um pequeno vilarejo, ele foi treinado nas artes do kenjutsu desde a infância, honrando o legado de seus ancestrais. Quando seu lar foi destruído por um senhor da guerra corrupto, Kenshiro partiu em uma jornada de vingança e redenção, empunhando a espada de seu pai. Ele luta para restaurar a honra de sua família e trazer justiça ao mundo, guiado pelo código do bushido'
    }
}

const createKarate = (name) => {
    return {
        ...defaultCharacter,
        name,
        life:24,
        defense:25,
        agility:25,
        attack:25,
        magic_damage:1,
        lore: 'Aiko Tachibana é uma prodígio das artes marciais que foi treinada desde a infância em um dojo tradicional. Apesar de sua aparência jovial, ela possui uma força e determinação incomparáveis, sempre pronta para defender os mais fracos. Aiko jurou proteger sua cidade natal contra qualquer ameaça, seja ela vinda de criminosos ou de forças sobrenaturais. Com um coração puro e uma vontade inquebrável, ela se tornou uma heroína local, inspirando todos ao seu redor.'
    }
}