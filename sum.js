// Sum of all numbers in an array
// Anonymous
let arr = [1,2,3,4];
let num = function () {
    let sum = arr.reduce(function(a,b){
        return a+b;
    });
    console.log(sum);
}
num();
//IIFE
(function () {
    let sum = [1,2,3].reduce(add,4);
    function add(accumulator,a){
        return accumulator + a;
    }
    console.log(sum);
})();

// Arrow
let arr1 = [1,2,3,4];
let sum = 0;
arr1.forEach(n => sum += n);
console.log(sum);