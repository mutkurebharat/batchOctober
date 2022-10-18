var date = new Date();

console.log(date);

// Two ways to create date object

// string

// var date1 = new Date("month date, year hour:seconds:miloseconds")

// var date1 = new Date("december 25, 2021 11:30:54");
// console.log("date1 = ", date1);

//number

// var date2 = new Date(year, month, day, hours, minutes, seconds, miliseconds);

// var date2 = new Date(2021, 11, 25, 11, 30, 45, 33);

// console.log(date2);

// date Object Methods

// var date3 = new Date(2021, 11, 25, 11, 30, 45, 33);

// console.log("year = ", date3.getFullYear());
// console.log("month =", date3.getMonth());
// console.log("Date = ", date3.getDate());
// console.log("Day = ", date3.getDay());
// console.log("Hours = ", date3.getHours());
// console.log("Minutes = ", date3.getMinutes());
// console.log("Seconds = ", date3.getSeconds());
// console.log("Miliseconds = ", date3.getMilliseconds());

//Write Function to get month name from month number

// function getMonthNumberFromMonthName(number) {
//     var monthNames = ["Jan", "Feb", "Mar", "Apr","May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
//     if(number < 0 || number > 11){
//         return "Your Number should be between 0 to 11"
//     } else {
//         return monthNames[number]
//     }
// }

// console.log("getMonthNumberFromMonthName = ", getMonthNumberFromMonthName(-50));

// function getDayNameFromDayNumber(number) {
//   var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
//   if (number < 0 || number > 6) {
//     return "Your Number should be between 0 to 6";
//   } else {
//     return weekDays[number];
//   }
// }

// console.log("getDayNameFromDayNumber = ", getDayNameFromDayNumber(-16));