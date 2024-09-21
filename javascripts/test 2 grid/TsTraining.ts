let a: string = "loay alhindi";
let b: number = 50;
let c: boolean = false;
let d: string[] = ["alhindi", "loay", "lolo", "wajeeh"];
let f: number | string = "loay";
let e: undefined = undefined;
let g: null = null;
let nestedArray: (string | string[])[] = ["loay", ["loay", "lolo"]];
let obj: {
  loay: string;
  age: number;
  details: { name: string; family: string };
} = {
  loay: "loay",
  age: 24,
  details: { name: "hindi", family: "hindi" },
};

function sumNumber(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b,0);
}
console.log(sumNumber(1, 2, 3, 4, 5, 6, 7, 8, 9));

type Button = {
  one:string,
  two:number,
  three:string
}
type ButtonTwo = Button & {
  four :string,
  five :string
}
type ButtonGeneral =Button & ButtonTwo & {
  six:string,
  seven : string
}
let test :Button = {one:"aaaa",two:40,three:"sssss"}
function printTest(btns :ButtonGeneral){
  console.log(btns.one)
  console.log(btns.two)
  console.log(btns.three)
  console.log(btns)
}
printTest({one:"1aaa",two:2,three:"3321321",four:"four",five:"lo",six:"jjjj",seven:"qweasd"})

interface User {
  id:number,
  name:string,
  password:string,
}
let loay:User ={
  name : "loay",
  id : 1,
  password:"lolo"
}
console.log(loay)