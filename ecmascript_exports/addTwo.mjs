/*demo of the .mjs import, which is the same as the type:module withou the .mjs extension
*
* this exemples does NOT care about type:module and will run even if the mention is removed in package.json
* */

function addTwo(num) {
    return num + 2;
}
export {addTwo}