/*
Author: Sheila Alfaro
Declare a constant variable, PI, and assign it the value Math.PI. You will not pass this challenge unless the 
variable is declared as a constant and named PI (uppercase). Read a number, r, denoting the radius of a circle from stdin.
Use PI and r to calculate the area and perimeter of a circle having radius .
Print area as the first line of output and print perimeter as the second line of output.
*/

function main() {
  // the Readline module provides a way of reading a datastream, one line at a time.
  let r = parseFloat(readLine());
  const PI = Math.PI;

  // Print the area of the circle:
  console.log(PI * r * r);

  // Print the perimeter of the circle:
  console.log(PI * 2 * r);
  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}
