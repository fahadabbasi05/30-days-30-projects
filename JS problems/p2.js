// get days b/w two date

const dateOne = new Date("08/01/2023");
const dateTwo = new Date();
console.log(dateTwo)

const dateOneInMseconds = dateOne.getTime();
const dateTwoInMseconds = dateTwo.getTime();

const diff = dateTwoInMseconds - dateOneInMseconds;
const days = 24*60*60*1000;

const fullDays = Math.round(diff/days);
console.log(`so the days b/w 2 dates are ${fullDays}`)
console.log(diff)