function counter() {
  let i = 0;
  return function incrementPlus(value) {
    return (i += value);
  };
}

let increment = counter();

console.log(increment);
console.log(increment(1));
console.log(increment(1));
console.log(increment(1));
console.log(increment(1));
console.log(increment(1));
