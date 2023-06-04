function smartGarbage(trash, bins) {
  if (trash === "recycling") {
    bins.recycling++;
  } else if (trash === "waste") {
    bins.waste++;
  } else if (trash === "compost") {
    bins.compost++;
  }

  return bins;
}

smartGarbage("recycling", {
  waste: 4,
  recycling: 2,
  compost: 5,
});

function carPassing(cars, speed) {
  cars.push({
    time: Date.now(),
    speed: speed,
  });
  return cars;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35,
  },
];

const speed = 38;

// console.log(carPassing(cars, speed));

function judgeVegetable(vegetables, metric) {
  let best = 0;
  let winner = "";
  for (veg of vegetables) {
    for (key in veg) {
      if (metric === key) {
        if (veg[key] >= best) {
          best = veg[key];
          winner = veg.submitter;
        }
      }
    }
  }
  return winner;
}

let vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

let metric = "redness";

console.log(judgeVegetable(vegetables, metric));

vegetables = [
  {
    submitter: "A",
    d: 5,
  },
  {
    submitter: "B",
    d: 10,
  },
  {
    submitter: "C",
    d: 25,
  },
];
metric = "d";
let result = judgeVegetable(vegetables, metric);
console.log(result);
