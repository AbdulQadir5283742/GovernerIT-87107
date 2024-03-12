"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Whats your Name ? ', function (answer) {
    console.log('Hello ' + answer + ', would you like to learn some Python today?');
    rl.close();
});
