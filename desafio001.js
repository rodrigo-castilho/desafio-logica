//Variaveis
let nomesHerois = ["Feiticeira-Escarlate"];
let heroisXp = ["10000"];

let nivelDoHeroi;

if (heroisXp < 1000) {
  nivelDoHeroi = "Ferro";
} else if (heroisXp >= 1001 && heroisXp <= 2000) {
  nivelDoHeroi = "Bronze";
} else if (heroisXp >= 2001 && heroisXp <= 5000) {
  nivelDoHeroi = "Prata";
} else if (heroisXp >= 5001 && heroisXp <= 7000) {
  nivelDoHeroi = "Ouro";
} else if (heroisXp >= 7001 && heroisXp <= 8000) {
  nivelDoHeroi = "Platina";
} else if (heroisXp >= 8001 && heroisXp <= 9000) {
  nivelDoHeroi = "Ascendente";
} else if (heroisXp >= 9001 && heroisXp <= 10000) {
  nivelDoHeroi = "Imortal";
} else if (heroisXp >= 10001) {
  nivelDoHeroi = "Radiante";
}

console.log(`O Herói de nome ${nomesHerois} está no nível de ${nivelDoHeroi}!`);
