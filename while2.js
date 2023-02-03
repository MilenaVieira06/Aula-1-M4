const prompt = require("prompt-sync");
const input = prompt();

let palavra = input("Importe uma palavra:");

while (palavra !== "sair") {
  palavra = input("Informe uma palavra:");
}
