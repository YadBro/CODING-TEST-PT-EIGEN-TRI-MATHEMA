/*
4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:

Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

diagonal pertama = 1 + 5 + 9 = 15 
diagonal kedua = 0 + 5 + 7 = 12 

maka hasilnya adalah 15 - 12 = 3
*/

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
const diag1 = matrix.reduce((acc, curr, idx) => acc + curr[idx], 0);
const diag2 = matrix.reduce(
  (acc, curr, idx) => acc + curr[matrix.length - 1 - idx],
  0
);
const result = diag1 - diag2;

console.log(result); // Output: 3
