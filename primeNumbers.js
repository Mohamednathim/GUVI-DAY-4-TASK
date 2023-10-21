// Return all the prime numbers in array
// Anonymous
let prime = function (arr) {
    return arr.filter(function(n){
        for (let i=2;i<n;i++) {
            if (n%i === 0) return false;
        }
        return n>=1;
    });
};
console.log(prime([1,2,3,4,5,6,7,8,9]));
// IIFE
(function (){
    var primeNum = [1,2,3,4,5,6,7,8,9]
    primeNum = primeNum.filter(function(number){
        for(var i=2;i <= Math.sqrt(number);i++){
            if (number%i === 0) return false;
        }
        return true;
    });
    console.log(primeNum);
})();
// Arrow
let n = 10;
let num =(n) =>
{
    for(let i=1;i<=n; i++)
    {
        let flag=0;
        for(let j=2;j<i; j++)
        {
            if(i%j==0)
            {
                flag=1;
                break;
            }
        }
        if(flag==0)
        {
            console.log(i);
        }
    }
}
console.log(num(n));