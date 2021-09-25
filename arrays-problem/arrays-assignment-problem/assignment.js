//Create an array of numbers (of your choice) and perform three array
//operations on it: filter for numbers greater than 5,

const ramArray = [10,9,8,7,6,5,4];
const ramArrayFiltered = ramArray.filter(x => x >5);
console.log(ramArrayFiltered);

//map every number to an object which holds the number on some property (e.g. "num") and
//reduce the array to a single number (the multiplication of all numbers).

let a ={"num1":ramArray[0], "num2":ramArray[1],"num3":ramArray[2],"num4":ramArray[3],"num5":ramArray[4],"num6":ramArray[5],"num7":ramArray[6]};
console.log(a);
let b = ramArray.reduce((x,y) => x*y,1);
console.log(b);

//Write a function ("findMax") which executes some logic that finds the
//largest number in a list of arguments. Pass the array from task 1 split
//up into multiple arguments to that function

const arg1 = ramArray.slice(0,1);
const arg2 = ramArray.slice(1,2);
const arg3 = ramArray.slice(2,3);
const arg4 = ramArray.slice(3,4);
const arg5 = ramArray.slice(4,5);
const arg6 = ramArray.slice(5,6);
const arg7 = ramArray.slice(6,7);
const args = [arg1,arg2,arg3,arg4,arg5,arg6,arg7];
//const ValueMin = Math.min(arg1,arg2,arg3,arg4,arg5,arg6,arg7); 
function findMax(arg1,arg2,arg3,arg4,arg5,arg6,arg7){
    maximum = Math.max(arg1,arg2,arg3,arg4,arg5,arg6,arg7);
    minimum = Math.min(arg1,arg2,arg3,arg4,arg5,arg6,arg7);
    return [maximum,minimum];

}
//alert(valueMax);
//const valueMax=findMax(arg1,arg2,arg3,arg4,arg5,arg6,arg7);
//console.log(valueMax);

//Tweak the "findMax" function such that it finds both the minimum andmaximum and returns those as an array. Then use destructuring when
//calling the function to store the two results in separate constants.

const valueMaxArray=findMax(arg1,arg2,arg3,arg4,arg5,arg6,arg7);
valueMax = valueMaxArray[0];
valueMin = valueMaxArray[1];
console.log(valueMax,valueMin);

/* Create a list (and possibly some surrounding logic) where you ensure that NO duplicate 
values can be added. Use whichever approach seems appropriate to you.
*/

let list = [25,35,45,35,25,15,55,65,65];
const noDuplicate = new Set(list);
console.log(noDuplicate);
