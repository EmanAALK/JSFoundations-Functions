function greet(name) {
  console.log(`Hello ${name}`);
}
greet("Eman");
//_________________________________________

function isOdd(n) {
  if (n % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
isOdd(7);
//-------------------------------------------
function oddsSmallerThan(n) {
  if (isOdd(n)) {
    return (n - 1) / 2;
  } else {
    return n / 2;
  }
}
oddsSmallerThan(3);
//______________________________________________
function squareOrDouble(n) {
  if (isOdd(n)) {
    return n * n;
  } else {
    return n * 2;
  }
}
squareOrDouble(3);

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
