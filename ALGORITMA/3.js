/*
3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

CONTOH:
INPUT = ['xc', 'dz', 'bbb', 'dz']  
QUERY = ['bbb', 'ac', 'dz']  

OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT
*/

let INPUT = ["xc", "dz", "bbb", "dz"];
let QUERY = ["bbb", "ac", "dz"];
let count = QUERY.map(function (q) {
  return INPUT.filter(function (i) {
    return i === q;
  }).length;
});

console.log(count); // Output [1, 0, 2]
