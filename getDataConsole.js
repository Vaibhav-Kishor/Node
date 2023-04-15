//! input from comman line
//? set input from command line
//? create file with input
//? delete the file with input
//? using process
//? fist 2 input fixed
// console.log(process.argv);
// console.log(process.argv[3]);

//! creating file with command line with data
// const fs = require('fs');
// const input = process.argv;
// fs.writeFileSync(input[2],input[3]);

//! add and remove command implement
//? when we pass add command then file will be create with given content
//? when we pass remove command then file will be remove from directory


// const fs = require('fs');
// const input = process.argv;

// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);
// }
// else if (input[2]=='remove') {
//     if(input[3]==null || undefined){
//         console.log('file name is not given');
//         console.log(' or may be wrong file name');
//     }
//     else{
//         fs.unlinkSync(input[3]);
//     }
// }
// else{
//     console.log('Invalid Command or Input');
// }