/*
2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
Contoh:
const sentence = "Saya sangat senang mengerjakan soal algoritma"

longest(sentence) 
// mengerjakan: 11 character
*/

function longest(sentence) {
  let words = sentence.split(" ");
  let longestWord = words.reduce(function (longest, current) {
    return longest.length > current.length ? longest : current;
  }, "");

  return longestWord;
}

console.log(longest("Saya sangat senang mengerjakan soal algoritma")); // Output: mengerjakan
