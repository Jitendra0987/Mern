const http = require("http")
const myclg =require("./cybrom.jsx")

http.createServer((req,res)=>{
    res.write("<h2> welcome </h2>")
    res.write(myclg.myCollege())
    res.write(myclg.myFees())
    res.end("<h2>.....server end ... </h2>");
}).listen(9000)