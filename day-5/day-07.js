/*
Author: Sheila Alfaro
Complete the function in the editor. It has one parameter: an array, . It must iterate through the array performing one of the following actions on each element:

    -> If the element is even, multiply the element by .
    -> If the element is odd, multiply the element by .
    -> The function must then return the modified array.
*/

function modifyArray(nums) {
  return nums.map((el) => (el % 2 === 0 ? el * 2 : el * 3));
}
