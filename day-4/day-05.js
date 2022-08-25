/*
Author: Sheila Alfaro

Complete the function in the editor. It has one parameter: an array, a, of objects. Each object in the 
array has two integer properties denoted by x and y. The function must return a count of all such 
objects  in array  that satisfy .
*/

function getCount(objects) {
  return objects.filter((el) => el.x === el.y).length;
}
