/*
Author: Sheila Alfaro

Create a Polygon class that has the following properties:

    -> A constructor that takes an array of integer values describing the lengths of the polygon's sides.
    -> A perimeter() method that returns the polygon's perimeter.

Note: The perimeter method must be lowercase and spelled correctly.
*/

class Polygon {
  constructor(arr) {
    this.arr = arr;
  }

  perimeter() {
    return this.arr.reduce((a, b) => a + b);
  }
}
