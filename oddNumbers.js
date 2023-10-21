// Print odd numbers in array
// Anonymous function
let arr =[0,1,2,3,4,5,6,7,8,9];
let odd = function (){
    let odd = arr.filter(num => num%2==1)
    console.log(odd)
}
odd();
// IIFE
let arr1 = [0,1,2,3,4,5,6,7,8,9];
(function (){
    let odd = arr1.filter(num => num%2==1);
})();
odd();

// Arrow
let arr2 = [0,1,2,3,4,5,6,7,8,9];
let Odd = arr2.filter(num => num%2==1);
console.log(Odd);

