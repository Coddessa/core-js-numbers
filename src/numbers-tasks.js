/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns an area of a rectangle given by width and height.
 * Возвращает площадь прямоугольника, заданную шириной и высотой.
 *
 * @param {number} width
 * @param {number} height
 * @return {number}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
function getRectangleArea(rectangleWidth, rectangleHeight) {
  return rectangleWidth * rectangleHeight;
}

/**
 * Returns a circumference of circle given by radius.
 * Возвращает длину окружности, заданную радиусом.
 * L = 2*pi*r
 *
 * @param {number} radius
 * @return {number}
 *
 * @example:
 *   5    => 31.41592653589793
 *   3.14 => 19.729201864543903
 *   0    => 0
 */
function getCircleCircumference(circleRadius) {
  return 2 * Math.PI * circleRadius;
}

/**
 * Returns an average of two given numbers.
 * Возвращает среднее значение двух заданных чисел.
 *
 * @param {number} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(value1, value2) {
  return value1 / 2 + value2 / 2;
}

/**
 * Returns a distance between two points by cartesian coordinates.
 * Возвращает расстояние между двумя точками по картезианским координатам.
 * l = корень ((x2-x1)^2)+(y2-y1)^2)
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  const l = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return l;
}

/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 * Возвращает корень линейного уравнения a*x + b = 0, заданный коэффициентами a и b.
 * x=-b/a
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(a, b) {
  return -b / a;
}

/**
 * Returns an angle (in radians) between two vectors given by xi and yi,
 * coordinates in Cartesian plane.
 * Возвращает угол (в радианах) между двумя векторами, заданными xi и yi,
 * координаты в декартовой плоскости.
 * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
 *
 * x1*x2+y1*y2 - скалярное произведение векторов
 * корень(x1^2+y1^2) и корень(x2^2+y2^2)  модули (длины) векторов
 * угол = арккосинус (скалярное произведение/произведение модулей (длин) векторов)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 *
 * @example:
 *   (1,0) (0,1)     => π/2
 *   (0,1) (0,-1)    => π
 *   (0,-1) (1,0)    => π/2
 *   (0,1) (0,1)     => 0
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
  const uv = x1 * x2 + y1 * y2;
  const modU = Math.sqrt(x1 * x1 + y1 * y1);
  const modV = Math.sqrt(x2 * x2 + y2 * y2);

  const angle = Math.acos(uv / (modU * modV));
  return angle;
}

/**
 * Returns a last digit of a integer number.
 * The input parameter will always be greater than or equal to zero and will be in decimal notation.
 * Возвращает последнюю цифру целого числа.
 * Входной параметр всегда будет больше или равен нулю и будет представлен в десятичной системе счисления.
 *
 * @param {number} value
 * @return {number}
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
function getLastDigit(value) {
  return value % 10;
}

/**
 * Returns a number by given string representation.
 * Возвращает число в соответствии с заданным строковым представлением.
 * @param {string} value
 * @return {number}
 *
 * @example:
 *    '100'     => 100
 *     '37'     => 37
 * '-525.5'     => -525.5
 */
function parseNumberFromString(value) {
  return parseFloat(value);
}

/**
 * Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
 * Возвращает длину диагонали прямоугольного параллелепипеда, заданную его сторонами a,b,c.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 *
 * @example:
 *   1,1,1   => 1.7320508075688772
 *   3,3,3   => 5.196152422706632
 *   1,2,3   => 3.741657386773941
 */
function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

/**
 * Returns the number rounded to specified power of 10.
 * Возвращает число, округленное до указанной степени 10.
 * 1678/100=16,78=>17*100=700
 *
 * @param {number} num
 * @param {number} pow
 * @return {number}
 *
 * @example:
 *   1234, 0  => 1234
 *   1234, 1  => 1230
 *   1234, 2  => 1200
 *   1234, 3  => 1000
 *   1678, 0  => 1678
 *   1678, 1  => 1680
 *   1678, 2  => 1700
 *   1678, 3  => 2000
 */
function roundToPowerOfTen(num, pow) {
  const degree = 10 ** pow;
  const whole = Math.round(num / degree);
  const result = whole * degree;
  return result;
}

/**
 * Returns true is the number is prime; otherwise false.
 * Возвращает true, если число простое; в противном случае ложь.
 * See: https://en.wikipedia.org/wiki/Primality_test
 * число является простым, если оно делится нацело только на 1 и на само себя
 *
 *
 * @param {number} n
 * @return {bool}
 *
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(n) {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Tries to convert value to number and returns it if conversion was successful;
 * otherwise returns default value passed as a second argument.
 * Пытается преобразовать значение в число и возвращает его, если преобразование прошло успешно;
 * в противном случае возвращает значение по умолчанию, переданное в качестве второго аргумента.
 *
 * @param {any} value
 * @param {any} def
 * @return {number}
 *
 * @example
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
function toNumber(value, def) {
  const valueToNumber = Number(value);
  const isNum = Number.isNaN(valueToNumber) ? def : valueToNumber;
  return isNum;
}

/**
 * Returns the cube of the given number.
 * Возвращает куб заданного числа.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   3  => 27
 *   -2 => -8
 *   0  => 0
 */
function getCube(num) {
  return num ** 3;
}

/**
 * Returns the Fibonacci number located at the index position.
 * Возвращает число Фибоначчи, расположенное в позиции индекса.
 * Рекурсия
 * @param {number} index
 * @return {number}
 *
 * @example:
 *   0  => 0
 *   1  => 1
 *   2  => 1
 *   3  => 2
 *   10 => 55
 */
function getFibonacciNumber(index) {
  if (index <= 1) {
    return index;
  }
  return getFibonacciNumber(index - 1) + getFibonacciNumber(index - 2);
}

/**
 * Returns the sum of all numbers from 1 to n.
 * Возвращает сумму всех чисел от 1 до n.
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   5  => 15 // (1+2+3+4+5)
 *   10 => 55 // (1+2+3+...+10)
 *   1  => 1
 */
function getSumToN(n) {
  const sumNumbers = (n * (n + 1)) / 2;
  return sumNumbers;
}

/**
 * Returns the sum of the digits of a given number.
 * Возвращает сумму цифр заданного числа.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   123 => 6  // (1+2+3)
 *   202 => 4  // (2+0+2)
 *   5   => 5  // 5
 */
function getSumOfDigits(num) {
  let sum = 0;
  let i = num;

  while (i > 0) {
    sum += i % 10;
    i = Math.floor(i / 10);
  }
  return sum;
}

/**
 * Returns true if the given number is a power of two, false otherwise.
 * Возвращает true, если заданное число является степенью двойки, false - в противном случае.
 *
 * @param {number} num
 * @return {boolean}
 *
 * @example:
 *   4   => true
 *   16  => true
 *   15  => false
 */
function isPowerOfTwo(num) {
  let i = num;
  if (i < 2) {
    return false;
  }

  while (i >= 2) {
    if (i % 2 !== 0) {
      return false;
    }
    i /= 2;
  }
  return true;
}

/**
 * Returns the sine of a number.
 * Возвращает синус числа.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   0 => 0
 *   Math.PI / 2 => 1
 */
function getSine(num) {
  return Math.sin(num);
}

/**
 * Returns a string representation of a number in a specified base (radix).
 * Возвращает строковое представление числа в указанном основании (радиксе).
 *
 * @param {number} number
 * @param {number} base
 * @return {string}
 *
 * @example:
 * 255, 16 => 'ff'
 * 2, 2    => '10'
 */
function numberToStringInBase(number, base) {
  return number.toString(base);
}

/**
 * Returns a string representation of a number in exponential notation.
 * Возвращает строковое представление числа в экспоненциальной нотации.
 *
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '1.23e+4'
 */
function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}

/**
 * Returns a string representation of a number in fixed-point notation.
 * Возвращает строковое представление числа в нотации с фиксированной точкой.
 *
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '12345.00'
 * 12.345, 1   => '12.3'
 */
function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}

/**
 * Returns a string representation of a number in normal (fixed-point or exponential)
 * notation rounded to precision significant digits.
 * Возвращает строковое представление числа в обычной (с фиксированной точкой или экспоненциальной)
 * нотации с округлением до точных значащих цифр.
 *
 * @param {number} number
 * @param {number} precision
 * @return {string}
 *
 * @example:
 * 12345, 7    => '12345.00'
 * 12.345, 4   => '12.35'
 */
function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

/**
 * Returns the primitive value of a Number object.
 * Возвращает примитивное значение объекта Number.

 *
 * @param {Number} number
 * @return {number}
 *
 * @example:
 * new Number(5) => 5
 * Number(-5)    => -5
 */
function getNumberValue(number) {
  return number.valueOf();
}

/**
 * Returns a boolean value indicating whether the parameter is a number or not.
 * Возвращает булево значение, указывающее, является ли параметр числом или нет.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * Infinity => false
 * NaN      => false
 * 0        => true
 * 'a' / 1  => false
 * 'a'      => false
 * 5        => true
 * '5'      => false
 */
function isNumber(number) {
  if (
    typeof number === 'number' &&
    !Number.isNaN(number) &&
    Number.isFinite(number)
  ) {
    return true;
  }
  return false;
}

/**
 * Returns a boolean value indicating whether a number is an integer or not.
 * Возвращает булево значение, указывающее, является ли число целым или нет.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 5    => true
 * 5.1  => false
 * '5'  => false
 */
function isInteger(number) {
  return Number.isInteger(number);
}

/**
 * Returns a floating point number or, if the number cannot be parsed from the argument, returns NaN.
 * Возвращает число с плавающей точкой или, если число не может быть разобрано из аргумента, возвращает NaN.
 *
 * @param {string} str
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh' => 4.567
 * 'abcdefgh'      => NaN
 */
function getFloatOnString(str) {
  return Number.parseFloat(str);
}

/**
 * Returns an integer of the specified base or, if the number cannot be parsed
 * from the argument, returns NaN.
 * Возвращает целое число с указанным основанием или, если число не может быть разобрано
 * из аргумента, возвращает NaN.
 *
 * @param {string} str
 * @param {number} base
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh', 10  => 4
 * 'abcdefgh', 10       => NaN
 * '1.234', 2           => 1
 * '10', 8              => 8
 */
function getIntegerOnString(str, base) {
  return Number.parseInt(str, base);
}

/**
 * Returns whether a number is a safe integer.
 * Возвращает, является ли число безопасным целым числом.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 10       => true
 * 3.5      => false
 * 2 ** 53  => false
 */
function isSafeInteger(number) {
  return Number.isSafeInteger(number);
}

/**
 * Returns the smallest integer less than or equal to a given number.
 *Возвращает наименьшее целое число, меньшее или равное заданному.

 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.9  => 5
 * -5.1 => -6
 */
function roundToSmallestInteger(number) {
  return Math.floor(number);
}

/**
 * Returns the largest integer greater than or equal to a given number.
 * Возвращает наибольшее целое число, большее или равное заданному.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.1  => 6
 * -5.9 => -5
 */
function roundToLargestInteger(number) {
  return Math.ceil(number);
}

/**
 * Returns the value of a number rounded to the nearest integer.
 * Возвращает значение числа, округленное до ближайшего целого.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.5  => 6
 * 5.4  => 5
 * -5.5 => -5
 */
function roundToNearestInteger(number) {
  return Math.round(number);
}

/**
 * Returns the integer part of a number by removing any fractional digits.
 * Возвращает целую часть числа, удаляя все дробные цифры.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.5  => 5
 * 5.4  => 5
 * -5.5 => -5
 */
function getIntegerPartNumber(number) {
  return Math.trunc(number);
}

/**
 * Returns the sum of numbers.
 *
 * @param {number} x1
 * @param {number} x2
 * @param {number} x3
 * @returns {number}
 *
 * @example:
 * 1, 2, 3       => 6
 * 0.1, 0.2, 0.3 => 0.6
 */
function getSumOfNumbers(x1, x2, x3) {
  const sum = x1 + x2 + x3;
  return sum.toFixed(1);
}

/**
 * Returns the largest number.
 *
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 *
 * @example:
 * 1, 2   => 2
 * -5, -6 => -5
 * 0, 5   => 5
 */
function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

/**
 * Returns a random integer in the range from min to max.
 * Возвращает случайное целое число в диапазоне от min до max.
 *
 * @param {number} min
 * @param {number} max
 * @return {number}
 *
 * @example:
 * 1, 2  => 1 | 2
 * -5, 0 => -5 | -4 | -3 | -2 | -1 | 0
 * -1, 1 => -1 | 0 | 1
 */
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Returns the length of the hypotenuse of a right triangle.
 * Возвращает длину гипотенузы правильного треугольника.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 * 3, 4 => 5
 */
function getHypotenuse(a, b) {
  return Math.hypot(a, b);
}

/**
 * Returns count of odd numbers from zero to the resulting number.
 * The resulting number is taken into account.
 * Возвращает количество нечетных чисел от нуля до результирующего числа.
 * Учитывается результирующее число.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 4  => 2
 * 5  => 3
 * 10 => 5
 * 15 => 8
 */
function getCountOfOddNumbers(number) {
  const absCount = Math.abs(number);
  return Math.floor((absCount + 1) / 2);
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
