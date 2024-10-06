class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'realizou um ataque';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplos de uso da classe
const heroi1 = new Heroi('Arthur', 30, 'guerreiro');
heroi1.atacar(); // O guerreiro atacou usando espada

const heroi2 = new Heroi('Merlin', 150, 'mago');
heroi2.atacar(); // O mago atacou usando magia

const heroi3 = new Heroi('Bruce', 25, 'monge');
heroi3.atacar(); // O monge atacou usando artes marciais

const heroi4 = new Heroi('Naruto', 17, 'ninja');
heroi4.atacar(); // O ninja atacou usando shuriken
