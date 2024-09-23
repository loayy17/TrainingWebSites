function closure() {
  let counter = 0;
  return function incrementOne() {
    counter += 1;
    return counter;
  };
}

(async (value) => {
  for (let i = 1; i <= 7; i++) {
    await new Promise((resolve) => {
      setTimeout(() => {
        document.getElementById(i.toString()).style.visibility = "visible";
        document.getElementById(i.toString()).textContent += ` From IIFO Pass Parameter = ${value} Closure = ${counter()}`;
        value += 1;
        resolve();
      }, 1000);
    });
  }
})(1);
let counter = closure();
// console.log(Promise.all());
