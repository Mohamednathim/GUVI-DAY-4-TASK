// Convert all the strings to title caps in a string array
// Anonymous
let str = function (){
    let arr = "hello world"
    let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase)
}
str();

// IIFE
(function (str1) {
    str1 = str1.toLowerCase().split(' ');
    for (var i=0; i<str1.length; i++){
        str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
    }
    console.log(str1.join(' '));
})("hello world");

// Arrow
let arr1 = "hello world"
let titlecase = arr1.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
console.log(titlecase)