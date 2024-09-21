//Test 1 using arr.forEach
const arrayOfArray = [
  ["a", "c"],
  ["b", "d"],
  ["e", "f"],
  ["e", "f"],
  ["e", "f"],
];

function convertArrayToObjectTest1(arr) {
  let obj = {};
  arr.forEach((pair) => {
    obj[pair[0]] = pair[1];
  });
  return obj;
}

//Test 2 using from Entries
function convertArrayToObjectTest2(arr) {
    let obj = Object.fromEntries(arr)
    return obj
}
console.log(convertArrayToObjectTest1(arrayOfArray));
console.log("#".repeat(20))
console.log(convertArrayToObjectTest2(arrayOfArray));

