const prompt = require('prompt-sync');
const input = prompt();

let a = input("Digite o início: ");
let z = input("Digite o final: ");
if (a % 2 == 1) {
    a++;
}
for (i = a; i <= z; i=i+2) {
  console.log(i);
}


