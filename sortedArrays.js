// return median of two sorted arrays of same size
// Anonymous
let arr1 =[1,12,15,26,38,24];
let arr2 =[2,13,17,30,45,47];
let median = function(a,b) {
    let c = [...a, ...b].sort((a,b) => a-b);
    const half = c.length / 2 | 0;
    if (c.length%2){
        return c[half];
    }else {
        return (c[half] + c[half - 1]) / 2;
    }
}
console.log(median(arr1,arr2));
//IIFE
(function(){
    let arr1 =[1,12,15,26,38,24];
    let arr2 =[2,13,17,30,45,47];
    let c =[...arr1, ...arr2].sort((arr1, arr2) => arr1-arr2);
    const half = c.length /2 |0;
    if (c.length%2){
        console.log(c[half]);
    }else {
        console.log((c[half] + c[half -1] ) /2);
    }
})();