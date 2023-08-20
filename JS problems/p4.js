
// use quadatic formula solve the quadatic value

function calcQuadraticValue (a,b,c) {

    var result1 = (((-1*b) + Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
    var result2 = (((-1*b) - Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));

    return result1 + " " + result2;
}

console.log(calcQuadraticValue(2,3,1));