function swap(variableA, variableB) {
  let supporVariable = variableA;
  variableA = variableB;

  return {
    variableA: variableA,
    variableB: supporVariable,
  };
}

let a = "red";
let b = "blue";

console.log("Before function, a =", a, ",b =", b);

let swapedVariables = swap(a, b);
a = swapedVariables.variableA;
b = swapedVariables.variableB;

console.log("After function, a =", a, ",b =", b);
