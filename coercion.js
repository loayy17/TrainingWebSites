/*coercion Javascripts*/
// string
console.log("a" + 5); // a5
console.log("a" - 5); // NaN
console.log("a" * 5); // NaN
console.log("a" / 5); //NaN
console.log("a" % 5); // NaN
console.log("#".repeat(20)); //repeat #
console.log("1" + 5); // 15
console.log("1" - 5); // -4
console.log("1" * 5); // 5
console.log("1" / 5); // 0.2
console.log("1" % 5); // 1
console.log("#".repeat(20)); //repeat #
console.log(" " + 5); //  " 5"
console.log(" " - 5); // -5
console.log(" " * 5); // 0
console.log(" " / 5); // 0
console.log(" " % 5); // 0
console.log("#".repeat(20)); //repeat #
console.log("5" + 10); // '510'
console.log(5 + "10"); // '510'
console.log("5" + true); // '5true'
console.log("5" + null); // '5null'

/* Boolean */
Boolean(0); // false
Boolean(1); // true
Boolean(""); // false
Boolean("string"); // true
Boolean(null); // false
Boolean(undefined); // false
Boolean([]); // true
Boolean({}); // true

/*array */
[1, 2, 3] + " is an array"; // '1,2,3 is an array'
[1, 2] + [3, 4]; // '1,23,4' (arrays coerced to strings before concatenation)
console.log("######".repeat(50));
/* NaN */
console.log(0 / 0); // NaN
console.log(Math.sqrt(-1)); // NaN
console.log(NaN == NaN); // false
console.log(NaN === NaN); //false
console.log(isNaN(new Number())); // false
console.log(isNaN(Number)); // true
console.log(isNaN("34a")); // true
console.log(isNaN(undefined)); // false
console.log(NaN + "4"); // NaN4
console.log(isNaN(Number())); // false
console.log(isNaN(String())); // false
console.log(isNaN(function () {})); // true
console.log(Number.isNaN(function () {})); // false
console.log([1, 2, 3] + [1, 2, 3, 4]); // 1,2,31,2,3,4
console.log(isNaN([1])); // false
console.log(isNaN([])); // false
console.log(isNaN({ a: 3 })); // true
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = array.reduce((p, c) => p + c);

let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
];
let filteredArray = nestedArray.filter((el) => el[0] + el[1] >= 15);

let mapArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squareMApArray = mapArray.map((el) => Math.pow(el, 2));
let stringSplice = "loayalhindi test";
console.log(total);
console.log(nestedArray);
console.log(filteredArray);
console.log(squareMApArray);
array.splice(0,1,1,1,1,1,1,1) // edit in origin
console.log(array)
let sliceArray = array.slice(2,8) //start , end not Included   not effect in original
console.log(sliceArray) 

let includeArray = [11,2,3,4,56,1,89,8,7,9879,87]
function removeElement(num){
    if (includeArray.includes(num)){
        console.log(`The Number is in Array index for it = ${includeArray.indexOf(num)}`)
    } else {
        console.log(`The element not in Array`)
    }

}
removeElement(9879)
