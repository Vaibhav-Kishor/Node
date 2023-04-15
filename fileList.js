//! show file list
//? Make files in a folder
//? using path module
//? Get file names and print

const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'files');
// console.log(dirPath);

//! creating multiples files & put it into the files directory
// for(let i=1;i<=5;i++){
//     fs.writeFileSync(dirPath+`/file${i}`,`this is file${i}`);
// }

//! reading file from directory
fs.readdir(dirPath,(err,files)=>{
    // console.warn(files);//! return array[]
    files.forEach((items)=>{
        console.log('file name is ',items);
    })
});