// function filter(numbers) {
//     let result = [];
//     for (const number in numbers) {
//         if (number % 2 != 0)
//         {
//             result.push(number);
//         }
//     }
//     return result;
// }
// let numbers = [1,2,3,6,7,9];
// console.log(filter(numbers));

/*Function CallBack*/
// function isOdd(number) {
//     return number % 2 != 0;
// }

// function isEven(number) {
//     return number % 2 == 0;
// }

// function filter(numbers,func)
// {
//     let result = [];
//     for(const number in numbers)
//     if(func(number))
//     {
//         result.push(number);
//     }
//     return result;
// }
// let numbers = [2,3,5,6,7,8,9,11];
// console.log("Odd numbers are:-"+filter(numbers,isOdd));
// console.log("Even Numbers are:-"+filter(numbers,isEven))

/*Callback by using Anonymous function*/

function filter(numbers, callback) {
    let result = [];
    for (const number in numbers) {
        if (callback(number)) {
            result.push(number);
        }
    }
    return result;
}
let numbers = [2,5,3,6,7,9];
// let oddNumbers = filter(numbers, function (number) {
//     return number % 2 != 0;
// });
let oddNumbers = filter(numbers,(number) => number%2 !=0);
console.log(oddNumbers);


