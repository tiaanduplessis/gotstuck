#!/usr/bin/env node
const gotstuck = require('.');
const string = process.argv.slice(2).join(' ');
gotstuck(string);
