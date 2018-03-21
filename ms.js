/**
 * Middle-square PRNG
 *
 * This is my custom implemenation using recursion.
 */

const ms = (seed = 1243, counter = 1, final = 0) => {
  if (seed < 1000) { return 0; }

  if (final == 0) {
    final = seed * seed;
  } else {
    final = final * final;
  }

  final = final.toString().substring(1, 5);

  if (counter > 0) {
    return ms(seed, counter - 1, final);
  } else {
    return final;
  }
}

/**
 * Same as above, but using for loop
 */
const msfor = (seed = 1243, counter = 1, final = 0) => {
  if (seed < 1000) { return 0; }

  for (let c = counter; c >= 0; c--) {
    if (final == 0) {
      final = seed * seed;
    } else {
      final = final * final;
    }
    final = final.toString().substring(1, 5);
  }

  return final;
}

console.log('ms(1243, 1, 0)');
console.log(ms(1243, 1, 0));
console.log('ms(1243, 2, 0)');
console.log(ms(1243, 2, 0));
console.log('ms(1243, 3, 0)');
console.log(ms(1243, 3, 0));
console.log('ms(1111, 2, 0)');
console.log(ms(11111, 2, 0));
console.log('ms(1111, 3, 0)');
console.log(ms(1111, 3, 0));
console.log('msfor(1243, 1, 0)');
console.log(msfor(1243, 1, 0));
console.log('msfor(1243, 2, 0)');
console.log(msfor(1243, 2, 0));
