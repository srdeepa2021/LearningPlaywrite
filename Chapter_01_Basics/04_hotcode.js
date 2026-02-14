console.log("Helloworld");

function add(a, b) {
    return a + b;
}
let result;
for (let i = 0; i < 100000; i++) {
    result = add(i, i+1);
}
console.log("After 100000 calls:",result);
