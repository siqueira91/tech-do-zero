function calcularSaldo(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    return saldo;
  }
  
  function calcularNivel(saldo) {
    let nivel = "";
  
    if (saldo < 10) {
      nivel = "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
      nivel = "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
      nivel = "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
      nivel = "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
      nivel = "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
  
    return nivel;
  }
  
  const vitorias = parseInt(prompt("Digite a quantidade de vitórias: "));
  const derrotas = parseInt(prompt("Digite a quantidade de derrotas: "));
  
  const saldo = calcularSaldo(vitorias, derrotas);
  const nivel = calcularNivel(saldo);
  
  alert(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);