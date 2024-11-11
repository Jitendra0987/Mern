const fs = require("fs");
fs.unlink("jscrate.jsx",(err)=>{
    if (err) throw err;
    console.log("file deleted!!!!")
})