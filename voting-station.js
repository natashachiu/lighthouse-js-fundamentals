const chooseStations = function (stations) {
  let goodStations = [];

  for (const station of stations) {
    if (
      station[1] >= 20 &&
      (station[2] === "school" || station[2] === "community centre")
    ) {
      goodStations.push(station[0]);
    }
  }
  return goodStations;
};

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

chooseStations(stations);

/* ------------------------------------------------------*/
const finalPosition = function (moves) {
  let position = [0, 0];

  for (const move of moves) {
    if (move === "north") {
      position[1] += 1;
    } else if (move === "east") {
      position[0] += 1;
    } else if (move === "south") {
      position[1] -= 1;
    } else if (move === "west") {
      position[0] -= 1;
    }
  }
  return position;
};

const moves = ["north", "north", "west", "west", "north", "east", "north"];
const position = finalPosition(moves);

/* ------------------------------------------------------*/
const ageCalculator = function (name, yearofBirth, currentYear) {
  return `${name} is ${currentYear - yearofBirth} years old.`;
};

/* ------------------------------------------------------*/
const howManyHundreds = function (num) {
  return Math.floor(num / 100);
};

/* ------------------------------------------------------*/
const calculateRectangleArea = function (length, width) {
  if (length < 0 || width < 0) return undefined;
  return length * width;
};
const calculateTriangleArea = function (base, height) {
  if (base < 0 || height < 0) return undefined;
  return (base * height) / 2;
};
const calculateCircleArea = function (radius) {
  if (radius < 0) return undefined;
  return Math.PI * radius ** 2;
};

console.log(calculateRectangleArea(10, 5)); // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
