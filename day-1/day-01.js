/*
Author: Sheila Alfaro

Complete the following functions in the editor below:

    -> getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
    -> getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.
*/

// Return a number denoting the rectangle's area.
function getArea(length, width) {
  let area;
  area = length * width;

  return area;
}

// Return a number denoting the perimeter of a rectangle.
function getPerimeter(length, width) {
  let perimeter;
  perimeter = 2 * length + 2 * width;

  return perimeter;
}
