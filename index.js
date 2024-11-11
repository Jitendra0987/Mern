

const fs = require("fs")

fs.writeFile("raj.txt","hello friends ",(err)=>{
    if(err) throw err;
    console.log("file name changed")
})