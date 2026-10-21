const obj = {
  name: "zzzz",
};

const arr = [null, 2, "s", obj, true];

let count_null = 0;
let count_num = 0;
let count_string = 0;
let count_obj = 0;
let count_bool = 0;

function count_types(arr_) {
  for (let i = 0; i < arr_.length; i++) {
    if (typeof arr_[i] == Number) {
      count_num++;
    } else if (typeof arr_[i] == String) {
      count_string++;
    } else if (typeof arr_[i] == Object && arr_[i] == null) {
      count_null++;
    } else if (typeof arr_[i] == Boolean) {
      count_bool++;
    } else {
      count_obj++;
    }
  }

  console.log("boolean:");
}
