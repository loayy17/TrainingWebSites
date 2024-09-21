var a = "loay alhindi";
var b = 50;
var c = false;
var d = ["alhindi", "loay", "lolo", "wajeeh"];
var f = "loay";
var e = undefined;
var g = null;
var nestedArray = ["loay", ["loay", "lolo"]];
var obj = {
    loay: "loay",
    age: 24,
    details: { name: "hindi", family: "hindi" },
};
function sumNumber() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (a, b) { return a + b; }, 0);
}
console.log(sumNumber(1, 2, 3, 4, 5, 6, 7, 8, 9));
