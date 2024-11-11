const fs = require("fs")
fs.appendFile("ankur.docs", " hellow we are mern student ", (err)=>{
    if(err)  throw err;
    console.log(" file succesfulley created!!!")
})