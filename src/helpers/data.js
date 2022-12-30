const date = new Date();

let day = date.getDate();
let getDay = date.getDay();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let weekDay = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
const getMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export const currentDate = weekDay[getDay] + " " + day + " " + getMonth[month-1].slice(0, 3) + ", " + year;