const { PI } = Math;

//export a quick arrow fucntion, a csts etc.
exports.area = (r) => PI * r ** 2;
exports.circumference = (r) => PI * r * 2;

// also possible to export functions & objects, this way
function foo(args) {
    console.log("printing your stuff: " + args)
}
exports.foo = foo

