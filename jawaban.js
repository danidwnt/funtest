/* ========== SOAL NOMOR SATU ========== */
let a = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let b = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
let c = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

let uniqueA = a.filter(onlyUnique);
let uniqueB = b.filter(onlyUnique);
let uniqueC = c.filter(onlyUnique);

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

uniqueA = uniqueA.filter((uniques, idx) => idx < 3);
uniqueB = uniqueB.filter((uniques, idx) => idx < 6);
uniqueC = uniqueC.filter((uniques, idx) => idx < 4);

console.log(uniqueA.length);
console.log(uniqueB.length);
console.log(uniqueC.length);

/* ========== SOAL NOMOR DUA ========== */

const testDua = (input) => {
  const soalArr = input.split(" ");
  const specChar = /[$&+,:;=@#|'<>.-^()%!]/;
  let count = 0;
  for (let i = 0; i < soalArr.length; i++) {
    if (soalArr[i].match(specChar)) {
      count++;
    }
  }

  return count;
};

const atwo = "Saat mengecat tembok, Agung dib_antu oleh Raihan.";
const btwo = "Berapa u(mur minimal[ untuk !mengurus ktp?";
const ctwo = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.";

console.log(testDua(a));
console.log(testDua(b));
console.log(testDua(c));