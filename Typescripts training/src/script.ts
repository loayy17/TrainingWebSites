let nameUser: string = "loay";
let arrayOne: string[] = ["a", "b", "c", "d", "e", "f"];
let nestedArray: (string | string[])[] = [
  "asd",
  "ddd",
  "qwe",
  "ert",
  ["zxc", "zxc", "ccc"],
];
let partOfArray: string[] = nestedArray.map((el) => {
  return el + " loay";
});
for (let i = 0; i < arrayOne.length; i++) {
  console.log(arrayOne[i]);
}
for (let i = 0; i < nestedArray.length; i++) {
  console.log(partOfArray[i]);
}

function mapArray(str1: string) {
  if (str1.length >= 2) {
    return str1.slice(0, 2);
  } else {
    return str1.slice(0, 1);
  }
}

console.log("#".repeat(20));
console.log(mapArray("l"));

// input and output function type annotation
let showMsg: boolean = true;
function showDetails(
  nameClient: string,
  age: number,
  salary: number,
  skills: string[]
): string {
  if (showMsg) {
    console.log(
      `The Name of Client is ${nameClient} and age is ${age} he take salary ${salary} his skills is `
    );
    for (let i = 0; i < skills.length; i++) {
      console.log(skills[i]);
    }
    return "You Have Access";
  }
  return "You Don`t have Access";
}

console.log(
  showDetails("loay", 24, 1000000000, ["Python", "Javascript", "ML", "RPA"])
);

// optional and default parameters
function showData(
  name: string = "Anonymous",
  age: number = 18,
  country?: string
) {
  return `${name} - ${age} - ${country || "Add Country in Function"}`;
}
console.log(showData("loay", undefined));

// rest parameter

function addAll(...nums: number[]): number {
  let result = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     result += nums[i];
  //   }
  nums.forEach((el) => (result += el));
  return result;
}
console.log("#".repeat(20));
console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, +true, +false));

// arrow function and Anonymous
const addTwoNum = function (num1: number, num2: number): number {
  return num1 + num2;
};

const arrowAdd = (num1: number, num2: number): number => num1 + num2;
console.log(arrowAdd(1, 2));
console.log(addTwoNum(1, 2));

//enum
enum Level {
  levelOne =2,
  levelTwo,
  levelThree =8,
  levelFour,
  levelFive,
}
console.log(Level);
