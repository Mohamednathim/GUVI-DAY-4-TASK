// Return all the palindrome in an array
// Anonymous
let isPalindrome = function(){
    var myArray =['viicc','racecar','honda','malayalam'];
    var arr = myArray.filter(function(c,d){
        var palindrome = c.split('').reverse().join('');
        if (c == palindrome){
            console.log(myArray[d]);
        }
    });
}
isPalindrome();
// IIFE
(function () {
    var myArray =['viicc','racecar','honda','malayalam'];
    var arr = myArray.filter(function(c,d){
        var palindrome = c.split('').reverse().join('');
        if (c == palindrome) {
            console.log(myArray[d]);
        }
    });
})();
// Arrow
const myArray = ['viicc','racecar','honda','malayalam'];
const outputArr =[];
const findpalindrome = (value) => {
    const reverse = value.split('').reverse().join('');
    if(value==reverse){
        outputArr.push(value);
    }
}
for (let i=0;i<=myArray.length; i++){
    if(myArray[i]){
        findpalindrome(myArray[i])
    }
}
console.log(outputArr);