const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
};

const returnSayHello = function (name) {
  return "Hello, " + name;
};

console.log(returnSayHello("Caliban"));
console.log(returnSayHello("Miranda"));
console.log(returnSayHello("Ferdinand"));
