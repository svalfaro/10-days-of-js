/*
Author: Sheila Alfaro

Locked stub code in the editor reads the following input from stdin: The first line contains an integer, d, denoting 
the number of dates to check. Each line i of the d subsequent lines contains a date in MM/DD/YYYY format; each 
date denotes some dateString that is passed to the function.
*/

function getDayName(dateString) {
  let dayName;

  switch (new Date(dateString).getDay()) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
  }
  return dayName;
}
