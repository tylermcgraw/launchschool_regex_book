// 1
function isUrl(url) {
  return !!url.match(/^https?:\/\/\S+$/);
}

console.log(isUrl('https://launchschool.com'));   // -> true
console.log(isUrl('http://example.com'));         // -> true
console.log(isUrl('https://example.com hello'));  // -> false
console.log(isUrl('   https://example.com'));     // -> false

// 2
function fields(str) {
  console.log(str.split(/[ \t,]+/));
}

fields("Pete,201,Student");    // ['Pete', '201', 'Student']
fields("Pete \t 201   ,  TA"); // ['Pete', '201', 'TA']
fields("Pete \t 201");         // ['Pete', '201']
fields("Pete \n 201");         // ['Pete', '\n', '201']

// 3
function mysteryMath(str) {
  console.log(str.replace(/[+\-\*/]/, "?"));
}

mysteryMath('4 + 3 - 5 = 2');           // '4 ? 3 - 5 = 2'
mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'); // '(4 ? 3 + 2) / 7 - 1 = 1'

// 4
function mysteriousMath(str) {
  console.log(str.replaceAll(/[+\-\*/]/g, "?"));
}

mysteriousMath('4 + 3 - 5 = 2');            // '4 ? 3 ? 5 = 2'
mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1');  // '(4 ? 3 ? 2) ? 7 ? 1 = 1'

// 5
function danish(str) {
  console.log(str.replace(/\bapple|blueberry|cherry\b/,"danish"));
}

danish('An apple a day keeps the doctor away');
// -> 'An danish a day keeps the doctor away'
danish('My favorite is blueberry pie');
// -> 'My favorite is danish pie'
danish('The cherry of my eye');
// -> 'The danish of my eye'
danish('apple. cherry. blueberry.');
// -> 'danish. cherry. blueberry.'
danish('I love pineapple');
// -> 'I love pineapple'