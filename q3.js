let family = {
  parents: {},
  children: [{ name: "Ali" }, { name: "Lea" }, { name: "Mona" }],
};

function log_third_child(obj) {
  console.log(obj.children[2].name);
}

log_third_child(family);
