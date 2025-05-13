const fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

for (let i = 0; i < N.length; i++) {
  let n = Number(N[i].trim());
  n = 3 ** n;
    
  let string = Array.from({ length: n }, () => '-');
  if (n !== 1) {
    while (true) {
      if (n === 1) break;
      for (let j = 0; j < string.length; j += n) {
        if (string[j] === '-') {
          for (let k = j + n / 3; k < j + 2 * (n / 3); k++) {
            string[k] = ' ';
          }
        } else continue;
      }
      n /= 3;
    }
  }
  console.log(string.join(''));
}