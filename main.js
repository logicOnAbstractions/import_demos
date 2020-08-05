/*this main shows how legacy (commonjs) exports & new (ecma6) exports can coexists in the same project*/

/*then with new syntax, can just re-use */

import {addTwo} from "./ecmascript_exports/addTwo.js";
console.log("adding two: " + addTwo(40))


/* so, for the ecma6 above to be imported, I need type:module. therefore require(...) won't work.
* however, instead of require(), I can use the syntax below on a legacy package. that will yield what they call the "default export"
* it does expect that the source pkg will do module.exports = or exports.stuff
* */

/*const pkg = require('./legacy/circle.js')
console.log(pkg.area(5))
console.log(pkg.circumference(5))
pkg.foo("asdf")*/

/* this syntax allows import legacy stuff in an ecma6 file. */

/* circle_modex.js uses module.exports */
import pkg from './legacy/circle_modex.js'
pkg(" using modules.exports")

/*this also works with exports.bar, exports.bar2, ... , syntax for multiple objects*/
import pkg3 from './legacy/circle_modex2.js'
import pkg2 from './legacy/circle_modex2.js'
pkg2.bar(" using exports.bar")
pkg3.bar2(" using exports.bar2")
