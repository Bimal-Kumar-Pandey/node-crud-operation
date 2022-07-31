
const express = require("express");
var app = express();
var usermodel = require("./models/user");

// crud operation-------

app.get("/" , (req, res )=>{

    usermodel.create({
        name : "abhi kumar pandey",
        email : 'abhikumarpandey@gmail.com',
        age: 24
    }).then(function(createdUser){
        res.json(createdUser);
    });   
});


app.get("/users" , (req , res)=>{
    usermodel.find()
    .then(function(foundUsers){
        res.json(foundUsers);
    });
});


app.get("/user/:id" , (req, res)=>{
    usermodel.findOne({name: req.params.id})
    .then((foundOneUser)=>{
        res.json(foundOneUser);
    })
})


app.get("/user/delete/:id" , (req , res)=>{
    usermodel.findByIdAndDelete({_id : req.params.id})
    .then((userDeleted)=>{
res.json(userDeleted);
    })
})


app.get("/user/update/:id" , (req , res)=>{
    usermodel.findByIdAndUpdate({_id : req.params.id},{name : "Rahul pande ji " ,age: "25"},{new:true},)
    .then((userUpdated)=>{
res.json(userUpdated);
    })
})


app.listen("3000", ()=>{
    console.log("app is runing on 3000 port");
})