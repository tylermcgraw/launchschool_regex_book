// 1
test(/[Kks]/, "Kitchen Kaboodle", "Reds and blues", "kitchen Servers");

// 2
// /[bc][aou]t/i

// 3
test(/[0-9a-jA-J]/, "0xDEADBEEF", "1234.5678", "Jamaica", "plow ahead");

// 4
// /[A-WYZa-wyz]/

// 5
// /[^xX]/ matches all characters except x and X, not all letters except X and X

// 6
// /[^A-Za-z \n\r]/

// 7
// Not the same. aBc matches 2 but not 1

// 8
// They are equivalent

// 9
test(/\[\^[0-9A-Za-z]-[0-9A-Za-z]\]/, "The", "regex", "/[^a-z]/i", "/[^0-9]/", "/[^A-Z]/", "/[^+-<]/");

function test(regex, ...args) {
  for (let arg of args) {
    if (arg.match(regex)) {
      console.log(`Match: ${arg}`);
    }
  }
}