class Pet {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        return `${this.name} is eating`
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age)
        this.livesLeft = livesLeft
    }
    meow() {
        return "MEEOWW"
    }
}
class Dog extends Pet {
    bark() {
        return "WOOF"
    }
    eat() {
        return `${this.name} plays with food`
    }
}

const snow = new Cat('Snow', 5)
const bosco = new Dog('Bosco', 8)