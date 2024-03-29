const number = [2, 3, 4, 5, 6];
const output = [];

number.forEach(e => {
    const result = Math.pow(e, 2);
    output.push(result);
});
console.log(number);
// console.log(output);

// using map

// const result = number.map(element => {
//     return Math.pow(element, 2);
// });

const result = number.map(x => x * x);

console.log(result);

const smaller = number.filter(x => x <=5)
console.log(smaller);