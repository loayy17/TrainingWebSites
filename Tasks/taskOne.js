const plans = [
  { zone: "A103", engineer: "Bill" },
  { zone: "B205", engineer: "Chad" },
  { zone: "B205", engineer: "Bill" },
  { zone: "A103", engineer: "Sue" },
  { zone: "B205", engineer: "Sue" },
  { zone: "C007", engineer: "Sue" },
];

function analyzeData(plansZone) {
  let analyzesArray = [];
  plansZone.forEach(({ zone, engineer }) => {
    if (analyzesArray.find((z) => z.zone === zone)) {
      let existedinArray = analyzesArray.find((z) => z.zone === zone);
      existedinArray.engineer.push(engineer);
      existedinArray.counter += 1;
    } else {
      analyzesArray.push({ zone: zone, engineer: [engineer], counter: 1 });
    }
  });
  return analyzesArray;
}

console.log(analyzeData(plans));
