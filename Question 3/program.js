"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Whats your Name ? ', function (answer) {
    console.log("Upper Case: " + answer.toUpperCase());
    console.log("Lower Case: " + answer.toLowerCase());
    //const titlecase = answer.toLowerCase().split(' ').map((ans) => ans.charAt(0).toUpperCase() + ans.slice(1)).join(' ');
    console.log("Titlecase: " + answer.split(' ').map(function (ans) { return ans.charAt(0).toUpperCase() + ans.slice(1).toLowerCase(); }).join(' '));
    rl.close();
});
