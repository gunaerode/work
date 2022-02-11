// const minusNumber = require('./require');
import minusNumber from './imports.mjs'; // change app.js into app.mjs
// import { minusNumber } from './imports.js'; // Need type="module" in the package.json file

const a = 10;
const b = minusNumber;

console.log('The final value: ', a - b);
