let arr = [3, "z", 1, 4, "a"];

function reverse_arr(arr_) {
  let arr_tmp = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arr_tmp.push(arr[i]);
  }
  arr = arr_tmp;
}

reverse_arr(arr);
console.log(arr);
