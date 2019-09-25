const fs = require('fs');

/* fs.readFile('./keyboard.txt', 'utf8', (err, data) => {
    if (err) throw err;

    console.log(data);
}); */

const data = fs.readFileSync('./keyboard.txt', 'utf8');
console.log(data);