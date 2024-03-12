import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Whats your Name ? ', (answer) => {
    console.log("Upper Case: " + answer.toUpperCase());
    console.log("Lower Case: " + answer.toLowerCase());
    console.log("Title Case: " + answer.split(' ').map(ans => ans.charAt(0).toUpperCase() + ans.slice(1).toLowerCase()).join(' '));
    rl.close();
});

