// 1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

let str = "NEGIE1";
let letters = str.replace(/[0-9]/g, '').split('').reverse().join('');
let digits = str.replace(/\D/g, '');

console.log(letters + digits); // Output: EIGEN1