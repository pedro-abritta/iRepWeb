const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("TESTANDO!")
})

/*app.post("/addalogin", function(req, res){
    res.send("LOGIN REALIZADO!")
})*/

app.listen(3001, function(){
    console.log("Servidor funcionando! OK");
  });