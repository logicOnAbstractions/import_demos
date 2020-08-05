//
// function foo2(args) {
//     console.log("printing your stuff: " + args)
// }
// module.exports = foo2
//

function foo2(args) {
    console.log("foo2 prints your stuff: " + args)
}
exports.bar = foo2


function foo3(args) {
    console.log("foo3 prints your stuff: " + args)
}
exports.bar2 = foo3

