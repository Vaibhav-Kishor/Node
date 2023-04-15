//! Crud with file system
//? Make file
//? Read file
//? update file
//? Rename file
//? Delete file

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;

//? making file
// fs.writeFileSync(filePath,'This is a simple text file');

//? reading file
// fs.readFile(filePath,'utf-8',(err,item)=>{
//     console.log(item);
// });

//? update file
// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log('file is update');
// })

//? rename file
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log('file name is update')
// });

//? deleting file
// fs.unlinkSync(`${dirPath}/fruit.txt`);