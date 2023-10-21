// Romove duplicates from an array
// Anonymous
let findDuplicates = function () {
    const myArray = [1,1,2,3,4,4,5]
    let duplicates =[]
    const tempArray =[...myArray].sort()
    for (let i = 0; i<tempArray.length; i++){
        if (tempArray[i + 1] === tempArray[i]) {
            duplicates.push(tempArray[i])
        }
    }
    console.log(duplicates);
}
findDuplicates();
// IIFE
(function () {
    let numbers =[1,1,2,3,4,4,5];
    let duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
    console.log(duplicates);
})();
