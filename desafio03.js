class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      console.log(`o ${this.tipo} atacou usando ${this.getAtaque()}`)
    }
  
    getAtaque() {
      switch (this.tipo) {
        case "mago":
          return "magia";
        case "guerreiro":
          return "espada";
        case "monge":
          return "artes marciais";
        case "ninja":
          return "shuriken";
        default:
          return "ataque desconhecido";
      }
    }
  }
  
  const mago = new Heroi("Gandalf", 1000, "mago");
  mago.atacar(); // Impressão: o mago atacou usando magia
  
  const guerreiro = new Heroi("Aragorn", 87, "guerreiro");
  guerreiro.atacar(); // Impressão: o guerreiro atacou usando espada
  
  const monge = new Heroi("Bruce Lee", 72, "monge");
  monge.atacar(); // Impressão: o monge atacou usando artes marciais
  
  const ninja = new Heroi("Naruto", 17, "ninja");
  ninja.atacar(); // Impressão: o ninja atacou usando shuriken