// 264. Ugly Number II

// Write a program to find the n-th ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

// Note that 1 is typically treated as an ugly number.

/**
 * @param {number} n
 * @return {number}
 */
let nthUglyNumber = function (n) {
  let uglys = [1];
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;

  while (uglys.length < n) {
    let ugly2 = uglys[p2] * 2;
    let ugly3 = uglys[p3] * 3;
    let ugly5 = uglys[p5] * 5;

    let minV = Math.min(ugly2, ugly3, ugly5);

    if (minV === ugly2) {
      p2++;
    }
    if (minV === ugly3) {
      p3++;
    }
    if (minV === ugly5) {
      p5++;
    }
    if (minV !== uglys[uglys.length - 1]) {
      uglys.push(minV);
    }
  }

  return uglys[n - 1];
};
