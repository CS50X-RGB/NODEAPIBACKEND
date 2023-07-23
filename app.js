const express = require('express');
const  mongoose  = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"BackendApi"
})
.then(console.log("DataBase connected"))
.catch(() => console.log(e))
const app = express();
//MiddleWares
app.use(express.json());

const schema = new mongoose.Schema({
    name:String,
    Email:String,
    password:String
})

const User = mongoose.model("User",schema);


app.get('/',(req,res)=>{
    res.send("Hello bhai");
})

app.get('/users/all',async(req,res)=>{
    const users = await User.find({});
    // params
    
    // const key = req.query.keyword;

    res.json({
        sucess:true,
        users,
    })
})


app.get('/users/new',async(req,res)=>{
    const {name,Email,password} = req.body;
    // will not work need middleware of json 
    const users = await User.create({
        name,
        Email,
        password
    });
    // 201 is for creation
    res.status(201).cookie('tempo','hiiz').json({
        sucess:true,
        mesaage:"Sucessful Regsitration",
    })
})

app.get('/user/special',(req,res)=>{
    res.json({
        sucess:"true",
        message:"Just Joking",
    })
})

// ALWAYS KEEP DYNAMIC ROUTING AT END BECUASE FROM TOP JS WILL MAKE THIS ROUTE FIRST
app.get('/userId/:userID',async (req,res)=>{
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
        sucess:"true",
        user,
    })
})

app.listen(4000,() => {
    console.log("Server is running!!")
})