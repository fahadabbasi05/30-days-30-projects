


// function csvToJSON(csv) {
    // const arr = [ 

    //  {Name: Class, Subject: Percentage},
    //  {Fahad: 12, Science: 80},
    //  {Saad: 16, Computers: 78},
    //  {Rafay: 8, Business: 80},
    //  {Abrish: 4, Science: 90},
    //  {Sania: 16, Medical: 87}
    // ]

    // const result = arr.split("")
    // console.log(result)
    // TODO - a fn that converts the CSV to JSON (with labels)
// }
// csvToJSON();



// console.log(a)

// random number generator
function getRandomNumber() {
    // get the current time in milliseconds
    let time = new Date().getTime();
    // convert it to a string
    let string = time.toString();
    // get the last four digits
    let number = string.slice(-2);
    // return the number
    return number;
  }
const returnValue = getRandomNumber();
console.log(returnValue) 


// check password validation

function checkPassword(password) {
    // define the regular expression for the password criteria
    let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    // test the password against the regex
    let result = regex.test(password);
    // return true if the password is secure, false otherwise
    return result;
  }

  const res = checkPassword("Abba@128")
  console.log(res)
