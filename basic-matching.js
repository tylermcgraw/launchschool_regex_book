// 1
test(/K/, "Kx", "BlacK", "kelly");

// 2
test(/h/i, "Henry", "perch", "golf");

// 3
test(/dragon/, "snapdragon", "bearded dragon", "dragoon");

// 4
test(/(banana|orange|apple|strawberry)/, "banana", "orange", "pineapples", "strawberry", "raspberry", "grappler");

// 5
test(/( |,)/g, "This line has spaces", "This,line,has,commas,", "No-spaces-or-commas");

// 6
test(/(blue|black)berry/, "blueberry", "blackberry", "black berry", "strawberry");

function test(regex, ...args) {
  for (let arg of args) {
    if (arg.match(regex)) {
      console.log(`Match: ${arg}`);
    }
  }
}