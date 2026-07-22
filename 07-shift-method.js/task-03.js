// Task 3: Shift Multiple Times

let months = [
  "JANUARY ",
  "FEBRUARY ",
  "MARCH ",
  "APRIL ",
  "MAY ",
  "JUNE ",
  "JULY ",
  "AUGUST ",
  "SEPTEMBER ",
  "OCTOBER ",
  "NOVEMBER",
  "DECEMBER"
];


while(months.length>1) {
  months.shift();
  console.log(months);
}