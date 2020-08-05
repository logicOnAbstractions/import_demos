const circle = require('./circle.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
console.log(`The circumference of a circle of radius 4 is ${circle.circumference(4)}`);

const c2 = require('./circle_modex')
c2("another syntaxe for legacy")

const c3 = require('./circle_modex2')
c3(" another legacy import variation ")