import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'
import isWeekend from './isweekend.js';
import isSatSun from './15f.js'



const today = dayjs();
let fivedaysfromnow = today.add('5',"day");
const fivedaysshow = fivedaysfromnow.format('MMMM D, dddd');
console.log("15A: " +fivedaysshow)

let oneMonthAfter = today.add('1', 'month');
console.log("15B: " + oneMonthAfter.format('MMMM D, dddd'));

let oneMonthBefore = today.subtract('1', 'month');
console.log("15C: " + oneMonthBefore.format('MMMM D, dddd'));

console.log("15D: "+ oneMonthAfter.format('dddd'))


let date = dayjs();
console.log(date.format('dddd, MMMM D'));
isWeekend(date);

date = dayjs().add(2, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));

 date = dayjs().add(4, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));

date = dayjs().add(6, 'day');
console.log(date.format('dddd, MMMM D'));
isWeekend(date);