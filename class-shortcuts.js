// 1
test(/\s...\s/, "reds and blues", "the lazy cat sleeps");

// 2
// red doesn't match because the space in front of it was "consumed"
// by the regex engine when it matched big

// 3
let regex3 =  /\s[\da-f][\da-f][\da-f][\da-f]\s/gi;

// 4
let regex4 = /[a-z][a-z][a-z]/gi;

function test(regex, ...args) {
  for (let arg of args) {
    if (arg.match(regex)) {
      console.log(`Match: ${arg}`);
    }
  }
}