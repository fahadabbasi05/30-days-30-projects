// random number generator
function getRandomNumber() {
    // change in ms
    let time = new Date().getTime();
    
    let string = time.toString();
    // remove
    let number = string.slice(-2);

    return number;
  }
const returnValue = getRandomNumber();
console.log(returnValue)