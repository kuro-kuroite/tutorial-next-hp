'use strict'; // eslint-disable-line

const tsc = require('./scripts/src/js/cjs/tsc.cjs');

// eslint-disable-next-line padding-line-between-statements
const path = './config/.eslintrc.ts';

// HACK: eval compiled code instead of ts-node
module.exports = eval(tsc(path));
