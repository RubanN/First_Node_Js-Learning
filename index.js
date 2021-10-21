//LocalModule
// const global = require('./One');
// global.func();
// console.log(global.num);
// global.dummy()

// const two = require('./Two');
// var obj = new global.myClass("ruvbn");
// obj.myFunc()

const readline = require('readline');
const events = require('events');
const myEmitter = new events.EventEmitter()
var x = ['john', 'Harry', 'Kevin', "vickey", 'nirma']
myEmitter.addListener('my', () => {
    for (let i = 0; i < x.length; i++) {
        console.log(i + "" + x[i]);
    }
    console.log("Ooooops Fired!!!!!!!!!!!!!!!");
})
setTimeout(() => {
    myEmitter.emit("my")

}, 3000)
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("What is you Name", (ans) => {
//     if (ans === "ruban") {
//         rl.close()
//     } else {
//         rl.setPrompt("Wrong name try again\n")
//         rl.prompt();
//         rl.on('line', (input) => {
//             if (input === "ruban") {
//                 rl.close()
//             } else {
//                 rl.setPrompt(input + "wrong \n");
//                 rl.prompt()
//             }
//         })
//     }
//     rl.close()
// })
