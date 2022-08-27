/*
Author: Sheila Alfaro
The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle 
to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.
Complete the function in the editor so that it does the following:

    -> Finds the initial values of s1 and s2 by plugging the area and perimeter values
    -> Creates an array consisting of s1 and s2 and sorts it in ascending order.
    -> Returns the sorted array.
*/

function sides(literals, ...expressions) {
  const [x, y] = expressions;
  const val = Math.sqrt(y ** 2 - 16 * x);
  return [(y - val) / 4, (y + val) / 4];
}
