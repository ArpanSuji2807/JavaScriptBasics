// let a;
// let b;
// function test (a,b){
//     console.log("Arpan",a,b);
// }
// test(2,3);

// const abc = (a,b) => {
//     console.log(a+b);
// }
// abc(5,2);

// //ES6===>>>>

// let first_Name = "Arpan";
// let second_Name = "Suji";
// console.log(`Your Name is ${first_Name} ${second_Name}`);

var Multi_Line_Strings

// let data = `Hi, My Name is Arpan.
//                 I am From Darjeeling,
//                 which is in West Bengal.
//                 It is a very beautiful place`
// console.log(data);

var Spread_Operator;

// var arr1 = [0,1,2];
// var arr2 = [3,4,5];
// var arr3 = [...arr1,...arr2];
// //Equate To
// console.log(arr3);
// //OR
// var arr4 = arr1.concat(arr2);
// console.log(arr4);

// var obj1 = {
//     foo:"bar",
//     x:42,
// };

// var obj2 = {
//     foo:"baz",
//     y:13,
// };
// var cloneObj = {...obj2};
// console.log(cloneObj);

// var mergeObj = {...obj1,...obj2};
// console.log(mergeObj);

// var destructing_assignmnt

// let arr = [10,20];
// let [a,b] = arr;
// console.log(a);

// let [a,b,...rest] = [10,20,30,40,50,60];
// console.log(a);
// console.log(b);
// console.log(rest);

// const foo = ['One','Two','Three'];
// const [red,yellow,green] = foo;
// console.log(red);
// console.log(yellow);
// console.log(green);

// const user = {
//     number:42,
//     isVerified: true
// };
// const{number,isVerified} = user;
// console.log(number);
// console.log(isVerified);

var String_Includes;

// let text = "Hello world, Welcome to the Universe";
// if(text.includes("World")){
//     console.log("Yes I am Here!!");
// }
// else{
//     console.log("No I am not");
// }

var index_Operator;
//console.log(Math.pow(2,10));
//console.log(2 ** 10);

var ObjKey;
//Object.keys()

// var obj = {
//     foo:"bar",
//     baz:42
// };
//console.log(Object.keys(obj));
//console.log(Object.values(obj));

var arrayOperations;

//let fruits = ["Apple","Banana","Mango"];
// console.log(fruits.length);

//let first = fruits[0]
//console.log(first);

//let last = fruits[fruits.length - 1]
//console.log(last);

// fruits.forEach((data,index) => {
//     console.log(data,index);
// })

//fruits.push("Orange");
//console.log("New Fruit added",fruits);

//fruits.pop();
//console.log("Removed",fruits);

//fruits.unshift("Strawberry");
//console.log("Added",fruits);

//fruits.shift();
//console.log("Removed",fruits);

// let pos = fruits.indexOf('Banana');
// console.log("Index",pos);

// let n = 2;
// let removeItem = fruits.splice(pos,n);
// console.log("After Splice",fruits);

// const fruits = ["Apple", "Mango", "Strawberry", "Grapes"];
// fruits.splice(2, 1, "Banana");
// console.log(fruits);

// let text = "Hello Hi"
// let afterSlice = text.slice(0,4);
// console.log(afterSlice)

// let text = "Hello Hi";
// const afterSlice = text.split(" ");
// console.log(afterSlice[0]);

//const fruits = ["Apple", "Mango"];
//const fruits1 = ["Banana"];
//const fruits2 = ["Grapes"];

//const newFruitsArr = fruits.concat(fruits1,fruits2);
//console.log(newFruitsArr);

//const newFruitsArr = [...fruits,...fruits1,...fruits2];
//console.log(newFruitsArr);

//let afterCov = fruits.join(" ");
//let afterCov = fruits.toString();
//console.log(afterCov);

var map;

// const cities = ["Delhi","Kolkata","Bangalore"];
// let output = cities.map((data) => data.toUpperCase());
// console.log(output);

let number = [45,22,66,12,8,15];
// let num = number.map((no) => no*2);
// console.log(num);

let filterOutput = number.filter((no) =>no <20);
console.log(filterOutput);