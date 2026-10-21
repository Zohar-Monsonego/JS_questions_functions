const arr = [
  ["x", "X", "f", "r", "X"],
  ["b", "c", "X", "a", "w"],
  ["X", "X", "x", "e", "c"],
  ["f", "f", "g", "X", "r"],
  ["x", "x", "x", "e", "c"],
];

let count = 0;

function countX(arr) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (arr[i][j] === "X") {
        count++;
        console.log(`X found in: ${i},${j}`);
      }
    }
  }
}

countX(arr);

console.log(`${count} X has been found`);
