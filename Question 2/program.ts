import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Whats your Name ? ', (answer) => {
    console.log('Hello '+answer+', would you like to learn some Python today?');
    rl.close();
});