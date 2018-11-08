// Tugas 1
// var transformArrToLowerCase = (arr) => {
//    return arr.map(word => word.toLowerCase());
// }
var transformArrToLowerCase = (arr) => arr.map(word => word.toLowerCase());

console.log('Tugas 1 : ');
console.log('----------');

console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']

console.log('~~~~~~~~~~~~~~~~~~');

// Tugas 2
// var filterArrUnder10 = arr => {
//    // Filter setiap element array yang nilainya dibawah 10, sisakan yang 10 ke atas!
//  };
var filterArrUnder10 = arr => arr.filter(num => num < 10);
 
console.log('Tugas 2 : ')
console.log('----------');
console.log(filterArrUnder10([1, 5, 12, 15, 20])); // [12, 15, 20]

console.log('~~~~~~~~~~~~~~~~~~');

// Tugas 3 : 
// var reduceFindMaximum = arr => {
//    // kembalikan sebuah nilai yang mengandung angka terbesar dengan reduce!
//  }
var reduceFindMaximum = arr => {
   return arr.reduce((accumulator, currentValue) => {
      return currentValue > accumulator ? currentValue : accumulator;
   }, 0)
}

console.log('Tugas 3 : ')
console.log('----------');
console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9