/*
Author: Sheila Alfaro

Implement a function named factorial that has one parameter: an integer, n. 
It must return the value of n! (i.e., n factorial).
*/

function factorial(n) {
  let num = 1;
  while (n != 0) {
    num *= n;
    n--;
  }
  return num;
}
