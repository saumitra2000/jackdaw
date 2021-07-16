const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){

  res.sendFile(__dirname + "/signup.html");
});
app.post("/",function(req,res){
  var firstname = req.body.fname;
  var lastname =req.body.lname;
  var email=req.body.email;

  console.log(firstname ,lastname, email);
});

app.listen(3000,function(){
  console.log('server is running successfully on 3000');
});
//446df91b1815b788b6f8a2505e4f07e0-us6
