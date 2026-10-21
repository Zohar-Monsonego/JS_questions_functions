let a = "some string";
let b = "other string";

function swap_values() {
  [a, b] = [b, a];
}

swap_values();

console.log(a, b);
