class Character {
    life = 0
    defense = 0
    agility = 0
    attack = 0
    magic_damage = 0
    constructor (name) {
        this.name = name
    }
}

class Gun extends Character {
    constructor(name){
        super(name)
        life = 14
        defense = 6
        agility = 36
        attack = 28
        magic_damage = 16
    }
}

class Box extends Character {
    constructor(name){
        super(name)
        life = 30
        defense = 23
        agility = 18
        attack = 25
        magic_damage = 3
    }
}

class Samurai extends Character {
    constructor(name){
        super(name)
        life = 25
        defense = 20
        agility = 25
        attack = 10
        magic_damage = 15
    }
}

class Karate extends Character {
    constructor(name){
        super(name)
        life = 24
        defense = 25
        agility = 25
        attack = 25
        magic_damage = 1
    }
}