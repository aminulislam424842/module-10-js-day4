// Replace the First & Last Element

let months = [
  "",
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

months[0]="JANUARY";
months[months.length-1]="Holiday";

console.log(months);