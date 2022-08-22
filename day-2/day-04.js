/*
Author: Sheila Alfaro
(1) First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
(2) Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in s.
*/

function vowelsAndConsonants(s) {
  let consonants = [];
  let vowels = [];

  s.split("").map((el) =>
    "aeiou".split("").includes(el) ? vowels.push(el) : consonants.push(el)
  );
  vowels.concat(consonants).map((el) => console.log(el));
}
