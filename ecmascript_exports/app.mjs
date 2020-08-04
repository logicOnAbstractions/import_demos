/*demo of the .mjs import, which is the same as the type:module withou the .mjs extension
*
* this exemples does NOT care about type:module and will run even if the mention is removed in package.json
* */

import {addTwo} from "./addTwo.mjs";
console.log(addTwo(4))