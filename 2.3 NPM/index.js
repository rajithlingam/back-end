// var generateName = require('sillyname');

import generateName from "sillyname"
var sillyName = generateName();

console.log(`\nmy random name is ${sillyName}.`);


import names from "vainglory-hero-names";
var allNames = names.all;
var randomName = names.random();
var threeRandomNames = names.random(3);


console.log(`\n${threeRandomNames}`);

import { randomSuperhero } from "superheroes";
const name = randomSuperhero();
console.log(`\nI am ${name}!`);